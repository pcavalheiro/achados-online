import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Achados Online | Reviews e recomendações",
    template: "%s | Achados Online",
  },
  description:
    "Reviews, comparações e recomendações práticas para comprar melhor online.",
  applicationName: "Achados Online",
  referrer: "origin-when-cross-origin",
  keywords: [
    "reviews de produtos",
    "comparações de produtos",
    "airpods 4",
    "alternativas airpods",
    "gadgets amazon",
  ],
  verification: {
    google: "CsYpmBUh-RCWpD7EKH4AxpCYIz3vr2x3yxBI4S2gggA",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: "Achados Online",
    title: "Achados Online | Reviews e recomendações",
    description:
      "Descubra produtos úteis, comparações e sugestões práticas para escolher com mais confiança.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Achados Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achados Online | Reviews e recomendações",
    description:
      "Reviews, comparações e recomendações práticas para comprar melhor online.",
    images: ["/og-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className="bg-slate-50 text-slate-900">
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
