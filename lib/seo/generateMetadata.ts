import type { Metadata } from "next";
import type { PerfumeProduct } from "@/components/perfumes/ProductGrid/products";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { locales, type AppLocale } from "@/i18n/routing";
import { seoCollections } from "./config";
import { createSeoMetadata, getAbsoluteUrl } from "./seo";
import { generateLocalizedPageMetadata } from "./localizedMetadata";

export type SeoCollectionKey = keyof typeof seoCollections;

export async function generatePageMetadata(
  page: Parameters<typeof generateLocalizedPageMetadata>[1],
  locale: string
): Promise<Metadata> {
  return generateLocalizedPageMetadata(locale, page);
}

export async function generateProductMetadata(
  product: PerfumeProduct,
  locale: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Product" });
  const path = getPathname({
    locale: locale as AppLocale,
    href: {
      pathname: "/perfumes/[slug]",
      params: { slug: product.id },
    },
  });

  const languages = Object.fromEntries(
    locales.map((item) => [
      item,
      getAbsoluteUrl(
        getPathname({
          locale: item,
          href: {
            pathname: "/perfumes/[slug]",
            params: { slug: product.id },
          },
        })
      ),
    ])
  );

  return createSeoMetadata({
    title: product.name,
    description: `${t("description")}: ${product.name}. ${product.notes}`,
    path,
    image: product.image,
    keywords: [
      product.name,
      product.brand,
      product.category,
      product.badge,
      product.notes,
    ],
    type: "article",
    locale,
    languages,
  });
}

export function getCollectionKeyFromSearchParams(searchParams: {
  category?: string | string[];
  sort?: string | string[];
}): SeoCollectionKey | null {
  const category = Array.isArray(searchParams.category)
    ? searchParams.category[0]
    : searchParams.category;
  const sort = Array.isArray(searchParams.sort) ? searchParams.sort[0] : searchParams.sort;

  if (category && category in seoCollections) {
    return category as SeoCollectionKey;
  }

  if (sort === "new") {
    return "newest";
  }

  if (sort && sort in seoCollections) {
    return sort as SeoCollectionKey;
  }

  return null;
}

export async function generateCollectionMetadataFromSearchParams(
  searchParams: {
    category?: string | string[];
    sort?: string | string[];
  },
  locale: string
): Promise<Metadata> {
  const collection = getCollectionKeyFromSearchParams(searchParams);

  if (!collection) {
    return generateLocalizedPageMetadata(locale, "perfumes");
  }

  const collectionSeo = seoCollections[collection];
  const basePath = getPathname({
    locale: locale as AppLocale,
    href: "/perfumes",
  });
  const query = collectionSeo.path.includes("?")
    ? `?${collectionSeo.path.split("?")[1]}`
    : "";

  return createSeoMetadata({
    title: collectionSeo.title,
    description: collectionSeo.description,
    path: `${basePath}${query}`,
    keywords: collectionSeo.keywords,
    locale,
  });
}

export async function generateNotFoundMetadata(locale = "fr"): Promise<Metadata> {
  return createSeoMetadata({
    title: "404",
    description: "Page not found",
    path: `/${locale}`,
    locale,
    robots: {
      index: false,
      follow: false,
    },
  });
}
