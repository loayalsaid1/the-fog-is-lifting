import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Resource } from "@/lib/catalog";
import { resources } from "@/lib/catalog";
import { sectionPrefix } from "@/lib/section";
import { CoverFrame } from "./cover-frame";
import { ExternalLink } from "./external-link";
import { YoutubeEmbed } from "./youtube-embed";

type Props = {
  resource: Resource;
};

export async function ResourceArticle({ resource }: Props) {
  const t = await getTranslations();
  const locale = await getLocale();
  const prefix = sectionPrefix(resource);
  const landscape = resource.orientation === "landscape";
  const englishOnly = resource.englishOnlyLocales?.includes(locale);
  const cta =
    resource.kind === "series"
      ? t("common.openPlaylist")
      : resource.kind === "course"
        ? t("common.getIt")
        : t("common.watchNow");

  const body = t.has(`${prefix}.body`)
    ? (t.raw(`${prefix}.body`) as string[])
    : [];
  const questions = resource.questionsKey
    ? (t.raw(resource.questionsKey) as string[])
    : [];
  const features = resource.featuresKey
    ? (t.raw(resource.featuresKey) as string[])
    : [];
  const curriculum = resource.curriculumKey
    ? (t.raw(resource.curriculumKey) as { title: string; items: string[] }[])
    : [];

  const currentIndex = resources.findIndex((item) => item.id === resource.id);
  const prev = resources[currentIndex - 1];
  const next = resources[currentIndex + 1];

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {englishOnly ? (
        <p className="mb-6 rounded-md border border-brass/40 bg-secondary px-4 py-3 text-sm text-walnut">
          {t("common.englishOnly")}
        </p>
      ) : null}

      <div
        className={
          landscape
            ? "grid gap-10"
            : "grid items-start gap-10 lg:grid-cols-[minmax(0,280px)_1fr]"
        }
      >
        <div className={landscape ? undefined : "lg:sticky lg:top-24"}>
          <CoverFrame
            src={resource.image}
            alt={t(resource.imageAltKey)}
            orientation={resource.orientation}
            width={resource.width}
            height={resource.height}
            priority
            sizes={
              landscape
                ? "(max-width: 1024px) 92vw, 1100px"
                : "(max-width: 1024px) 70vw, 280px"
            }
            className={landscape ? "max-w-none" : "mx-auto lg:mx-0"}
          />
          <Button asChild variant="brass" className="mt-4 w-full sm:w-auto">
            <ExternalLink href={resource.href}>
              {cta}
              <ArrowUpRight />
            </ExternalLink>
          </Button>
        </div>

        <div>
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-brass uppercase">
            {t(`kinds.${resource.kind}`)} · {String(currentIndex + 1).padStart(2, "0")}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-walnut sm:text-5xl">
            {t(`${prefix}.title`)}
          </h1>

          {t.has(`${prefix}.kicker`) ? (
            <p className="mt-5 font-serif text-2xl italic text-terra">
              {t(`${prefix}.kicker`)}
            </p>
          ) : null}

          {t.has(`${prefix}.lead`) ? (
            <p className="mt-5 text-lg text-muted-foreground">
              {t(`${prefix}.lead`)}
            </p>
          ) : null}

          {t.has(`${prefix}.quote`) ? (
            <blockquote className="mt-6 border-s-2 border-brass ps-5 font-serif text-xl italic text-walnut">
              {t(`${prefix}.quote`)}
            </blockquote>
          ) : null}

          <div className="mt-6 space-y-4 text-base leading-7">
            {body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          {t.has(`${prefix}.highlight`) ? (
            <p className="mt-6 font-serif text-xl text-terra">
              {t(`${prefix}.highlight`)}
            </p>
          ) : null}

          {questions.length > 0 ? (
            <ul className="mt-8 space-y-2">
              {questions.map((item) => (
                <li
                  key={item}
                  className="border-b border-border/70 py-2 text-walnut"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {t.has(`${prefix}.cta`) ? (
            <p className="mt-5 font-serif text-xl text-walnut">
              {t(`${prefix}.cta`)}
            </p>
          ) : null}

          {features.length > 0 ? (
            <Accordion type="single" collapsible className="mt-8">
              <AccordionItem value="features">
                <AccordionTrigger>
                  {t("sections.translation.featuresTitle")}
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal space-y-3 ps-5 text-foreground">
                    {features.map((feature) => (
                      <li key={feature.slice(0, 32)}>{feature}</li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : null}

          {curriculum.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {curriculum.map((group) => (
                <div key={group.title} className="rounded-md border border-border bg-paper p-5">
                  <h2 className="font-serif text-xl text-walnut">{group.title}</h2>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}

          {resource.links?.length ? (
            <div className="mt-8">
              <h2 className="font-[family-name:var(--font-display)] text-xs tracking-[0.22em] text-brass uppercase">
                {t("common.purchase")}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {resource.links.map((link) => (
                  <Button key={link.href} asChild variant="outline" size="sm">
                    <ExternalLink href={link.href}>{t(link.labelKey)}</ExternalLink>
                  </Button>
                ))}
              </div>
            </div>
          ) : null}

          {t.has(`${prefix}.article`) ? (
            <p className="mt-6">
              <ExternalLink
                href="https://themuslimvibe.com/faith-islam/13-scientific-facts-in-the-holy-quran"
                className="text-terra underline-offset-4 hover:underline"
              >
                {t("sections.science.article")}
              </ExternalLink>
            </p>
          ) : null}

          {t.has(`${prefix}.explore`) ? (
            <p className="mt-6 text-muted-foreground">{t(`${prefix}.explore`)}</p>
          ) : null}

          {t.has(`${prefix}.audio`) ? (
            <p className="mt-6 text-muted-foreground">{t(`${prefix}.audio`)}</p>
          ) : null}

          {t.has(`${prefix}.note`) ? (
            <p className="mt-6 text-sm text-muted-foreground">{t(`${prefix}.note`)}</p>
          ) : null}

          {resource.youtubeId ? (
            <YoutubeEmbed
              id={resource.youtubeId}
              title={
                t.has(`${prefix}.film`)
                  ? t(`${prefix}.film`)
                  : t.has(`${prefix}.video`)
                    ? t(`${prefix}.video`)
                    : t(`${prefix}.title`)
              }
            />
          ) : null}
        </div>
      </div>

      <nav
        className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-6"
        aria-label="Adjacent resources"
      >
        {prev ? (
          <Link href={`/${prev.id}`} className="min-h-11 text-sm text-muted-foreground hover:text-walnut">
            ← {t(`nav.${prev.navKey}`)}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/${next.id}`} className="min-h-11 text-end text-sm text-muted-foreground hover:text-walnut">
            {t(`nav.${next.navKey}`)} →
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
