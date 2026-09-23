import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: "A library of documentaries, series and books that clarify Islam.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3ece0",
    theme_color: "#6b3a22",
    lang: "en",
    icons: [
      {
        src: "/images/do-not-hate.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
