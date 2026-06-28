import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Deck Studio Web | Experiencias digitales premium",
    template: "%s | Deck Studio Web",
  },
  description:
    "Diseño y desarrollo de páginas web premium, sistemas digitales, automatización, SEO y experiencias interactivas para negocios.",
  keywords: [
    "diseño web Ecuador",
    "páginas web premium",
    "agencia web Quito",
    "diseño UI UX",
    "automatización de negocios",
    "Deck Studio Web",
  ],
  authors: [
    {
      name: "Deck Studio Web",
    },
  ],
  creator: "Deck Studio Web",
  publisher: "Deck Studio Web",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    title: "Deck Studio Web",
    description:
      "Páginas web y experiencias digitales que venden y convierten.",
    siteName: "Deck Studio Web",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020202",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}