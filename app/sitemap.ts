import type { MetadataRoute } from "next";
import { site, featuresNav, solutionsNav, resourcesNav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: { path: string; priority: number; freq: MetadataRoute.Sitemap[0]["changeFrequency"] }[] =
    [
      { path: "/", priority: 1, freq: "weekly" },
      { path: "/pricing", priority: 0.9, freq: "weekly" },
      { path: "/features", priority: 0.8, freq: "monthly" },
      { path: "/solutions", priority: 0.8, freq: "monthly" },
      { path: "/integrations", priority: 0.8, freq: "monthly" },
      { path: "/demo", priority: 0.7, freq: "monthly" },
      { path: "/contact", priority: 0.7, freq: "monthly" },
      { path: "/customers", priority: 0.6, freq: "monthly" },
      { path: "/about", priority: 0.5, freq: "yearly" },
      { path: "/careers", priority: 0.4, freq: "monthly" },
      { path: "/product", priority: 0.7, freq: "monthly" },
      { path: "/blog", priority: 0.6, freq: "weekly" },
      { path: "/help", priority: 0.5, freq: "monthly" },
      { path: "/download", priority: 0.5, freq: "monthly" },
      { path: "/changelog", priority: 0.4, freq: "weekly" },
      { path: "/partners", priority: 0.4, freq: "monthly" },
      { path: "/reviews", priority: 0.4, freq: "monthly" },
      { path: "/legal/cookies", priority: 0.3, freq: "yearly" },
      { path: "/legal/notice", priority: 0.3, freq: "yearly" },
      { path: "/legal/privacy", priority: 0.3, freq: "yearly" },
      { path: "/legal/terms", priority: 0.3, freq: "yearly" },
    ];

  // integrationsNav entries are labels, not links, so they are deliberately excluded.
  const nested = [...featuresNav, ...solutionsNav, ...resourcesNav]
    .flatMap((c) => c.links.map((l) => l.href))
    .filter((h): h is string => Boolean(h))
    .filter((h, i, arr) => arr.indexOf(h) === i);

  return [
    ...core.map((c) => ({
      url: `${site.domain}${c.path}`,
      lastModified: now,
      changeFrequency: c.freq,
      priority: c.priority,
    })),
    ...nested.map((path) => ({
      url: `${site.domain}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
