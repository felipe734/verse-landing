"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.link/uu7ut2"
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-[#25d366]" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
