import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aryanpatel.dev";
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/work",
    "/photography",
    "/gaming",
    "/contact",
    "/experiments",
  ];

  const workSlugs = [
    "tradesphere",
    "ai-event-organiser",
    "vyro",
    "syncora",
    "speech-to-text-ai",
    "face-recognition",
  ];

  const photographySlugs = ["portraits", "landscapes", "heritage"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const workEntries: MetadataRoute.Sitemap = workSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const photographyEntries: MetadataRoute.Sitemap = photographySlugs.map(
    (slug) => ({
      url: `${baseUrl}/photography/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticEntries, ...workEntries, ...photographyEntries];
}
