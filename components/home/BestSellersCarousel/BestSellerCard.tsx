"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BestSellerProduct } from "./bestSellerProducts";
import AddToCartButton from "@/components/cart/AddToCartButton/AddToCartButton";

type BestSellerCardProps = {
  product: BestSellerProduct;
  index: number;
};

export default function BestSellerCard({ product, index }: BestSellerCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-200'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ 
        duration: 0.45,
        delay: Math.min(index * 0.04, 0.18),
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      className="group relative flex h-[360px] flex-col overflow-hidden rounded-[1.6rem] border border-[#1e2a25]/10 bg-white shadow-[0_18px_45px_rgba(30,42,37,0.08)] transition-all duration-500 hover:border-[#588b76]/20 hover:shadow-[0_26px_64px_rgba(30,42,37,0.12)] md:h-full"
    >
      {/* Product Image */}
      <div className="relative h-[168px] shrink-0 overflow-hidden bg-gradient-to-br from-[#f6f6df]/20 to-white md:h-auto md:aspect-[4/5]">
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={product.image}
            alt={`${product.name} by ${product.brand}`}
            fill
            sizes="(min-width: 1440px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 50vw, 83vw"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
            className={`object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f6f6df]/30 to-white">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#588b76] border-t-transparent"></div>
            </div>
          )}
        </motion.div>

        {/* Badge */}
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[#588b76] shadow-sm backdrop-blur md:px-3 md:py-1.5 md:text-xs">
            {product.badge}
          </span>
        </div>

        {/* Wishlist Button */}
        <motion.button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#588b76] shadow-sm backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-md"
          aria-label={isWishlisted ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4.5 w-4.5"
            fill={isWishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.8 4.6a5.4 5.4 0 00-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 00-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 000-7.6z" />
          </svg>
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="min-h-0 flex-1">
          <h3 className="font-serif text-xl font-semibold leading-tight text-[#1e2a25] md:text-2xl">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center gap-1.5">
            {renderStars(product.rating)}
            <span className="text-xs font-medium text-[#1e2a25]">{product.rating}</span>
            <span className="text-xs text-[var(--color-muted)]">({product.reviewCount})</span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-serif text-xl font-semibold text-[#1e2a25] md:text-2xl">
              {product.price}
            </span>
            <span className="text-sm text-[var(--color-muted)] line-through">
              {product.oldPrice}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <AddToCartButton
          product={{
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            tone: product.tone,
          }}
          size="md"
          className="relative z-30"
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <span>🛍️</span>
            <span>Ajouter au panier</span>
          </motion.div>
        </AddToCartButton>
      </div>

      {/* Product Details Link Overlay */}
      <a
        href={`/perfumes/${product.id}`}
        className="absolute inset-0 z-10"
        aria-label={`Voir les détails de ${product.name}`}
      >
        <span className="sr-only">Voir les détails</span>
      </a>

      {/* Make WhatsApp button clickable above the overlay */}
      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 z-20 pointer-events-none">
        <div className="pointer-events-auto">
          {/* WhatsApp button is already rendered above */}
        </div>
      </div>
    </motion.article>
  );
}