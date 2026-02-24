import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = posts.map((post) => ({
    url: `https://quoterly.app/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://quoterly.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://quoterly.app/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://quoterly.app/privacy",
      lastModified: new Date("2026-02-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://quoterly.app/terms",
      lastModified: new Date("2026-02-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...blogEntries,
  ];
}
