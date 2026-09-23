"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Link2, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "./external-link";

export function ShareActions() {
  const t = useTranslations();
  const [copied, setCopied] = useState(false);

  async function copy() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button type="button" variant="brass" onClick={copy}>
        {copied ? <Check /> : <Link2 />}
        {copied ? t("common.copied") : t("common.copyLink")}
      </Button>
      <Button variant="outline" asChild className="border-parchment/30 text-parchment hover:text-walnut">
        <ExternalLink href="/images/qrcode.png" download>
          <QrCode />
          {t("footer.qr")}
        </ExternalLink>
      </Button>
    </div>
  );
}
