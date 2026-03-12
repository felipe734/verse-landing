export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#f5f1eb]">
      <div className="section-container py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-[-0.03em] text-neutral-900">
                Verse Host
              </span>
              <span className="h-2 w-2 rounded-full bg-verse-500" />
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-600">
              Convertimos tu Airbnb
              <br />
              en un activo rentable
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Recursos
            </h3>
            <div className="mt-3 flex flex-col gap-2.5">
              <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-neutral-900">
                Blog y Guías
              </a>
              <a href="#resultados" className="text-sm text-neutral-600 transition-colors hover:text-neutral-900">
                Casos Reales
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Contacto
            </h3>
            <div className="mt-3 flex flex-col gap-2.5">
              <a href="mailto:contacto@verseliving.com" className="text-sm text-neutral-600 transition-colors hover:text-neutral-900">
                contacto@verseliving.com
              </a>
              <a href="tel:+573159434176" className="text-sm text-neutral-600 transition-colors hover:text-neutral-900">
                +57 315 943 4176
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Verse Host. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-neutral-900">
              Términos
            </a>
            <a href="#" className="transition-colors hover:text-neutral-900">
              Política de datos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
