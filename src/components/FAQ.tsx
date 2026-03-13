"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import posthog from "posthog-js";
import { fadeUp, stagger } from "@/lib/animations";

const items = [
  {
    question: "¿Qué pasa si mi PH no permite renta corta?",
    answer:
      "Lo revisamos en el diagnóstico inicial. Si las reglas de propiedad horizontal no lo permiten, te lo decimos antes de avanzar. No prometemos lo que no se puede cumplir.",
  },
  {
    question: "¿Necesito RNT para operar en renta corta?",
    answer:
      "Sí. Nos encargamos del cumplimiento legal completo: RNT, TRA, SIRE y póliza obligatoria. Todo queda documentado con evidencia por reserva.",
  },
  {
    question: "¿Puedo usar mi propiedad algunos días del mes?",
    answer:
      "Sí. Coordinas las fechas con nosotros y bloqueamos el calendario. Tu propiedad sigue siendo tuya.",
  },
  {
    question: "¿Cómo recibo mis pagos y reportes?",
    answer:
      "Recibes un reporte mensual detallado por propiedad: noches vendidas, ingreso bruto, comisión, gastos e ingreso neto. Cada inmueble con su propio resultado. El pago se hace según calendario acordado.",
  },
  {
    question: "¿En qué se diferencian de otros operadores?",
    answer:
      "Tres cosas: tecnología propia con trazabilidad completa, cero bolsa de ingresos (cada propiedad con su flujo separado), y reportes con soporte real de cada gasto.",
  },
  {
    question: "¿Qué pasa si quiero terminar el servicio?",
    answer:
      "Sin penalidad, con preaviso de 3 meses. Coordinamos una transición limpia del calendario, huéspedes y accesos.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 variants={fadeUp} className="heading-lg">
            Preguntas frecuentes
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion.Root
            type="single"
            collapsible
            className="card mx-auto mt-12 max-w-3xl divide-y divide-neutral-100 overflow-hidden px-0"
            onValueChange={(value) => {
              if (value) posthog.capture("faq_question_expanded", { question: value });
            }}
          >
            {items.map((item) => (
              <Accordion.Item key={item.question} value={item.question}>
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between px-7 py-5 text-left text-[0.95rem] font-semibold text-neutral-800 transition-colors hover:text-verse-600">
                    <span>{item.question}</span>
                    <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-verse-50 text-verse-500 transition-colors group-hover:bg-verse-100">
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="px-7 pb-5 pr-14 text-sm leading-relaxed text-neutral-500">
                    {item.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
