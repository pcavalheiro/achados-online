import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Achados Online",
    template: "%s | Achados Online",
  },
  icons: {
    icon: "/icon.svg",
  },
  description:
    "Descubra produtos em destaque, análises e sugestões de compra. Encontre gadgets, tecnologia e soluções úteis para o seu dia a dia.",
  keywords: [
    "produtos amazon",
    "melhores gadgets",
    "reviews produtos",
    "comparação produtos",
    "tecnologia portugal",
    "achados online",
  ],
  authors: [{ name: "Achados Online" }],
  creator: "Achados Online",
  metadataBase: new URL("https://www.achados-online.com"),

  openGraph: {
    title: "Achados Online",
    description:
      "Descubra produtos, análises e sugestões para encontrar as melhores opções para o seu dia a dia.",
    url: "https://www.achados-online.com",
    siteName: "Achados Online",
    locale: "pt_PT",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
