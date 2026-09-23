import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/site/hero";
import { Folio } from "@/components/site/folio";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Folio />
    </>
  );
}
