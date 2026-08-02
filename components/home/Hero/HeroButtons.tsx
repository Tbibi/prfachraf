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
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href={`https://wa.me/212600000000?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 w-full max-w-full items-center justify-center rounded-full bg-[#588b76] px-4 py-3 text-center text-[0.68rem] font-semibold uppercase leading-tight tracking-[0.12em] text-white shadow-[0_20px_50px_rgba(88,139,118,0.25)] transition-all duration-400 hover:bg-[#4d7c69] hover:shadow-[0_28px_70px_rgba(88,139,118,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76] sm:w-auto sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
        >
          <span className="mr-2 text-sm sm:mr-2.5 sm:text-base">💬</span>
          {slide.primaryLabel}
          <motion.span
            className="ml-2 sm:ml-3"
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
          className="group inline-flex min-h-11 w-full max-w-full items-center justify-center rounded-full border border-[#588b76]/25 bg-white/60 px-4 py-3 text-center text-[0.68rem] font-semibold uppercase leading-tight tracking-[0.12em] text-[#588b76] shadow-sm backdrop-blur transition-all duration-400 hover:border-[#588b76]/40 hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(30,42,37,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76] sm:w-auto sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
        >
          {slide.secondaryLabel}
          <motion.span
            className="ml-2 sm:ml-3"
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
