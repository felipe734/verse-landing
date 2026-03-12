"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const points = [
  "Expediente legal por cada reserva (TRA, SIRE, póliza)",
  "Estado de cumplimiento visible en tiempo real",
  "Reportes automatizados con soporte descargable",
];

const bentoCards = [
  { label: "Reservas", value: "126", span: "col-span-1" },
  { label: "Check-ins", value: "98%", span: "col-span-1" },
  { label: "Tarifa media", value: "$181k", span: "col-span-1" },
];

const tableRows = [
  ["VH-2031", "Checklist legal completo", "PDF"],
  ["VH-2032", "Póliza validada", "ZIP"],
  ["VH-2033", "TRA y SIRE cargados", "PDF"],
];

export default function Technology() {
  return (
    <section id="recursos" className="relative section-padding bg-[#0a0a0a] bg-grain overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-verse-500/20 bg-verse-500/10 px-3.5 py-1.5 text-sm font-semibold text-verse-400">
              Tecnología propia
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-6 text-3xl font-bold tracking-[-0.035em] text-white md:text-[2.75rem] md:leading-[1.1]">
              Tu propiedad opera sobre
              <br />
              <span className="bg-gradient-to-r from-verse-400 to-verse-300 bg-clip-text text-transparent">
                un sistema profesional.
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-neutral-400">
              Construimos nuestro propio software de operación: cumplimiento legal automatizado, expediente por reserva con evidencia, y trazabilidad completa.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-3 text-base font-medium text-neutral-300">
              No usamos hojas de cálculo. No improvisamos.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-verse-400" />
                  <span className="text-sm text-neutral-300">{p}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] shadow-2xl shadow-black/40 backdrop-blur-sm">
              <div className="flex h-9 items-center gap-1.5 border-b border-white/[0.06] px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>

              <div className="space-y-4 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {bentoCards.map((card) => (
                    <div key={card.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]">
                      <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-500">
                        {card.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-neutral-100">
                        {card.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-500">
                      Cumplimiento
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-200">Completo</p>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                </div>

                <div className="overflow-hidden rounded-xl border border-white/[0.06]">
                  <div className="grid grid-cols-[1.2fr_1fr_0.6fr] bg-white/[0.03] px-4 py-2.5 text-[10px] font-medium uppercase tracking-widest text-neutral-500">
                    <span>Reserva</span>
                    <span>Estado</span>
                    <span>Soporte</span>
                  </div>
                  {tableRows.map(([id, status, file]) => (
                    <div
                      key={id}
                      className="grid grid-cols-[1.2fr_1fr_0.6fr] border-t border-white/[0.04] px-4 py-3 text-sm"
                    >
                      <span className="font-medium text-neutral-200">{id}</span>
                      <span className="text-neutral-400">{status}</span>
                      <span className="text-neutral-500">{file}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
