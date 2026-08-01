"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HeroSlide } from "./heroSlides";

type HeroButtonsProps = {
  slide: HeroSlide;
};

export default function HeroButtons({ slide }: HeroButtonsProps) {
  const whatsappMessage = encodeURIComponent(slide.primaryMessage);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href={`https://wa.me/212600000000?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center rounded-full bg-[#588b76] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_20px_50px_rgba(88,139,118,0.25)] transition-all duration-400 hover:bg-[#4d7c69] hover:shadow-[0_28px_70px_rgba(88,139,118,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76]"
        >
          <span className="mr-2.5 text-base">💬</span>
          {slide.primaryLabel}
          <motion.span
            className="ml-3"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            →
          </motion.span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href={slide.secondaryHref}
          className="group inline-flex items-center justify-center rounded-full border border-[#588b76]/25 bg-white/60 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#588b76] shadow-sm backdrop-blur transition-all duration-400 hover:border-[#588b76]/40 hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(30,42,37,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76]"
        >
          {slide.secondaryLabel}
          <motion.span
            className="ml-3"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
