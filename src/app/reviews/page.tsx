import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getReviewPages } from "@/content/catalog";
import { SITE_NAME, SITE_URL } from "@/content/site";

const PAGE_DESCRIPTION =
  "Lista de análises e recomendações de produtos em Achados Online.";

export const metadata: Metadata = {
  title: "Todas as reviews",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsIndexPage() {
  const reviews = getReviewPages();

  const jsonLd = {
    "@type": "CollectionPage",
    name: `Reviews | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/reviews`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-3xl px-6 py-12">
        <p className="mb-2 text-sm font-medium text-sky-700">Índice</p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Reviews e análises
        </h1>
        <p className="mt-4 text-slate-600 leading-7">
          Páginas com análises detalhadas e links transparentes para compra na
          Amazon quando aplicável.
        </p>

        <ul className="mt-10 space-y-4">
          {reviews.map((r) => (
            <li key={r.id}>
              <Link
                href={`/${r.slug}`}
                className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:bg-sky-50/30"
              >
                <span className="font-semibold text-slate-900">{r.nome}</span>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {r.metaDescription}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-sky-700">
                  Ler análise →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
