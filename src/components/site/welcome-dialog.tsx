"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { localeNames, locales, type Locale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

const STORAGE_KEY = "fog-welcome-dismissed";

export function WelcomeDialog() {
  const t = useTranslations("welcome");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) setOpen(true);
  }, []);

  function dismiss() {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-walnut/55 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
    >
      <div className="w-full max-w-lg rounded-md border border-border bg-paper p-7 shadow-2xl">
        <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-brass uppercase">
          Bridges Foundation
        </p>
        <h2 id="welcome-title" className="mt-3 font-serif text-3xl text-walnut">
          {t("title")}
        </h2>
        <p className="mt-3 text-muted-foreground">{t("body")}</p>
        <p className="mt-2 text-sm text-muted-foreground">{t("hint")}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {locales.map((code) => (
            <Button
              key={code}
              type="button"
              variant={code === locale ? "brass" : "outline"}
              size="sm"
              onClick={() => router.replace(pathname, { locale: code })}
            >
              {localeNames[code]}
            </Button>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">{t("thanks")}</p>
          <Button type="button" onClick={dismiss}>
            {t("continue")}
          </Button>
        </div>
      </div>
    </div>
  );
}
