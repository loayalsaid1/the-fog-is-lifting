import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export async function Hero() {
  const t = await getTranslations();

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src="/images/do-not-hate.png"
          alt={t("sections.doNotHate.imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1510] via-[#1c1510]/78 to-[#1c1510]/45" />
      </div>
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 py-20 sm:px-6 lg:py-28">
        <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.36em] text-brass uppercase">
          {t("hero.kicker")}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.92] text-parchment sm:text-7xl lg:text-8xl">
          {t("hero.title")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-parchment/82">
          {t("hero.lead")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="brass" size="lg">
            <Link href="/islam-in-brief">{t("hero.primary")}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-parchment/35 text-parchment hover:border-brass hover:text-parchment"
          >
            <a href="#collection">{t("hero.secondary")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
