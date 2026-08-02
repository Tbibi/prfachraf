"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Category } from "./categories";

type CategoryCardProps = {
  category: Category;
  index: number;
};

const titleKeyMap = {
  homme: "categoryHommeTitle",
  femme: "categoryFemmeTitle",
  nouveautes: "categoryNouveautesTitle",
  "best-sellers": "categoryBestsellersTitle",
} as const;

const descKeyMap = {
  homme: "categoryHommeDesc",
  femme: "categoryFemmeDesc",
  nouveautes: "categoryNouveautesDesc",
  "best-sellers": "categoryBestsellersDesc",
} as const;

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const t = useTranslations("Home");
  const title = t(titleKeyMap[category.id]);
  const description = t(descKeyMap[category.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <Link
        href={category.href as never}
        aria-label={`${t("discover")} ${title}`}
        className="relative block min-h-[18rem] overflow-hidden rounded-[2rem] border border-[#1e2a25]/10 bg-white p-6 shadow-[0_22px_60px_rgba(30,42,37,0.08)] transition-all duration-500 hover:shadow-[0_28px_72px_rgba(30,42,37,0.13)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76] sm:p-7"
      >
        <div
          className="absolute inset-0 opacity-80 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          style={{
            background: `radial-gradient(circle at 20% 18%, ${category.accent}30, transparent 34%), linear-gradient(135deg, #fffef7 0%, #f6f6df 52%, ${category.accent}22 100%)`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -end-12 -top-12 h-40 w-40 rounded-full border border-white/70 bg-white/30 backdrop-blur-xl transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-6 end-6 h-16 w-16 rounded-full border border-white/70 bg-white/40 shadow-sm backdrop-blur-xl transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          aria-hidden="true"
        />

        <div className="relative flex min-h-[15rem] flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#588b76]">
              {t("collectionLabel")}
            </p>
            <h3 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-4xl">
              {title}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              {description}
            </p>
          </div>

          <span className="mt-8 inline-flex w-fit items-center rounded-full bg-white/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#588b76] shadow-sm backdrop-blur transition-all duration-300 group-hover:bg-[#588b76] group-hover:text-white">
            {t("discover")}
            <span
              className="ms-3 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
