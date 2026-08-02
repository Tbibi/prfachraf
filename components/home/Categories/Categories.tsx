"use client";

import { useTranslations } from "next-intl";
import CategoryCard from "./CategoryCard";
import { categories } from "./categories";

export default function Categories() {
  const t = useTranslations("Home");

  return (
    <section
      id="collections"
      aria-labelledby="categories-title"
      className="bg-[var(--color-secondary)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#588b76]">
              {t("categoriesEyebrow")}
            </p>
            <h2
              id="categories-title"
              className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-5xl lg:text-6xl"
            >
              {t("categoriesTitle")}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            {t("categoriesDescription")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
