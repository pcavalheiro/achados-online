import type { MetadataRoute } from "next";

const siteUrl = "https://www.achados-online.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/go/", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
