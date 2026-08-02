"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import type { HeroSlide } from "./heroSlides";

type HeroContentProps = {
  slide: HeroSlide;
  direction: number;
};

export default function HeroContent({ slide, direction }: HeroContentProps) {
  const t = useTranslations("Hero");
  const eyebrow = t(`slides.${slide.id}.eyebrow`);
  const title = t(`slides.${slide.id}.title`);
  const description = t(`slides.${slide.id}.description`);
  const stats = t.raw(`slides.${slide.id}.stats`) as {
    value: string;
    label: string;
  }[];

  return (
    <div className="min-h-0 max-w-3xl lg:min-h-[38rem]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? -40 : 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: direction > 0 ? 20 : -20, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.08, ease: "easeInOut" }}
            className="mb-3 inline-flex rounded-full border border-[#588b76]/20 bg-white/50 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#588b76] shadow-sm backdrop-blur sm:mb-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.28em] lg:mb-6"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.16, ease: "easeInOut" }}
            className="font-serif text-[clamp(2.15rem,12vw,3.45rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-[#1e2a25] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.24, ease: "easeInOut" }}
            className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:mt-6 sm:text-lg sm:leading-8 lg:mt-7 lg:text-xl lg:leading-9"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.32, ease: "easeInOut" }}
            className="mt-4 sm:mt-8 lg:mt-10"
          >
            <HeroButtons slide={slide} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="mt-8 hidden sm:block lg:mt-12"
          >
            <HeroStats stats={stats} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
