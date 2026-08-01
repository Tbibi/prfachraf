import type { MetadataRoute } from "next";
import type { PerfumeProduct } from "@/components/perfumes/ProductGrid/products";
import { seoCollections } from "./config";
import { getAbsoluteUrl } from "./seo";

type SitemapEntryInput = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticRoutes: SitemapEntryInput[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/perfumes", changeFrequency: "daily", priority: 0.95 },
  { path: "/collections", changeFrequency: "weekly", priority: 0.85 },
  { path: "/a-propos", changeFrequency: "monthly", priority: 0.65 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
];

function createEntry({ path, changeFrequency, priority }: SitemapEntryInput): MetadataRoute.Sitemap[number] {
  return {
    url: getAbsoluteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export function generateSitemap(products: PerfumeProduct[]): MetadataRoute.Sitemap {
  const collectionRoutes = Object.values(seoCollections).map((collection) =>
    createEntry({
      path: collection.path,
      changeFrequency: "weekly",
      priority: 0.85,
    })
  );

  const productRoutes = products.map((product) =>
    createEntry({
      path: `/perfumes/${product.id}`,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  );

  return [
    ...staticRoutes.map(createEntry),
    ...collectionRoutes,
    ...productRoutes,
  ];
}
