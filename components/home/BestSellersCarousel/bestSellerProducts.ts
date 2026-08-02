import { perfumes, type PerfumeProduct } from "@/components/perfumes/ProductGrid/products";

export type BestSellerProduct = {
  id: PerfumeProduct["id"];
  name: PerfumeProduct["name"];
  brand: PerfumeProduct["brand"];
  price: PerfumeProduct["price"];
  oldPrice: PerfumeProduct["oldPrice"];
  rating: number;
  reviewCount: number;
  badge: PerfumeProduct["badge"];
  image: PerfumeProduct["image"];
  tone: PerfumeProduct["tone"];
  notes: PerfumeProduct["notes"];
};

const bestSellerStats: Record<string, Pick<BestSellerProduct, "rating" | "reviewCount">> = {
  "oud-royal": { rating: 4.9, reviewCount: 127 },
  "rose-privee": { rating: 4.8, reviewCount: 89 },
  "musc-blanc": { rating: 4.7, reviewCount: 156 },
  "ambre-nuit": { rating: 4.9, reviewCount: 203 },
  "neroli-satin": { rating: 4.6, reviewCount: 94 },
  "vanille-doree": { rating: 4.8, reviewCount: 118 },
};

export const bestSellerProducts: BestSellerProduct[] = perfumes
  .filter((product) => product.id in bestSellerStats)
  .map((product) => ({
    ...product,
    ...bestSellerStats[product.id],
  }));