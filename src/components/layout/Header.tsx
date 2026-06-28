export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-[60] w-full border-b border-white/[0.055] bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1800px] items-center justify-between px-5 md:px-10 lg:px-14">
        <a
          href="#inicio"
          aria-label="Deck Studio Web - Inicio"
          className="group flex items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#c9a96e]/45 bg-[#c9a96e]/[0.06] text-base font-black text-[#d7b369] transition duration-300 group-hover:bg-[#c9a96e] group-hover:text-black">
            D
          </span>

          <span>
            <strong className="block text-xs tracking-[0.25em] text-white">
              DECK
            </strong>

            <small className="block text-[8px] tracking-[0.34em] text-[#c9a96e]">
              STUDIO WEB
            </small>
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 md:flex"
          aria-label="Navegación principal"
        >
          <a
            href="#inicio"
            className="transition hover:text-[#c9a96e]"
          >
            Impacto
          </a>

          <a
            href="#sistema"
            className="transition hover:text-[#c9a96e]"
          >
            Sistema
          </a>

          <a
            href="#proyectos"
            className="transition hover:text-[#c9a96e]"
          >
            Proyectos
          </a>
        </nav>

        <a
          href="https://wa.me/593999936165?text=Hola%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web%20premium."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#c9a96e]/50 bg-black/30 px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#d8b66f] transition duration-300 hover:bg-[#c9a96e] hover:text-black"
        >
          Cotizar
        </a>
      </div>
    </header>
  );
}