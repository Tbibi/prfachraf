"use client";

import { motion } from "framer-motion";
import BestSellerCard from "./BestSellerCard";
import { bestSellerProducts } from "./bestSellerProducts";

export default function BestSellersCarousel() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 max-w-3xl sm:mb-10 lg:mb-12"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#588b76]">
            Nos Incontournables
          </p>
          <h2 className="mb-5 font-serif text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#1e2a25] sm:text-5xl lg:text-6xl">
            Best Sellers
          </h2>
          <p className="text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            Les parfums les plus aimés, présentés dans une expérience pensée pour
            commander vite sur mobile.
          </p>
        </motion.div>

        <div
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 min-[1440px]:grid-cols-5 [&::-webkit-scrollbar]:hidden"
          aria-label="Best Sellers"
        >
          {bestSellerProducts.map((product, index) => (
            <div key={product.id} className="min-w-[83%] snap-start md:min-w-0">
              <BestSellerCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}