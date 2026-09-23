import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { resources, type Resource } from "@/lib/catalog";
import { roman, sectionPrefix, sectionSummary } from "@/lib/section";
import { CoverFrame } from "./cover-frame";
import { ExternalLink } from "./external-link";

function ctaKey(kind: Resource["kind"]) {
  if (kind === "series") return "common.openPlaylist";
  if (kind === "course") return "common.getIt";
  return "common.watchNow";
}

async function FolioSection({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) {
  const t = await getTranslations();
  const locale = await getLocale();
  const prefix = sectionPrefix(resource);
  const landscape = resource.orientation === "landscape";
  const englishOnly = resource.englishOnlyLocales?.includes(locale);
  const summary = sectionSummary(t, resource);
  const questions = resource.questionsKey
    ? ((t.raw(resource.questionsKey) as string[]) ?? []).slice(0, 4)
    : [];
  const reversed = !landscape && index % 2 === 1;

  return (
    <article
      id={resource.id}
      className="scroll-mt-24 border-t border-border/80 py-16 sm:py-20"
    >
      <div
        className={
          landscape
            ? "grid gap-10"
            : "grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        }
      >
        <div className={reversed ? "lg:order-2" : undefined}>
          <CoverFrame
            src={resource.image}
            alt={t(resource.imageAltKey)}
            orientation={resource.orientation}
            width={resource.width}
            height={resource.height}
            sizes={
              landscape
                ? "(max-width: 1024px) 92vw, 1100px"
                : "(max-width: 1024px) 80vw, 420px"
            }
            className={landscape ? "max-w-none" : "mx-auto lg:mx-0"}
          />
        </div>
        <div className={reversed ? "lg:order-1" : undefined}>
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-brass uppercase">
            {roman[index]} · {t(`kinds.${resource.kind}`)}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-walnut sm:text-4xl">
            {t(`${prefix}.title`)}
          </h2>
          {englishOnly ? (
            <p className="mt-4 rounded-md border border-brass/40 bg-secondary px-4 py-2 text-sm text-walnut">
              {t("common.englishOnly")}
            </p>
          ) : null}
          {t.has(`${prefix}.kicker`) ? (
            <p className="mt-4 font-serif text-xl italic text-terra">
              {t(`${prefix}.kicker`)}
            </p>
          ) : null}
          {summary ? (
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {summary}
            </p>
          ) : null}
          {t.has(`${prefix}.highlight`) ? (
            <p className="mt-4 font-serif text-xl text-terra">
              {t(`${prefix}.highlight`)}
            </p>
          ) : null}
          {questions.length > 0 ? (
            <ul className="mt-6 space-y-2">
              {questions.map((item) => (
                <li
                  key={item}
                  className="border-b border-border/70 py-1.5 text-walnut"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="brass">
              <ExternalLink href={resource.href}>
                {t(ctaKey(resource.kind))}
                <ArrowUpRight />
              </ExternalLink>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/${resource.id}`}>{t("common.learnMore")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function Folio() {
  const t = await getTranslations("toc");

  return (
    <section id="collection" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="max-w-2xl py-16 sm:py-20">
        <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-brass uppercase">
          I — XII
        </p>
        <h2 className="mt-3 font-serif text-4xl text-walnut sm:text-5xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">{t("subtitle")}</p>
        <nav
          aria-label={t("title")}
          className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm"
        >
          {resources.map((resource, index) => (
            <a
              key={resource.id}
              href={`#${resource.id}`}
              className="min-h-11 font-[family-name:var(--font-display)] text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase hover:text-walnut focus-ring rounded-sm"
            >
              {roman[index]}
            </a>
          ))}
        </nav>
      </div>
      {resources.map((resource, index) => (
        <FolioSection key={resource.id} resource={resource} index={index} />
      ))}
    </section>
  );
}
