"use client";

import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { ExternalLink } from "./external-link";
import { ShareActions } from "./share-actions";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-20 border-t border-border bg-walnut text-parchment">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-brass uppercase">
            {t("shareTitle")}
          </p>
          <h2 className="mt-3 font-serif text-3xl">{t("shareTitle")}</h2>
          <p className="mt-3 max-w-md text-parchment/80">{t("shareBody")}</p>
          <ShareActions />
        </div>
        <div className="space-y-5">
          <p className="text-sm text-parchment/75">{t("copyright")}</p>
          <ExternalLink
            href={siteConfig.social.bridges}
            className="inline-flex min-h-11 items-center text-brass underline-offset-4 hover:underline"
          >
            {t("visit")}
          </ExternalLink>
          <div>
            <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.22em] uppercase text-parchment/70">
              {t("follow")}
            </p>
            <div className="mt-3 flex gap-3">
              <ExternalLink
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="inline-flex size-11 items-center justify-center rounded-full border border-parchment/20 hover:border-brass hover:text-brass"
              >
                <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                  <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3.1l.9-4H13V9c0-.6.4-1 1-1Z" />
                </svg>
              </ExternalLink>
              <ExternalLink
                href={siteConfig.social.youtube}
                aria-label="YouTube"
                className="inline-flex size-11 items-center justify-center rounded-full border border-parchment/20 hover:border-brass hover:text-brass"
              >
                <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                  <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6ZM9.8 15.5v-6.6l6.2 3.3-6.2 3.3Z" />
                </svg>
              </ExternalLink>
              <ExternalLink
                href={siteConfig.social.email}
                aria-label="Email"
                className="inline-flex size-11 items-center justify-center rounded-full border border-parchment/20 hover:border-brass hover:text-brass"
              >
                <Mail className="size-4" />
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
