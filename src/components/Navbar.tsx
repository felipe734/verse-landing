"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#perfiles", label: "¿Es para mí?" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#resultados", label: "Resultados" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-neutral-200/50 bg-white/70 shadow-xs backdrop-blur-xl"
            : "border-b border-white/30 bg-white/45 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-md"
        )}
      >
        <nav className="section-container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="text-lg font-semibold tracking-[-0.03em] text-neutral-900">
              Verse Host
            </span>
            <span className="h-2 w-2 rounded-full bg-verse-500" />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-700 transition-colors duration-150 hover:text-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#chequeo"
              className="hidden rounded-full bg-verse-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-verse-600 hover:shadow-glow-lg md:inline-flex"
            >
              Quiero revisar mi caso
            </a>
            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white/80 text-neutral-600 transition-colors hover:bg-neutral-50 md:hidden"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col border-l border-neutral-100 bg-white p-6 shadow-lg transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-neutral-900">
              Verse Host
            </span>
            <span className="h-2 w-2 rounded-full bg-verse-500" />
          </div>
          <button
            type="button"
            aria-label="Cerrar menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-neutral-700 transition-colors hover:text-neutral-900"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#chequeo"
          className="btn-primary mt-8"
          onClick={() => setOpen(false)}
        >
          Quiero revisar mi caso
        </a>
      </aside>
    </>
  );
}
