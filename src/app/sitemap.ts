import type { MetadataRoute } from "next";

const siteUrl = "https://www.achados-online.com";

const pages = [
  "/",
  "/top-5-auriculares-bluetooth-estilo-airpods",
  "/airpods-pro",
  "/smartwatch",
  "/aspirador",
  "/sobre",
  "/politica-privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return pages.map((page, index) => ({
    url: `${siteUrl}${page === "/" ? "" : page}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
