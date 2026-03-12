"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import AnimatedCounter from "./AnimatedCounter";

const cases = [
  {
    image: "/images/12.png",
    area: "Usaquén, Bogotá",
    tag: "Operación 360",
    title: "De operar solo a recuperar su tiempo",
    description:
      "Apartamento 1 habitación. Propietario pasó de dedicar 20h/semana a gestión manual, a 1h/mes revisando reportes.",
    metrics: [
      { label: "Ocupación", value: 73, suffix: "%", detail: "+11%" },
      { label: "Ingresos", value: 28, prefix: "+", suffix: "%", detail: "vs anterior" },
    ],
    quote:
      "Pasé de estar pegado al celular a ver mis números una vez al mes. Ahora tengo tiempo para lo que realmente importa.",
    author: "Juan S.",
  },
  {
    image: "/images/OpenC60_02.png",
    area: "Chapinero, Bogotá",
    tag: "Cambio de Operador",
    title: "De reportes confusos a claridad",
    description:
      "Apartamento 2 habitaciones. Cambió de operador anterior con reportes poco claros y ocupación del 62%.",
    metrics: [
      { label: "Ocupación", value: 78, suffix: "%", detail: "+16%" },
      { label: "Tarifa", value: 18, prefix: "+", suffix: "%", detail: "vs mercado" },
    ],
    quote:
      "Ahora sé exactamente cuánto ingresa, cuánto se gasta y cuánto me queda. La transparencia era lo que me faltaba.",
    author: "María P.",
  },
  {
    image: "/images/2.png",
    imageClassName: "h-64",
    area: "La Castellana, Bogotá",
    tag: "Operación 360",
    title: "De propiedad lista a operación activa",
    description:
      "Apartaestudio listo para salir al mercado. Activamos la operación, ajustamos la estrategia comercial y logró su primera reserva a los 3 días de publicar.",
    metrics: [
      { label: "Setup", value: 7, suffix: " días", detail: "Completo" },
      { label: "Mes 1", value: 82, suffix: "%", detail: "ocupación" },
    ],
    quote:
      "Entré con la propiedad lista y en pocos días ya estaba operando con reservas y seguimiento claro.",
    author: "Carlos M.",
  },
];

export default function Results() {
  return (
    <section id="resultados" className="section-padding bg-[#faf9f7]">
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 variants={fadeUp} className="heading-lg">
            Resultados que hablan
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body mt-4">
            Propietarios en Bogotá que transformaron sus propiedades
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3"
        >
          {cases.map((c) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              className="card group overflow-hidden hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative">
                <Image
                  src={c.image}
                  alt={c.title}
                  width={400}
                  height={260}
                  className={`${c.imageClassName ?? "h-52"} w-full object-cover`}
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                  <MapPin className="h-3 w-3" />
                  {c.area}
                </div>
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold tracking-wide text-neutral-800 backdrop-blur-sm">
                  {c.tag}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold tracking-[-0.01em] text-neutral-900">
                  {c.title}
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-neutral-100 bg-neutral-50/80 p-3"
                    >
                      <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                        {m.label}
                      </p>
                      <div className="mt-1">
                        <AnimatedCounter
                          target={m.value}
                          prefix={m.prefix}
                          suffix={m.suffix}
                          className="text-xl font-extrabold tracking-tight text-verse-500"
                        />
                      </div>
                      <p className="mt-0.5 text-[10px] font-medium text-neutral-400">
                        {m.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <blockquote className="mt-5 border-l-2 border-verse-200 pl-4">
                  <p className="text-[0.82rem] italic leading-relaxed text-neutral-500">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <cite className="mt-2 block text-xs font-semibold not-italic text-neutral-700">
                    &mdash; {c.author}
                  </cite>
                </blockquote>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
