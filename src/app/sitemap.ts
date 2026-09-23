import type { MetadataRoute } from "next";
import { resources } from "@/lib/catalog";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

function localizedPath(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteConfig.url}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const slugs = ["", ...resources.map((resource) => `/${resource.id}`)];

  return slugs.map((path) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [locale, localizedPath(locale, path || "/")])
    );
    return {
      url: localizedPath(routing.defaultLocale, path || "/"),
      lastModified,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
      alternates: { languages },
    };
  });
}
