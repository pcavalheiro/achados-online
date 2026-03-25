import Link from "next/link";
import type { CatalogEntry } from "@/content/catalog";

type RelatedArticlesProps = {
  items: CatalogEntry[];
  title?: string;
};

export default function RelatedArticles({
  items,
  title = "Também pode interessar",
}: RelatedArticlesProps) {
  if (items.length === 0) return null;

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`/${item.slug}`}
              className="flex flex-col rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-sky-200 hover:bg-sky-50/50"
            >
              <span className="font-semibold text-slate-900">{item.nome}</span>
              <span className="mt-1 text-sm text-slate-600 line-clamp-2">
                {item.metaDescription}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
