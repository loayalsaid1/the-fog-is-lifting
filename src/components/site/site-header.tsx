"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { resources } from "@/lib/catalog";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const items = [
    { hash: "collection", label: t("nav.home") },
    ...resources.map((resource) => ({
      hash: resource.id,
      label: t(`nav.${resource.navKey}`),
    })),
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-parchment/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3 focus-ring rounded-sm"
        >
          <span className="font-[family-name:var(--font-display)] text-[0.68rem] tracking-[0.28em] text-brass uppercase">
            Bridges
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="font-serif text-lg leading-none text-walnut sm:text-xl">
            {t("hero.title")}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden max-w-[42rem] items-center gap-1 overflow-x-auto lg:flex"
        >
          {items.slice(0, 6).map((item) => (
            <Link
              key={item.hash}
              href={{ pathname: "/", hash: item.hash }}
              className="min-h-11 shrink-0 px-2.5 py-2 font-[family-name:var(--font-display)] text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-walnut focus-ring rounded-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label={t("common.menu")}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{t("toc.title")}</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1" aria-label="All sections">
                {items.map((item) => (
                  <Link
                    key={item.hash}
                    href={{ pathname: "/", hash: item.hash }}
                    onClick={() => setOpen(false)}
                    className="min-h-11 rounded-sm px-2 py-2 font-serif text-lg text-walnut hover:bg-secondary focus-ring"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
