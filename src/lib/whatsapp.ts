export const openWhatsApp = () => {
  const phone = "593999936165";

  const message = encodeURIComponent(
    "Hola, quiero una página web premium con Deck Studio Web"
  );

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
};