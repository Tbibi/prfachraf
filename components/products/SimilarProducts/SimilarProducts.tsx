"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/perfumes/ProductCard/ProductCard";
import { perfumes, PerfumeProduct } from "@/components/perfumes/ProductGrid/products";

type SimilarProductsProps = {
  currentProduct: PerfumeProduct;
};

export default function SimilarProducts({ currentProduct }: SimilarProductsProps) {
  // Filter similar products based on category and exclude current product
  const similarProducts = perfumes
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.category === currentProduct.category || product.brand === currentProduct.brand)
    )
    .slice(0, 4);

  if (similarProducts.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#588b76]">
          Recommandations
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-4xl">
          Produits similaires
        </h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Découvrez d&apos;autres fragrances qui pourraient vous plaire
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {similarProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProductCard product={product} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}