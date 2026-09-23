import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/site/hero";
import { CollectionGrid } from "@/components/site/collection-grid";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <CollectionGrid />
    </>
  );
}
