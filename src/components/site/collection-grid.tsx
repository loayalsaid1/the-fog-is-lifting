import { getTranslations } from "next-intl/server";
import { resources } from "@/lib/catalog";
import { ResourceCard } from "./resource-card";

export async function CollectionGrid() {
  const t = await getTranslations("toc");

  return (
    <section id="collection" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-brass uppercase">
          I — XII
        </p>
        <h2 className="mt-3 font-serif text-4xl text-walnut">{t("title")}</h2>
        <p className="mt-3 text-muted-foreground">{t("subtitle")}</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resources.map((resource, index) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            index={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </section>
  );
}
