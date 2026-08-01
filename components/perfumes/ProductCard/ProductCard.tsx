"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { PerfumeProduct } from "../ProductGrid/products";
import AddToCartButton from "@/components/cart/AddToCartButton/AddToCartButton";

type ProductCardProps = {
  product: PerfumeProduct;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.03, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-[#1e2a25]/10 bg-white shadow-[0_16px_40px_rgba(30,42,37,0.08)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(30,42,37,0.12)]"
    >
      {/* Product Image - Larger on mobile */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#f6f6df]/30 to-white">
        <Image
          src={product.image}
          alt={`${product.name} par ${product.brand}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        
        {/* Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.6rem] sm:text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#588b76] shadow-sm backdrop-blur">
          {product.badge}
        </span>
        
        {/* Wishlist Button - Smaller on mobile */}
        <button
          type="button"
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute right-3 top-3 inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/90 text-[#588b76] shadow-sm backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95"
          aria-label={isWishlisted ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 sm:h-4.5 sm:w-4.5"
            fill={isWishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.8 4.6a5.4 5.4 0 00-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 00-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 000-7.6z" />
          </svg>
        </button>
      </div>

      {/* Product Info - Compact */}
      <div className="p-3 sm:p-4 pb-12 sm:pb-14">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#588b76] mb-1">
              {product.category}
            </p>
            <h2 className="font-serif text-lg sm:text-xl font-semibold tracking-[-0.02em] text-[#1e2a25] leading-tight line-clamp-2">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-0.5 truncate">{product.brand}</p>
          </div>
          
          {/* Price - Prominent */}
          <div className="text-right flex-shrink-0">
            <p className="font-semibold text-[#1e2a25] text-sm sm:text-base">{product.price}</p>
            <p className="text-[0.6rem] sm:text-xs text-[var(--color-muted)] line-through">
              {product.oldPrice}
            </p>
          </div>
        </div>

        {/* Notes - Hidden on mobile, visible on larger screens */}
        <p className="hidden sm:block mt-3 text-sm leading-5 text-[var(--color-muted)] line-clamp-2">
          {product.notes}
        </p>

        {/* Availability Badge - Smaller */}
        <div className="mt-3 sm:mt-4">
          <span className="inline-block rounded-full bg-[#f6f6df]/60 px-2.5 py-1 text-[0.6rem] sm:text-xs font-medium text-[#1e2a25]">
            {product.availability}
          </span>
        </div>
      </div>

      {/* Sticky Add to Cart Button */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20">
        <AddToCartButton
          product={{
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            tone: product.tone,
          }}
          size="sm"
        >
          <span className="mr-1.5 text-sm">🛍️</span>
          <span className="font-medium">Ajouter</span>
        </AddToCartButton>
      </div>

      {/* Product Link Overlay */}
      <a
        href={`/perfumes/${product.id}`}
        className="absolute inset-0 z-10"
        aria-label={`Voir les détails de ${product.name}`}
      >
        <span className="sr-only">Voir les détails</span>
      </a>
    </motion.article>
  );
}
