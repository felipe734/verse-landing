"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import AnimatedCounter from "./AnimatedCounter";

const trustItems = [
  { text: "Operación legal y transparente", isCounter: false },
  { text: "4.9★ promedio en huéspedes", isCounter: false },
  { text: " propiedades gestionadas", isCounter: true, value: 50, prefix: "+" },
  { text: " noches operadas", isCounter: true, value: 2500, prefix: "+" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-gradient bg-grain pt-28 md:pt-36">
      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="badge mx-auto flex w-fit lg:mx-0">
              <span className="h-1.5 w-1.5 rounded-full bg-verse-500" />
              Operación 360 en Bogotá
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="heading-xl mx-auto mt-7 text-center text-[2.75rem] sm:text-[3.25rem] lg:mx-0 lg:text-left lg:text-[3.5rem]"
            >
              Convertimos tu
              <br />
              Airbnb en un
              <br />
              <span className="relative inline-block text-verse-500">
                activo rentable
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 286 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8.5C50 2 120 2 284 8.5"
                    stroke="rgba(243,106,61,0.3)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-center text-lg leading-relaxed text-neutral-500 md:text-xl lg:text-left"
            >
              Nos encargamos de huéspedes, limpieza, mantenimiento y reportes. Tú solo ves números claros cada mes.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <a href="#chequeo" className="btn-primary">
                Solicitar Chequeo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.link/v2t51z"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Hablar con asesor
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            className="relative"
          >
            <div className="relative animate-float overflow-hidden rounded-2xl bg-white shadow-lg">
              <Image
                src="/images/Teik1506_01.png"
                alt="Propiedad gestionada por Verse Host"
                width={560}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-4 right-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold tracking-wide text-neutral-900 shadow-md backdrop-blur-sm">
              VERSE <span className="text-verse-500">HOST</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-16 border-t border-neutral-200/60 bg-white/50 backdrop-blur-sm">
        <div className="section-container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-neutral-500">
              <Check className="h-4 w-4 text-verse-500" />
              {item.isCounter ? (
                <span>
                  <AnimatedCounter
                    target={item.value!}
                    prefix={item.prefix}
                    className="font-semibold text-neutral-700"
                  />
                  {item.text}
                </span>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
