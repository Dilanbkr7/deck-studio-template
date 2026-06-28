import Header from "@/components/layout/Header";
import ScrollDirector from "@/components/motion/ScrollDirector";
import SmoothScroll from "@/components/motion/SmoothScroll";
import SceneCanvas from "@/components/three/SceneCanvas";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const services = [
  "Diseño web premium",
  "Sistemas digitales",
  "UI/UX estratégico",
  "Automatización",
  "SEO técnico",
  "Analítica y conversión",
];

const projects = [
  "Mabu Licores",
  "El Rey Peruano",
  "Fence Galarza",
];

export default function Home() {
  return (
    <main
      id="experience"
      className="relative min-h-[300svh] overflow-x-clip bg-[#020202] text-white"
    >
      <SmoothScroll />
      <ScrollDirector />
      <Header />

      {/* Progreso superior */}
      <div className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-white/5">
        <span className="scroll-progress-bar block h-full origin-left scale-x-0 bg-gradient-to-r from-[#7d541d] via-[#f1d18f] to-[#c9a96e]" />
      </div>

      {/* Mundo tridimensional permanente */}
      <div
        className="pointer-events-none fixed inset-0 z-0 h-[100svh] w-full"
        aria-hidden="true"
      >
        <SceneCanvas />
      </div>

      {/* Profundidad visual */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_8%,rgba(0,0,0,0.2)_52%,rgba(0,0,0,0.92)_100%)]"
        aria-hidden="true"
      />

      <div
        className="gold-grid pointer-events-none fixed inset-0 z-[2] opacity-[0.16]"
        aria-hidden="true"
      />

      <div
        className="noise-layer pointer-events-none fixed inset-0 z-[3]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* SECCIÓN 1: IMPACTO */}
        <section
          id="inicio"
          aria-labelledby="hero-title"
          className="story-panel flex min-h-[100svh] items-center px-6 pb-16 pt-28 md:px-12 lg:px-20"
        >
          <div
            data-copy
            className="w-full max-w-[760px]"
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-14 bg-gradient-to-r from-[#c9a96e] to-transparent" />

              <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#d8b66f] sm:text-xs">
                Marcas locales · Impacto global
              </p>
            </div>

            <h1
              id="hero-title"
              className="max-w-[820px] text-[clamp(3.6rem,8.5vw,8.7rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]"
            >
              No hacemos{" "}
              <span className="gold-text">páginas.</span>
              <br />
              Creamos impacto.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/58 md:text-lg">
              Diseñamos experiencias digitales que capturan atención,
              construyen confianza y convierten visitas en oportunidades
              comerciales.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/593999936165?text=Hola%2C%20quiero%20iniciar%20un%20proyecto%20premium%20con%20Deck%20Studio%20Web."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-[#d4b06a] bg-[#d4b06a] px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-black transition duration-300 hover:bg-[#f1d18f]"
              >
                Iniciar proyecto

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#sistema"
                className="inline-flex rounded-full border border-white/15 bg-black/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white/75 backdrop-blur-md transition duration-300 hover:border-[#c9a96e] hover:text-[#c9a96e]"
              >
                Descubrir el sistema
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
              <span>Ecuador + Latinoamérica</span>
              <span>Diseño estratégico</span>
              <span>Conversión medible</span>
            </div>
          </div>

          <span className="chapter-number">01 / 03</span>
        </section>

        {/* SECCIÓN 2: SISTEMA */}
        <section
          id="sistema"
          aria-labelledby="system-title"
          className="story-panel flex min-h-[100svh] items-center justify-end px-6 py-24 md:px-12 lg:px-20"
        >
          <div
            data-copy
            className="glass-panel w-full max-w-[660px] rounded-[2rem] p-7 md:p-10 lg:p-12"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#d8b66f]">
              Un ecosistema. Un objetivo.
            </p>

            <h2
              id="system-title"
              className="text-[clamp(2.8rem,5.6vw,5.8rem)] font-black uppercase leading-[0.88] tracking-[-0.055em]"
            >
              Todo conectado para{" "}
              <span className="gold-text">vender mejor.</span>
            </h2>

            <p className="mt-7 max-w-xl leading-7 text-white/55">
              Estrategia, identidad visual, desarrollo, automatización y
              posicionamiento trabajando como un solo sistema.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((service, index) => (
                <article
                  key={service}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-4 transition duration-300 hover:border-[#c9a96e]/45 hover:bg-[#c9a96e]/[0.055]"
                >
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#c9a96e]/65">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xs font-bold uppercase tracking-[0.13em] text-white/75 transition group-hover:text-white">
                    {service}
                  </h3>
                </article>
              ))}
            </div>

            <div className="mt-9 flex items-center justify-between border-t border-white/[0.08] pt-6">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                Estrategia → Diseño → Desarrollo → Lanzamiento
              </p>

              <span className="text-[#c9a96e]">◆</span>
            </div>
          </div>

          <span className="chapter-number">02 / 03</span>
        </section>

        {/* SECCIÓN 3: EVIDENCIA Y CTA */}
        <section
          id="proyectos"
          aria-labelledby="results-title"
          className="story-panel flex min-h-[100svh] items-center justify-center px-6 py-24 text-center md:px-12"
        >
          <div
            data-copy
            className="glass-panel w-full max-w-[960px] rounded-[2.4rem] px-6 py-10 md:px-12 md:py-14"
          >
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.34em] text-[#d8b66f]">
              Diseño respaldado por resultados
            </p>

            <h2
              id="results-title"
              className="mx-auto max-w-[900px] text-[clamp(3rem,6.8vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.065em]"
            >
              Tu marca no necesita otra web.
              <span className="gold-text block">
                Necesita una experiencia.
              </span>
            </h2>

            <div className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-3">
              {projects.map((project) => (
                <span
                  key={project}
                  className="rounded-full border border-white/10 bg-black/35 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55"
                >
                  {project}
                </span>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-xl leading-7 text-white/50">
              Cupos limitados para proyectos que buscan diferenciarse,
              posicionarse y convertir atención en crecimiento real.
            </p>

            <a
              href="https://wa.me/593999936165?text=Hola%2C%20quiero%20cotizar%20una%20experiencia%20web%20premium%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-4 rounded-full border border-[#d4b06a] bg-[#d4b06a] px-8 py-4 text-xs font-black uppercase tracking-[0.17em] text-black transition duration-300 hover:bg-[#f1d18f]"
            >
              Solicitar propuesta

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-7 text-[9px] uppercase tracking-[0.22em] text-white/28 sm:flex-row">
              <span>Deck Studio Web © 2026</span>
              <span>Quito · Ecuador · Latinoamérica</span>
            </div>
          </div>

          <span className="chapter-number">03 / 03</span>
        </section>
      </div>

      <WhatsAppButton />
    </main>
  );
}