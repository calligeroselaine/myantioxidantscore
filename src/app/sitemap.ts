import type { MetadataRoute } from "next";

const BASE_URL = "https://www.myantioxidantscore.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/partner-with-us", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/certified-products", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/backed-by-science", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
