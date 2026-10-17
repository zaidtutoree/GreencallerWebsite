import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Business Phone System`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00d16c",
    lang: "en-GB",
    categories: ["business", "productivity", "utilities"],
    icons: [
      { src: "/greencaller-icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/greencaller-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/greencaller-icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
