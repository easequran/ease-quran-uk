import type { MetadataRoute } from "next";

const BASE = "https://www.easequran.co.uk";

const blogSlugs = [
  "is-it-safe-online-quran-classes-uk",
  "how-to-choose-online-quran-teacher-uk",
  "best-age-to-start-quran-classes",
  "noorani-qaida-vs-quran-reading",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: BASE, priority: 1 },
    { url: `${BASE}/about`, priority: 0.8 },
    { url: `${BASE}/courses`, priority: 0.9 },
    { url: `${BASE}/courses/noorani-qaida`, priority: 0.8 },
    { url: `${BASE}/courses/quran-reading`, priority: 0.8 },
    { url: `${BASE}/courses/hifz`, priority: 0.8 },
    { url: `${BASE}/courses/tajweed`, priority: 0.8 },
    { url: `${BASE}/courses/islamic-studies`, priority: 0.8 },
    { url: `${BASE}/courses/tafseer`, priority: 0.8 },
    { url: `${BASE}/female-quran-teachers`, priority: 0.9 },
    { url: `${BASE}/pricing`, priority: 0.8 },
    { url: `${BASE}/locations`, priority: 0.8 },
    { url: `${BASE}/locations/london`, priority: 0.9 },
    { url: `${BASE}/locations/birmingham`, priority: 0.9 },
    { url: `${BASE}/locations/manchester`, priority: 0.9 },
    { url: `${BASE}/locations/bradford`, priority: 0.9 },
    { url: `${BASE}/locations/leicester`, priority: 0.9 },
    { url: `${BASE}/free-trial`, priority: 1 },
    { url: `${BASE}/contact`, priority: 0.7 },
    { url: `${BASE}/blog`, priority: 0.7 },
    { url: `${BASE}/safety`, priority: 0.8 },
  ].map((r) => ({ ...r, lastModified: now, changeFrequency: "monthly" as const }));

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
