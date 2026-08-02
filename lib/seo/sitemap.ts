import type { MetadataRoute } from "next";
import type { PerfumeProduct } from "@/components/perfumes/ProductGrid/products";
import { getPathname } from "@/i18n/navigation";
import { locales, type AppLocale } from "@/i18n/routing";
import { seoCollections } from "./config";
import { getAbsoluteUrl } from "./seo";

type SitemapEntryInput = {
  href:
    | "/"
    | "/perfumes"
    | "/collections"
    | "/about"
    | "/contact"
    | {
        pathname: "/perfumes/[slug]";
        params: { slug: string };
      };
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticRoutes: SitemapEntryInput[] = [
  { href: "/", changeFrequency: "weekly", priority: 1 },
  { href: "/perfumes", changeFrequency: "daily", priority: 0.95 },
  { href: "/collections", changeFrequency: "weekly", priority: 0.85 },
  { href: "/about", changeFrequency: "monthly", priority: 0.65 },
  { href: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

function createLocalizedEntry(
  locale: AppLocale,
  input: SitemapEntryInput
): MetadataRoute.Sitemap[number] {
  const path = getPathname({
    locale,
    href: input.href,
  });

  return {
    url: getAbsoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: input.changeFrequency,
    priority: input.priority,
  };
}

export function generateSitemap(products: PerfumeProduct[]): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push(createLocalizedEntry(locale, route));
    }

    for (const collection of Object.values(seoCollections)) {
      const basePath = getPathname({
        locale,
        href: "/perfumes",
      });
      const query = collection.path.includes("?")
        ? `?${collection.path.split("?")[1]}`
        : "";

      entries.push({
        url: getAbsoluteUrl(`${basePath}${query}`),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }

    for (const product of products) {
      entries.push(
        createLocalizedEntry(locale, {
          href: {
            pathname: "/perfumes/[slug]",
            params: { slug: product.id },
          },
          changeFrequency: "weekly",
          priority: 0.9,
        })
      );
    }
  }

  return entries;
}
