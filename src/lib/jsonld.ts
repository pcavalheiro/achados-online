import { SITE_NAME, SITE_URL } from "@/content/site";
import type { CatalogEntry } from "@/content/catalog";
import { absoluteUrl } from "@/content/catalog";

const publisher = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
};

export function buildArticleJsonLd(
  entry: CatalogEntry,
  pagePath: string,
): Record<string, unknown> {
  const url = absoluteUrl(pagePath);
  return {
    "@type": "Article",
    headline: entry.metaTitle,
    description: entry.metaDescription,
    image: absoluteUrl(entry.ogImage),
    datePublished: entry.updatedAt,
    dateModified: entry.updatedAt,
    author: {
      "@type": "Person",
      name: "João Silva",
    },
    publisher,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildProductWithReviewJsonLd(
  entry: CatalogEntry,
  pagePath: string,
): Record<string, unknown> {
  const url = absoluteUrl(pagePath);
  return {
    "@type": "Product",
    name: entry.nome,
    image: absoluteUrl(entry.img),
    description: entry.metaDescription,
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: entry.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        "@type": "Person",
        name: "João Silva",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: entry.ratingValue,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 1,
    },
    url,
  };
}

export function buildTop5ArticleJsonLd(
  title: string,
  description: string,
  path: string,
  image: string,
  datePublished: string,
): Record<string, unknown> {
  return {
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(image),
    datePublished,
    dateModified: datePublished,
    author: { "@type": "Person", name: "João Silva" },
    publisher,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
  };
}
