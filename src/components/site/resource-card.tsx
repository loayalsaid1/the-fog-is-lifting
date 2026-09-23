import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Resource } from "@/lib/catalog";
import { sectionSummary } from "@/lib/section";
import { CoverFrame } from "./cover-frame";

type Props = {
  resource: Resource;
  index: string;
};

export async function ResourceCard({ resource, index }: Props) {
  const t = await getTranslations();
  const summary = sectionSummary(t, resource);

  return (
    <Link
      href={`/${resource.id}`}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-paper shadow-[0_10px_30px_rgba(44,36,22,0.06)] transition-transform duration-200 hover:-translate-y-0.5 focus-ring"
    >
      <CoverFrame
        src={resource.image}
        alt={t(resource.imageAltKey)}
        orientation={resource.orientation}
        width={resource.width}
        height={resource.height}
        className="max-w-none rounded-none border-0 shadow-none"
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="font-[family-name:var(--font-display)] text-[0.65rem] tracking-[0.22em] text-brass uppercase">
            {index}
          </span>
          <span className="font-[family-name:var(--font-display)] text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
            {t(`kinds.${resource.kind}`)}
          </span>
        </div>
        <h3 className="font-serif text-xl leading-snug text-walnut">
          {t(`nav.${resource.navKey}`)}
        </h3>
        {summary ? (
          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {summary}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
