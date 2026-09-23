export type ResourceKind = "documentary" | "series" | "book" | "course";

export type ResourceLink = {
  href: string;
  labelKey: string;
};

export type Resource = {
  id: string;
  navKey: string;
  image: string;
  imageAltKey: string;
  href: string;
  kind: ResourceKind;
  youtubeId?: string;
  links?: ResourceLink[];
  questionsKey?: string;
  featuresKey?: string;
  curriculumKey?: string;
  quoteKey?: string;
  englishOnlyLocales?: string[];
};

export const resources: Resource[] = [
  {
    id: "islam-in-brief",
    navKey: "islamInBrief",
    image: "/images/islam-in-brief.jpg",
    imageAltKey: "sections.islamInBrief.imageAlt",
    href: "https://bridges-foundation.org/documentary/",
    kind: "documentary",
  },
  {
    id: "jihad-on-terrorism",
    navKey: "jihadOnTerrorism",
    image: "/images/jihad-on-terrorism.png",
    imageAltKey: "sections.jihadOnTerrorism.imageAlt",
    href: "https://bridges-foundation.org/documentary/",
    kind: "documentary",
  },
  {
    id: "islam-in-women",
    navKey: "islamInWomen",
    image: "/images/islam-in-women.jpg",
    imageAltKey: "sections.islamInWomen.imageAlt",
    href: "https://bridges-foundation.org/documentary/",
    kind: "documentary",
  },
  {
    id: "islamophobia1",
    navKey: "islamophobia1",
    image: "/images/islamophobia-1-thumb.png",
    imageAltKey: "sections.islamophobia1.imageAlt",
    href: "https://www.youtube.com/playlist?list=PLQ15Iu5Vbki_QfocfxWGEPsGqEVeqWG7z",
    kind: "series",
    questionsKey: "sections.islamophobia1.questions",
  },
  {
    id: "do-not-hate",
    navKey: "doNotHate",
    image: "/images/do-not-hate.png",
    imageAltKey: "sections.doNotHate.imageAlt",
    href: "https://www.youtube.com/playlist?list=PLukAHj56HNKbQXwCUj-ozs3Oew1eXLttj",
    kind: "series",
  },
  {
    id: "islamophobia2",
    navKey: "islamophobia2",
    image: "/images/islamophobia-2.png",
    imageAltKey: "sections.islamophobia2.imageAlt",
    href: "https://www.youtube.com/playlist?list=PLQ15Iu5Vbki_RtWGSureJUT0sHkKPncNJ",
    kind: "series",
    questionsKey: "sections.islamophobia2.questions",
  },
  {
    id: "1001-inventions",
    navKey: "inventions",
    image: "/images/1001-inventions.jpg",
    imageAltKey: "sections.inventions.imageAlt",
    href: "https://1001inventions.com",
    kind: "book",
    englishOnlyLocales: ["es", "he", "hi", "zh"],
    links: [
      {
        href: "https://archive.org/details/1001inventionsen0000unse",
        labelKey: "sections.inventions.links.pdf",
      },
      {
        href: "https://www.amazon.com/1001-Inventions-Civilization-Companion-Exhibition/dp/1426209347",
        labelKey: "sections.inventions.links.hardcover",
      },
      {
        href: "https://play.google.com/store/apps/details?id=islamicbooks.musliminventions&hl=en_US",
        labelKey: "sections.inventions.links.app",
      },
    ],
  },
  {
    id: "1001-inventions-for-kids",
    navKey: "inventionsKids",
    image: "/images/1001-inventions-kids.jpg",
    imageAltKey: "sections.inventionsKids.imageAlt",
    href: "https://1001inventions.com",
    kind: "book",
    youtubeId: "SxJ2OC7iXo0",
    englishOnlyLocales: ["es", "he", "hi", "zh"],
    links: [
      {
        href: "https://www.nationalgeographic.com/pdf/1001-muslim-inventions-ed-guide.pdf",
        labelKey: "sections.inventionsKids.links.pdf",
      },
      {
        href: "https://www.amazon.co.uk/Inventions-Awesome-Facts-Muslim-Civilisation/dp/142631258X",
        labelKey: "sections.inventionsKids.links.hardcover",
      },
    ],
  },
  {
    id: "quran-and-science",
    navKey: "science",
    image: "/images/science-in-quran.webp",
    imageAltKey: "sections.science.imageAlt",
    href: "https://themuslimvibe.com/faith-islam/13-scientific-facts-in-the-holy-quran",
    kind: "book",
    youtubeId: "Zj-5KUSzboo",
    quoteKey: "sections.science.quote",
    englishOnlyLocales: ["es", "he", "hi", "zh"],
  },
  {
    id: "quran-and-philosophy",
    navKey: "philosophy",
    image: "/images/story-of-faith.jpg",
    imageAltKey: "sections.philosophy.imageAlt",
    href: "https://www.youtube.com/@FadelSoliman212/featured",
    kind: "book",
    englishOnlyLocales: ["es", "he", "hi", "zh"],
    links: [
      {
        href: "https://dar-ammar.com/ar/products/copy-of-%D9%82%D8%B5%D8%A9-%D8%A7%D9%84%D8%A5%D9%8A%D9%85%D8%A7%D9%86-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9-%D9%88%D8%A7%D9%84%D8%B9%D9%84%D9%85-%D9%88%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86",
        labelKey: "sections.philosophy.links.hardcover",
      },
    ],
  },
  {
    id: "translation",
    navKey: "quran",
    image: "/images/bridges-quran.jpg",
    imageAltKey: "sections.translation.imageAlt",
    href: "https://bridges-foundation.org/product/bridges-translation-of-quran/",
    kind: "book",
    featuresKey: "sections.translation.features",
    englishOnlyLocales: ["he"],
    links: [
      {
        href: "https://apps.apple.com/us/app/bridges-qurans-translation/id1477401717?platform=iphone",
        labelKey: "sections.translation.links.apple",
      },
      {
        href: "https://bridges-foundation.org/product/bridges-translation-of-quran/",
        labelKey: "sections.translation.links.ebook",
      },
      {
        href: "https://www.amazon.com/Bridges-Translation-Qiraat-Noble-Quran/dp/1728391512",
        labelKey: "sections.translation.links.hardcover",
      },
      {
        href: "https://play.google.com/store/apps/details?id=org.bridges_foundation.quran&hl=en_US",
        labelKey: "sections.translation.links.play",
      },
    ],
  },
  {
    id: "dawah",
    navKey: "dawah",
    image: "/images/arts-of-dawa.jpg",
    imageAltKey: "sections.dawah.imageAlt",
    href: "https://bridges-foundation.org/product/the-arts-of-dawa-%e2%8e%9c-first-level-how-to-present-islam/",
    kind: "course",
    curriculumKey: "sections.dawah.curriculum",
    englishOnlyLocales: ["es", "he", "hi", "zh"],
  },
];

export const heroPosters = [
  { src: "/images/islam-in-brief.jpg", alt: "Islam in Brief" },
  { src: "/images/jihad-on-terrorism.png", alt: "Jihad on Terrorism" },
  { src: "/images/islam-in-women.jpg", alt: "Islam in Women" },
  { src: "/images/islamophobia-1.png", alt: "Islamophobia 1" },
  { src: "/images/do-not-hate.png", alt: "Don't Hate, Educate" },
  { src: "/images/islamophobia-2.png", alt: "Islamophobia 2" },
  { src: "/images/1001-inventions.jpg", alt: "1001 Inventions" },
  { src: "/images/1001-inventions-kids.jpg", alt: "1001 Inventions for Kids" },
  { src: "/images/science-in-quran.webp", alt: "Science in the Quran" },
  { src: "/images/story-of-faith.jpg", alt: "The Story of Faith" },
  { src: "/images/bridges-quran.jpg", alt: "Bridges Translation" },
  { src: "/images/arts-of-dawa.jpg", alt: "The Arts of Da'wa" },
];
