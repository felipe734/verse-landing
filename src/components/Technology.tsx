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

const resourceItems = [
  {
    title: "Reservas centralizadas",
    description: "Calendario, estado y operación en un solo flujo.",
  },
  {
    title: "Cumplimiento al día",
    description: "Soportes, pólizas y procesos legales siempre organizados.",
  },
  {
    title: "Reportes accionables",
    description: "Ingresos, ocupación y desempeño claros para decidir mejor.",
  },
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
            className="max-w-xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-verse-200 bg-verse-50 px-3.5 py-1.5 text-sm font-semibold text-verse-600">
              Tecnología propia
            </motion.div>

            <motion.h2 variants={fadeUp} className="heading-lg mt-6">
              Cumplimiento Legal y Operativo Automatizado
            </motion.h2>

            <motion.ul variants={fadeUp} className="mt-6 space-y-3">
              {resourceItems.map((item) => (
                <li key={item.title} className="rounded-2xl border border-neutral-200 bg-neutral-50/70 px-4 py-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-verse-500" />
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full max-w-2xl lg:ml-auto"
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
