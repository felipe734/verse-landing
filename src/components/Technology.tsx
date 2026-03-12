"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const bentoCards = [
  { label: "Reservas", value: "126" },
  { label: "Check-ins", value: "98%" },
  { label: "Tarifa media", value: "$181k" },
];

const tableRows = [
  ["VH-2031", "Checklist legal completo", "PDF"],
  ["VH-2032", "Póliza validada", "ZIP"],
  ["VH-2033", "TRA y SIRE cargados", "PDF"],
];

export default function Technology() {
  return (
    <section id="recursos" className="relative overflow-hidden bg-white section-padding">
      <div className="section-container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-verse-200 bg-verse-50 px-3.5 py-1.5 text-sm font-semibold text-verse-600">
              Tecnología propia
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-6 text-3xl font-bold tracking-[-0.035em] text-neutral-900 md:text-[2.75rem] md:leading-[1.1]">
              Tu propiedad opera con
              <br />
              un sistema profesional.
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-neutral-500">
              Todo queda organizado en un solo sistema: reservas, cumplimiento y reportes claros.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/70">
              <div className="flex h-9 items-center gap-1.5 border-b border-neutral-200 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
              </div>

              <div className="space-y-4 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {bentoCards.map((card) => (
                    <div key={card.label} className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                      <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                        {card.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-neutral-900">
                        {card.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                      Cumplimiento
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-800">Completo</p>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                </div>

                <div className="overflow-hidden rounded-xl border border-neutral-200">
                  <div className="grid grid-cols-[1.2fr_1fr_0.6fr] bg-neutral-50 px-4 py-2.5 text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                    <span>Reserva</span>
                    <span>Estado</span>
                    <span>Soporte</span>
                  </div>
                  {tableRows.map(([id, status, file]) => (
                    <div
                      key={id}
                      className="grid grid-cols-[1.2fr_1fr_0.6fr] border-t border-neutral-200 px-4 py-3 text-sm"
                    >
                      <span className="font-medium text-neutral-800">{id}</span>
                      <span className="text-neutral-500">{status}</span>
                      <span className="text-neutral-400">{file}</span>
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
