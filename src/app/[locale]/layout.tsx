import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import {
  Cinzel,
  Cormorant_Garamond,
  Crimson_Pro,
  Noto_Sans_Devanagari,
  Noto_Sans_Hebrew,
  Noto_Sans_SC,
} from "next/font/google";
import { routing, localeDirections, type Locale } from "@/i18n/routing";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { WelcomeDialog } from "@/components/site/welcome-dialog";
import { ScrollTop } from "@/components/site/scroll-top";
import { JsonLd } from "@/components/site/json-ld";
import "../globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const body = Crimson_Pro({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const display = Cinzel({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-display",
  display: "swap",
});

const hebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hebrew",
  display: "swap",
});

const hindi = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hindi",
  display: "swap",
});

const notoSc = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#f3ece0",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const languages = Object.fromEntries(
    routing.locales.map((code) => [
      code,
      code === routing.defaultLocale ? absoluteUrl("/") : absoluteUrl(`/${code}`),
    ])
  );

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: `%s · ${siteConfig.shortName}`,
    },
    description: t("description"),
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.organization,
    robots: { index: true, follow: true },
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: { ...languages, "x-default": absoluteUrl("/") },
    },
    openGraph: {
      type: "website",
      locale,
      url: locale === "en" ? siteConfig.url : `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/images/do-not-hate.png",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/do-not-hate.png"],
    },
    icons: {
      icon: "/images/do-not-hate.png",
      apple: "/images/do-not-hate.png",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "metadata" });
  const common = await getTranslations({ locale, namespace: "common" });
  const dir = localeDirections[locale as Locale];

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${heading.variable} ${body.variable} ${display.variable} ${hebrew.variable} ${hindi.variable} ${notoSc.variable}`}
    >
      <body
        className={`min-h-dvh bg-background text-foreground antialiased ${
          locale === "zh"
            ? "font-[family-name:var(--font-noto-sc)]"
            : locale === "he"
              ? "font-[family-name:var(--font-hebrew)]"
              : locale === "hi"
                ? "font-[family-name:var(--font-hindi)]"
                : "font-sans"
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
          >
            {common("skipToContent")}
          </a>
          <div className="grain" aria-hidden />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <WelcomeDialog />
          <ScrollTop />
          <JsonLd
            locale={locale}
            title={t("title")}
            description={t("description")}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
