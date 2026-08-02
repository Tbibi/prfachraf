"use client";

import { useTranslations } from "next-intl";
import ProductCard from "./ProductCard";
import { featuredProducts } from "./products";

export default function BestSeller() {
  const t = useTranslations("Home");

  return (
    <section
      id="parfums"
      aria-labelledby="best-seller-title"
      className="bg-[var(--color-background)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#588b76]">
            {t("featuredEyebrow")}
          </p>
          <h2
            id="best-seller-title"
            className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-5xl lg:text-6xl"
          >
            {t("featuredTitle")}
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            {t("featuredDescription")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
