"use client";

import { ArrowRight, Search, ShieldAlert, UserRoundCog } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const profiles = [
  {
    tag: "Aspirante",
    title: "Estoy Investigando",
    description:
      "Tienes o vas a tener una propiedad y quieres entender si renta corta sí vale la pena antes de tomar una decisión.",
    cta: "Quiero investigar bien",
    icon: Search,
  },
  {
    tag: "Novato",
    title: "Quiero Delegar",
    description:
      "Ya operas tu propiedad por tu cuenta, pero quieres delegar la operación sin perder control ni visibilidad.",
    cta: "Quiero delegar",
    icon: UserRoundCog,
  },
  {
    tag: "Desencantado",
    title: "Quiero transparencia",
    description:
      "Ya tienes operador, pero quieres reportes más claros, mejor control y más confianza en tus números.",
    cta: "Quiero transparencia",
    icon: ShieldAlert,
  },
];

export default function Profiles() {
  return (
    <section id="perfiles" className="section-padding bg-[#faf9f7]">
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 variants={fadeUp} className="heading-lg">
            ¿Verse Host es para ti?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body mt-4">
            Trabajamos con tres tipos de propietarios. Identifica tu perfil y descubre cómo podemos ayudarte.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3"
        >
          {profiles.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.tag}
                variants={fadeUp}
                className="card group flex flex-col p-6 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="heading-md pr-2">{p.title}</h3>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-verse-50 text-verse-500">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-neutral-500">
                  {p.description}
                </p>

                <a
                  href="#chequeo"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white py-3 text-sm font-semibold text-neutral-900 transition-all duration-200 hover:border-neutral-300 hover:shadow-xs"
                >
                  {p.cta}
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-14 max-w-2xl text-center"
        >
          <p className="text-[0.95rem] leading-relaxed text-neutral-500">
            El siguiente paso para cualquiera de los tres perfiles es el mismo: un{" "}
            <span className="font-semibold text-neutral-800">Chequeo Verse Host</span> de tu caso.
          </p>
          <a href="#chequeo" className="btn-primary mt-6">
            Quiero mi Chequeo Verse Host
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
