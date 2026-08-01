"use client";

import { motion } from "framer-motion";
import type { HeroSlide } from "./heroSlides";

type HeroStatsProps = {
  stats: HeroSlide["stats"];
};

export default function HeroStats({ stats }: HeroStatsProps) {
  return (
    <dl className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={`${stat.value}-${stat.label}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.42 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-2xl border border-white/70 bg-white/45 px-5 py-4 shadow-[0_18px_45px_rgba(30,42,37,0.07)] backdrop-blur-xl"
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {stat.label}
          </dt>
          <dd className="mt-2 font-serif text-2xl font-semibold tracking-[-0.03em] text-[#1e2a25]">
            {stat.value}
          </dd>
        </motion.div>
      ))}
    </dl>
  );
}
