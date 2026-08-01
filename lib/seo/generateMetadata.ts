import type { Metadata } from "next";
import type { PerfumeProduct } from "@/components/perfumes/ProductGrid/products";
import { seoCollections, seoConfig, seoPages } from "./config";
import { createSeoMetadata } from "./seo";

export type SeoPageKey = keyof typeof seoPages;

export function generateSiteMetadata(): Metadata {
  return createSeoMetadata({
    title: seoConfig.siteName,
    description:
      "Achraf Parfums propose des parfums premium, élégants et authentiques pour homme et femme au Maroc.",
    path: "/",
    keywords: ["Achraf Parfums Maroc", "parfumerie luxe", "parfum premium"],
  });
}

export function generatePageMetadata(page: SeoPageKey): Metadata {
  return createSeoMetadata(seoPages[page]);
}

export function generateProductMetadata(product: PerfumeProduct): Metadata {
  return createSeoMetadata({
    title: product.name,
    description: `Discover ${product.name}, a premium oriental perfume crafted for luxury fragrance lovers.`,
    path: `/perfumes/${product.id}`,
    image: product.image,
    keywords: [
      product.name,
      product.brand,
      product.category,
      product.badge,
      product.notes,
      "parfum premium Maroc",
    ],
    type: "article",
  });
}

export type SeoCollectionKey = keyof typeof seoCollections;

export function generateCollectionMetadata(collection: SeoCollectionKey): Metadata {
  return createSeoMetadata(seoCollections[collection]);
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

export function generateCollectionMetadataFromSearchParams(searchParams: {
  category?: string | string[];
  sort?: string | string[];
}): Metadata {
  const collection = getCollectionKeyFromSearchParams(searchParams);

  if (!collection) {
    return generatePageMetadata("perfumes");
  }

  return generateCollectionMetadata(collection);
}

export function generateNotFoundMetadata(): Metadata {
  return createSeoMetadata({
    title: "Page introuvable",
    description: "La page demandée est introuvable sur Achraf Parfums.",
    path: "/",
    robots: {
      index: false,
      follow: false,
    },
  });
}
