import { getRequestConfig } from "next-intl/server";
import { routing, type Locale } from "./routing";

type Messages = Record<string, unknown>;

function isRecord(value: unknown): value is Messages {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMerge(base: Messages, overlay: Messages): Messages {
  const result: Messages = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    const existing = result[key];
    if (isRecord(existing) && isRecord(value)) {
      result[key] = deepMerge(existing, value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const english = (await import(`../../messages/en.json`)).default as Messages;
  const localized =
    locale === "en"
      ? english
      : ((await import(`../../messages/${locale}.json`)).default as Messages);

  return {
    locale,
    messages: locale === "en" ? english : deepMerge(english, localized),
  };
});
