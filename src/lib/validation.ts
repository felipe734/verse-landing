export const propertyTypeOptions = [
  "Apartamento",
  "Apartaestudio",
  "Casa",
  "Loft",
  "Habitación",
  "Otro",
] as const;

export type PropertyType = (typeof propertyTypeOptions)[number];

export type ChequeoFormData = {
  name: string;
  whatsapp: string;
  location: string;
  propertyType: string;
  details: string;
};

export type ChequeoSubmitResponse = {
  message?: string;
  fieldErrors?: ChequeoFieldErrors;
};

export type ChequeoFieldErrors = Partial<
  Record<"name" | "whatsapp" | "location" | "propertyType", string>
>;

const namePattern = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]+$/;

function toStringValue(value: unknown) {
  return typeof value === "string" ? value : "";
}

export function createEmptyChequeoFormData(): ChequeoFormData {
  return {
    name: "",
    whatsapp: "",
    location: "",
    propertyType: "",
    details: "",
  };
}

export function parseChequeoFormData(input: unknown): ChequeoFormData {
  if (!input || typeof input !== "object") {
    return createEmptyChequeoFormData();
  }

  const data = input as Partial<Record<keyof ChequeoFormData, unknown>>;

  return {
    name: toStringValue(data.name),
    whatsapp: toStringValue(data.whatsapp),
    location: toStringValue(data.location),
    propertyType: toStringValue(data.propertyType),
    details: toStringValue(data.details),
  };
}

function collapseWhitespace(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function normalizeWhatsApp(value: string) {
  return value.replace(/\D/g, "");
}

export function normalizeChequeoFormData(data: ChequeoFormData): ChequeoFormData {
  return {
    name: collapseWhitespace(data.name),
    whatsapp: normalizeWhatsApp(data.whatsapp),
    location: collapseWhitespace(data.location),
    propertyType: data.propertyType.trim(),
    details: data.details.trim(),
  };
}

export function validateChequeoFormData(data: ChequeoFormData) {
  const normalized = normalizeChequeoFormData(data);
  const errors: ChequeoFieldErrors = {};

  const nameLetters = normalized.name.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g, "");

  if (normalized.name.length < 2 || nameLetters.length < 2) {
    errors.name = "Ingresa un nombre real para poder contactarte.";
  } else if (!namePattern.test(normalized.name)) {
    errors.name = "El nombre solo debe incluir letras y espacios.";
  }

  if (normalized.whatsapp.length < 10 || normalized.whatsapp.length > 15) {
    errors.whatsapp = "Ingresa un WhatsApp valido con solo numeros.";
  }

  if (normalized.location.length < 3) {
    errors.location = "Cuentanos una ubicacion valida en Bogota.";
  }

  if (!propertyTypeOptions.includes(normalized.propertyType as PropertyType)) {
    errors.propertyType = "Selecciona un tipo de propiedad.";
  }

  return {
    data: normalized,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}
