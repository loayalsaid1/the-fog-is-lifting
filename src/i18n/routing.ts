import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "he", "hi", "zh"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  he: "עברית",
  hi: "हिन्दी",
  zh: "中文",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  es: "ltr",
  he: "rtl",
  hi: "ltr",
  zh: "ltr",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});
