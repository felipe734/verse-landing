"use client";

import { CheckCircle2, Clock3, TrendingUp, ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const init = { name: "", whatsapp: "", propertyType: "", location: "", details: "" };

const vp = [
  { icon: CheckCircle2, t: "Diagnóstico claro", d: "Revisamos tu caso y te decimos si tiene sentido, qué problemas vemos y qué oportunidades hay." },
  { icon: TrendingUp, t: "Escenario estimado", d: "Te damos números estimados de ocupación, ingresos y gastos realistas para tu caso específico." },
  { icon: Clock3, t: "Siguiente paso sugerido", d: "Plan de acción concreto, ya sea contigo, con nosotros, o por tu cuenta." },
];

export default function CTAForm() {
  const [f, setF] = useState(init);
  const [done, setDone] = useState(false);
  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF((s) => ({ ...s, [k]: e.target.value }));
  const submit = (e: FormEvent) => { e.preventDefault(); setDone(true); setF(init); };

  return (
    <section id="chequeo" className="section-padding bg-white">
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
              <button type="button" className="mt-5 text-sm font-semibold text-verse-600 hover:text-verse-700" onClick={() => setDone(false)}>Enviar otro caso</button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={submit}>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Solicita tu Chequeo</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-verse-500"><Clock3 className="h-3.5 w-3.5" />Respuesta en menos de 24 horas</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" label="Nombre *" value={f.name} onChange={up("name")} placeholder="Tu nombre" />
                <Field id="whatsapp" label="WhatsApp *" value={f.whatsapp} onChange={up("whatsapp")} placeholder="300 123 4567" type="tel" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="location" label="Ubicación en Bogotá *" value={f.location} onChange={up("location")} placeholder="Ej: Chapinero, Usaquén..." />
                <div>
                  <label htmlFor="propertyType" className="mb-1.5 block text-sm font-medium text-neutral-700">Tipo de propiedad *</label>
                  <select id="propertyType" required className="input-field" value={f.propertyType} onChange={up("propertyType")}>
                    <option value="">Selecciona</option>
                    <option>Apartamento</option>
                    <option>Apartaestudio</option>
                    <option>Casa</option>
                    <option>Otro</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-neutral-700">Cuéntanos más (opcional)</label>
                <textarea id="details" rows={3} placeholder="Cualquier detalle que nos ayude a entender mejor tu caso..." className="input-field resize-none" value={f.details} onChange={up("details")} />
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-4">Solicitar Chequeo Verse Host<ArrowRight className="h-4 w-4" /></button>
              <p className="text-center text-xs text-neutral-400">Respuesta en &lt; 24 horas &middot; Sin compromiso</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ id, label, value, onChange, placeholder, type = "text" }: { id: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-700">{label}</label>
      <input id={id} required type={type} placeholder={placeholder} className="input-field" value={value} onChange={onChange} />
    </div>
  );
}
