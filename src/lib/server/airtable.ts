import "server-only";

import type { ChequeoFormData } from "@/lib/validation";

type AirtableCreateRecordResult =
  | { ok: true }
  | { ok: false; message: string };

const FIELD_DEFAULTS = {
  name: "Nombre",
  whatsapp: "WhatsApp",
  location: "Ubicacion",
  propertyType: "Tipo_Propiedad",
  details: "Comentario",
} as const;

function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getAirtableEnv(): {
  personalAccessToken: string;
  baseId: string;
  tableName: string;
} {
  return {
    personalAccessToken: getRequiredEnv("AIRTABLE_API_KEY"),
    baseId: getRequiredEnv("AIRTABLE_BASE_ID"),
    tableName: getRequiredEnv("AIRTABLE_TABLE_NAME"),
  };
}

function getFieldEnv(key: keyof typeof FIELD_DEFAULTS): string {
  const envKey = `AIRTABLE_FIELD_NAME_${key.toUpperCase()}` as
    | "AIRTABLE_FIELD_NAME_NAME"
    | "AIRTABLE_FIELD_NAME_WHATSAPP"
    | "AIRTABLE_FIELD_NAME_LOCATION"
    | "AIRTABLE_FIELD_NAME_PROPERTY_TYPE"
    | "AIRTABLE_FIELD_NAME_DETAILS";

  return process.env[envKey]?.trim() ?? FIELD_DEFAULTS[key];
}

function buildChequeoFields(data: ChequeoFormData) {
  return {
    [getFieldEnv("name")]: data.name,
    [getFieldEnv("whatsapp")]: data.whatsapp,
    [getFieldEnv("location")]: data.location,
    [getFieldEnv("propertyType")]: data.propertyType,
    [getFieldEnv("details")]: data.details,
  };
}

export async function createChequeoAirtableRecord(
  data: ChequeoFormData,
): Promise<AirtableCreateRecordResult> {
  const { personalAccessToken, baseId, tableName } = getAirtableEnv();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${personalAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields: buildChequeoFields(data) }],
          typecast: true,
        }),
        cache: "no-store",
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      const responseBody = await response.text();

      console.error("Airtable create record failed", {
        status: response.status,
        body: responseBody,
      });

      return {
        ok: false,
        message: "No pudimos registrar tu solicitud en este momento.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("Airtable request error", error);

    return {
      ok: false,
      message: "No pudimos registrar tu solicitud en este momento.",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
