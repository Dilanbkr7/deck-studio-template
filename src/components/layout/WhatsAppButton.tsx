export default function WhatsAppButton() {
  const message =
    "Hola, quiero información sobre una experiencia web premium con Deck Studio Web.";

  const url = `https://wa.me/593999936165?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-[65] flex items-center gap-3 rounded-full border border-[#c9a96e]/45 bg-black/65 p-2.5 pr-4 text-[#d8b66f] shadow-[0_0_40px_rgba(201,169,110,0.08)] backdrop-blur-xl transition duration-300 hover:border-[#c9a96e] hover:bg-[#c9a96e] hover:text-black md:bottom-7 md:right-7"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full border border-current">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.45-4A8 8 0 1 1 20 11.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.4 8.1c.3-.7.65-.72 1-.73h.28c.16 0 .4.06.53.4l.75 1.8c.08.2.04.38-.06.55l-.55.75c-.12.16-.24.3-.1.54.14.25.65 1.05 1.42 1.7.98.86 1.78 1.12 2.04 1.25.25.13.4.1.56-.08l.9-1.05c.18-.2.35-.16.57-.08l1.75.83c.25.12.42.18.47.3.06.13.06.73-.16 1.34-.22.62-1.27 1.18-1.76 1.25-.46.06-1.04.1-1.68-.1-.38-.12-.87-.28-1.5-.55-.67-.3-2.95-1.1-5.04-3.93-.59-.8-1-1.7-1.1-2.28-.12-.58-.02-1.26.28-1.91Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <span className="hidden text-[9px] font-black uppercase tracking-[0.16em] sm:block">
        WhatsApp
      </span>
    </a>
  );
}