"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Diagnóstico de necesidad",
    description:
      "Ubicación, tipo de propiedad, reglas de PH, potencial real en STR. Si creemos que no hace sentido, te lo decimos también.",
  },
  {
    number: "02",
    title: "Definición del producto",
    description:
      "Evaluamos tu propiedad y definimos el plan de Operación 360 ideal. Siempre con foco en retorno y en tu rol.",
  },
  {
    number: "03",
    title: "Ejecución y lanzamiento",
    description:
      "Diseño y obra, montaje, fotos, anuncio, pricing inicial y primeros ajustes.",
  },
  {
    number: "04",
    title: "Operación y reportes",
    description:
      "Gestión diaria + reportes mensuales claros con noches, ingresos, gastos y neto por unidad.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 variants={fadeUp} className="heading-lg">
            Cómo trabajamos contigo
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body mt-4">
            Un proceso claro, desde revisar encaje hasta reportarte resultados.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent md:block" />

          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((step) => (
              <motion.article key={step.number} variants={fadeUp} className="relative">
                <div className="relative mb-6 flex items-center gap-3 md:justify-center">
                  <span className="text-[4.5rem] font-extrabold leading-none tracking-[-0.06em] text-verse-100 md:text-[5rem]">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold tracking-[-0.01em] text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
