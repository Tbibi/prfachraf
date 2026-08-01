import { perfumes } from "@/components/perfumes/ProductGrid/products";
import { generateSitemap } from "@/lib/seo/sitemap";

export default function sitemap() {
  return generateSitemap(perfumes);
}
