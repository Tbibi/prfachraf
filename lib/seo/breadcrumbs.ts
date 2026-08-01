import type { PerfumeProduct } from "@/components/perfumes/ProductGrid/products";
import { seoCollections } from "./config";
import { createBreadcrumbSchema } from "./jsonld";
import { getAbsoluteUrl } from "./seo";
import type { BreadcrumbItem } from "./schema";

export type CollectionKey = keyof typeof seoCollections;

export function createPageBreadcrumbs(items: Array<{ name: string; path: string }>): BreadcrumbItem[] {
  return [
    {
      name: "Home",
      url: getAbsoluteUrl("/"),
    },
    ...items.map((item) => ({
      name: item.name,
      url: getAbsoluteUrl(item.path),
    })),
  ];
}

export function createCollectionBreadcrumbs(collection: CollectionKey): BreadcrumbItem[] {
  const collectionSeo = seoCollections[collection];

  return createPageBreadcrumbs([
    { name: "Perfumes", path: "/perfumes" },
    { name: collectionSeo.name, path: collectionSeo.path },
  ]);
}

export function createProductBreadcrumbs(product: PerfumeProduct): BreadcrumbItem[] {
  return createPageBreadcrumbs([
    { name: "Perfumes", path: "/perfumes" },
    { name: product.category, path: `/perfumes?category=${product.category.toLowerCase()}` },
    { name: product.name, path: `/perfumes/${product.id}` },
  ]);
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return createBreadcrumbSchema(items);
}
