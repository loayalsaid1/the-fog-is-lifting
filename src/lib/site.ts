export const siteConfig = {
  name: "The Fog Is Lifting",
  shortName: "Fog Is Lifting",
  author: "Loay Al-Said",
  organization: "Bridges Foundation",
  url: "https://the-fog-is-lifting.pages.dev",
  email: "director@bridges-foundation.org",
  twitter: "@FadelSoliman",
  keywords: [
    "The Fog Is Lifting",
    "Bridges Foundation",
    "Islam",
    "documentary series",
    "Islamophobia",
    "Prophet Muhammad",
    "Fadel Soliman",
    "Quran translation",
    "Jihad",
  ],
  social: {
    facebook: "https://www.facebook.com/fadelsoliman",
    twitter: "https://twitter.com/FadelSoliman",
    youtube: "https://www.youtube.com/@FadelSoliman212",
    email: "mailto:director@bridges-foundation.org",
    bridges: "https://bridges-foundation.org",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
