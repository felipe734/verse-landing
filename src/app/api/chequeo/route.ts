import { NextResponse } from "next/server";

import {
  type ChequeoSubmitResponse,
  parseChequeoFormData,
  validateChequeoFormData,
} from "@/lib/validation";
import { createChequeoAirtableRecord } from "@/lib/server/airtable";
import { getPostHogClient } from "@/lib/posthog-server";

export const runtime = "nodejs";

function jsonResponse(body: ChequeoSubmitResponse, status: number) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request) {
  let rawPayload: unknown;

  try {
    rawPayload = await request.json();
  } catch {
    return jsonResponse(
      { message: "La solicitud no tiene un formato valido." },
      400,
    );
  }

  const formData = parseChequeoFormData(rawPayload);
  const validation = validateChequeoFormData(formData);

  if (!validation.isValid) {
    return jsonResponse(
      {
        message: "Revisa los campos obligatorios e intentalo de nuevo.",
        fieldErrors: validation.errors,
      },
      400,
    );
  }

  try {
    const result = await createChequeoAirtableRecord(validation.data);

    if (!result.ok) {
      return jsonResponse({ message: result.message }, 502);
    }

    try {
      const posthog = getPostHogClient();

      if (posthog) {
        posthog.capture({
          distinctId: validation.data.whatsapp,
          event: "chequeo_submitted",
          properties: {
            property_type: validation.data.propertyType,
            has_location: Boolean(validation.data.location),
            has_details: Boolean(validation.data.details),
            source: "api",
          },
        });
        await posthog.flush();
      }
    } catch (error) {
      console.error("Chequeo PostHog error", error);
    }

    return jsonResponse(
      { message: "Solicitud enviada correctamente." },
      200,
    );
  } catch (error) {
    console.error("Chequeo route error", error);

    return jsonResponse(
      { message: "No pudimos enviar tu solicitud. Intentalo de nuevo en un momento." },
      500,
    );
  }
}
