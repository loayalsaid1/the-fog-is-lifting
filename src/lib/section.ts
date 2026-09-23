import type { Resource } from "@/lib/catalog";

export const roman = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
] as const;

type Messages = {
  has: (key: string) => boolean;
  raw: (key: string) => unknown;
};

export function sectionPrefix(resource: Resource) {
  return `sections.${resource.sectionKey}`;
}

export function sectionSummary(
  t: Messages & ((key: string) => string),
  resource: Resource
) {
  const prefix = sectionPrefix(resource);
  if (t.has(`${prefix}.lead`)) return t(`${prefix}.lead`);
  if (t.has(`${prefix}.body`)) {
    const body = t.raw(`${prefix}.body`);
    if (Array.isArray(body) && typeof body[0] === "string") return body[0];
  }
  return "";
}
