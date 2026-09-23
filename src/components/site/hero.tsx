import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { heroPosters } from "@/lib/catalog";
import { OptimizedImage } from "./optimized-image";

export async function Hero() {
  const t = await getTranslations();
  const posters = [...heroPosters, ...heroPosters];

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.32em] text-brass uppercase">
            {t("hero.kicker")}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-walnut sm:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {t("hero.lead")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="brass" size="lg">
              <Link href="/islam-in-brief">{t("hero.primary")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#collection">{t("hero.secondary")}</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-10 bg-gradient-to-r from-parchment to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-10 bg-gradient-to-l from-parchment to-transparent" />
          <div className="overflow-hidden">
            <div className="marquee-track flex w-max gap-4">
              {posters.map((poster, i) => (
                <div
                  key={`${poster.src}-${i}`}
                  className="relative h-64 w-44 shrink-0 overflow-hidden rounded-md border border-border bg-paper shadow-md arch"
                >
                  <OptimizedImage
                    src={poster.src}
                    alt={poster.alt}
                    fill
                    priority={i < 4}
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
