import type { MetadataRoute } from "next";
import { getReviewPages } from "@/content/catalog";
import { SITE_URL } from "@/content/site";

const STATIC_PATHS = [
  "/",
  "/top-5-auriculares-bluetooth-estilo-airpods",
  "/reviews",
  "/sobre",
  "/politica-privacidade",
  "/contacto",
  "/transparencia",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const reviewPaths = getReviewPages().map((e) => `/${e.slug}`);
  const allPaths = [...new Set([...STATIC_PATHS, ...reviewPaths])];

  return allPaths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
