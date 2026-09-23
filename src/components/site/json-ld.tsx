import { siteConfig } from "@/lib/site";
import { resources } from "@/lib/catalog";

type Props = {
  locale: string;
  title: string;
  description: string;
};

export function JsonLd({ locale, title, description }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: title,
        url: siteConfig.url,
        inLanguage: locale,
        description,
        publisher: {
          "@type": "Organization",
          name: siteConfig.organization,
          url: siteConfig.social.bridges,
        },
      },
      {
        "@type": "ItemList",
        name: title,
        numberOfItems: resources.length,
        itemListElement: resources.map((resource, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}/${resource.id}`,
          name: resource.id,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
