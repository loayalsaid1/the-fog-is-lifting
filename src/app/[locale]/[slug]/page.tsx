import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resources } from "@/lib/catalog";
import { ResourceArticle } from "@/components/site/resource-article";
import { siteConfig } from "@/lib/site";

const sectionKey: Record<string, string> = {
  "islam-in-brief": "islamInBrief",
  "jihad-on-terrorism": "jihadOnTerrorism",
  "islam-in-women": "islamInWomen",
  islamophobia1: "islamophobia1",
  "do-not-hate": "doNotHate",
  islamophobia2: "islamophobia2",
  "1001-inventions": "inventions",
  "1001-inventions-for-kids": "inventionsKids",
  "quran-and-science": "science",
  "quran-and-philosophy": "philosophy",
  translation: "translation",
  dawah: "dawah",
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const resource = resources.find((item) => item.id === slug);
  if (!resource) return {};
  const key = sectionKey[slug];
  const t = await getTranslations({ locale, namespace: "sections" });
  const meta = await getTranslations({ locale, namespace: "metadata" });
  const title = t(`${key}.title`);
  const description = t.has(`${key}.lead`)
    ? t(`${key}.lead`)
    : t.has(`${key}.body`)
      ? (t.raw(`${key}.body`) as string[])[0]
      : meta("description");

  return {
    title,
    description,
    alternates: {
      canonical: locale === "en" ? `/${slug}` : `/${locale}/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: locale === "en" ? `${siteConfig.url}/${slug}` : `${siteConfig.url}/${locale}/${slug}`,
      images: [{ url: resource.image, alt: title }],
    },
  };
}

export default async function ResourcePage({ params }: Props) {
  const { locale, slug } = await params;
  const resource = resources.find((item) => item.id === slug);
  if (!resource) notFound();
  setRequestLocale(locale);
  return <ResourceArticle resource={resource} />;
}
