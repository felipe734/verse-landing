"use client";

import { CheckCircle2, Clock3, TrendingUp, ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  type ChequeoFieldErrors,
  type ChequeoFormData,
  type ChequeoSubmitResponse,
  createEmptyChequeoFormData,
  propertyTypeOptions,
  validateChequeoFormData,
} from "@/lib/validation";

const init = createEmptyChequeoFormData();

const vp = [
  { icon: CheckCircle2, t: "Diagnóstico claro", d: "Revisamos tu caso y te decimos si tiene sentido, qué problemas vemos y qué oportunidades hay." },
  { icon: TrendingUp, t: "Escenario estimado", d: "Te damos números estimados de ocupación, ingresos y gastos realistas para tu caso específico." },
  { icon: Clock3, t: "Siguiente paso sugerido", d: "Plan de acción concreto, ya sea contigo, con nosotros, o por tu cuenta." },
];

export default function CTAForm() {
  const [f, setF] = useState(init);
  const [done, setDone] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<ChequeoFieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const up =
    (k: keyof ChequeoFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value;

      setF((s) => ({ ...s, [k]: value }));
      setSubmitError("");

      if (k !== "details") {
        setFieldErrors((s) => ({ ...s, [k]: undefined }));
      }
    };

  const resetForm = () => {
    setDone(false);
    setF(createEmptyChequeoFormData());
    setFieldErrors({});
    setSubmitError("");
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    const validation = validateChequeoFormData(f);

    setF(validation.data);
    setFieldErrors(validation.errors);
    setSubmitError("");

    if (!validation.isValid) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/chequeo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      const payload = (await response.json()) as ChequeoSubmitResponse;

      if (!response.ok) {
        setFieldErrors(payload.fieldErrors ?? {});
        setSubmitError(
          payload.message ??
            "No pudimos enviar tu solicitud. Intentalo de nuevo en un momento.",
        );
        return;
      }

      setDone(true);
      setF(createEmptyChequeoFormData());
      setFieldErrors({});
    } catch {
      setSubmitError(
        "No pudimos enviar tu solicitud. Revisa tu conexion e intentalo de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="chequeo" className="section-padding bg-[#faf9f7]">
      <div className="section-container grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="max-w-lg">
          <motion.h2 variants={fadeUp} className="heading-lg">Chequeo Verse Host</motion.h2>
          <motion.p variants={fadeUp} className="text-body mt-4">Cuéntanos de tu propiedad y te damos un diagnóstico claro con siguiente paso sugerido. Sin compromiso.</motion.p>
          <motion.div variants={fadeUp} className="mt-10 space-y-8">
            {vp.map((item) => { const I = item.icon; return (
              <div key={item.t} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-verse-50 text-verse-500"><I className="h-5 w-5" /></div>
                <div>
                  <h3 className="text-[0.95rem] font-bold text-neutral-900">{item.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500">{item.d}</p>
                </div>
              </div>
            ); })}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.1 }} className="card p-6 md:p-8">
          {done ? (
            <div className="rounded-2xl border border-verse-200/60 bg-verse-50/60 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-verse-600">Solicitud enviada</p>
              <h3 className="mt-3 text-xl font-bold text-neutral-900">Gracias por compartir tu caso.</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">Te responderemos en menos de 24 horas con un siguiente paso sugerido.</p>
              <button type="button" className="mt-5 text-sm font-semibold text-verse-600 hover:text-verse-700" onClick={resetForm}>Enviar otro caso</button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={submit} noValidate>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Solicita tu Chequeo</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-verse-500"><Clock3 className="h-3.5 w-3.5" />Respuesta en menos de 24 horas</p>
              </div>
              {submitError ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </div>
              ) : null}
              <div className="grid gap-3 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Nombre *"
                  value={f.name}
                  onChange={up("name")}
                  placeholder="Tu nombre"
                  error={fieldErrors.name}
                  autoComplete="name"
                  disabled={isSubmitting}
                />
                <Field
                  id="whatsapp"
                  label="WhatsApp *"
                  value={f.whatsapp}
                  onChange={up("whatsapp")}
                  placeholder="300 123 4567"
                  type="tel"
                  error={fieldErrors.whatsapp}
                  inputMode="numeric"
                  autoComplete="tel"
                  disabled={isSubmitting}
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field
                  id="location"
                  label="Ubicación"
                  value={f.location}
                  onChange={up("location")}
                  placeholder="Ej: Chapinero, Usaquén..."
                  error={fieldErrors.location}
                  autoComplete="address-level2"
                  disabled={isSubmitting}
                />
                <div>
                  <label htmlFor="propertyType" className="mb-1.5 block text-sm font-medium text-neutral-700">Tipo de Propiedad *</label>
                  <select
                    id="propertyType"
                    className={cn(
                      "input-field",
                      fieldErrors.propertyType && "border-red-300 focus:border-red-400 focus:ring-red-100",
                    )}
                    value={f.propertyType}
                    onChange={up("propertyType")}
                    aria-invalid={Boolean(fieldErrors.propertyType)}
                    aria-describedby={fieldErrors.propertyType ? "propertyType-error" : undefined}
                    disabled={isSubmitting}
                  >
                    <option value="">Selecciona</option>
                    {propertyTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.propertyType ? (
                    <p
                      id="propertyType-error"
                      className="mt-1.5 text-sm text-red-600"
                      aria-live="polite"
                    >
                      {fieldErrors.propertyType}
                    </p>
                  ) : null}
                </div>
              </div>
              <div>
                <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-neutral-700">Cuentanos mas (opcional)</label>
                <textarea
                  id="details"
                  rows={3}
                  placeholder="Cualquier detalle que nos ayude a entender mejor tu caso..."
                  className="input-field resize-none"
                  value={f.details}
                  onChange={up("details")}
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center py-4 disabled:pointer-events-none disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando solicitud..." : "Solicitar Chequeo Verse Host"}
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-neutral-400">Respuesta en &lt; 24 horas &middot; Sin compromiso</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  inputMode,
  autoComplete,
  disabled = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-700">{label}</label>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={cn(
          "input-field",
          error && "border-red-300 focus:border-red-400 focus:ring-red-100",
        )}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        disabled={disabled}
      />
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-sm text-red-600"
          aria-live="polite"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
