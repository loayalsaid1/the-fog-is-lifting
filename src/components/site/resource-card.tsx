import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Resource } from "@/lib/catalog";
import { OptimizedImage } from "./optimized-image";

type Props = {
  resource: Resource;
  index: string;
};

export async function ResourceCard({ resource, index }: Props) {
  const t = await getTranslations();

  return (
    <Link
      href={`/${resource.id}`}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-paper shadow-[0_10px_30px_rgba(44,36,22,0.06)] transition-transform duration-200 hover:-translate-y-0.5 focus-ring"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <OptimizedImage
          src={resource.image}
          alt={t(resource.imageAltKey)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
        />
      </div>
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
      </div>
    </Link>
  );
}
