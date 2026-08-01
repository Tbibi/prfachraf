"use client";

import { AnimatePresence, motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import type { HeroSlide } from "./heroSlides";

type HeroContentProps = {
  slide: HeroSlide;
  direction: number;
};

export default function HeroContent({ slide, direction }: HeroContentProps) {
  return (
    <div className="min-h-[34rem] max-w-3xl lg:min-h-[38rem]">
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
            className="mb-6 inline-flex rounded-full border border-[#588b76]/20 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#588b76] shadow-sm backdrop-blur"
          >
            {slide.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.16, ease: "easeInOut" }}
            className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#1e2a25] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.24, ease: "easeInOut" }}
            className="mt-7 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg lg:text-xl lg:leading-9"
          >
            {slide.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.32, ease: "easeInOut" }}
            className="mt-10"
          >
            <HeroButtons slide={slide} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="mt-12"
          >
            <HeroStats stats={slide.stats} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
