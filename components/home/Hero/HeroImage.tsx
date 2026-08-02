"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { HeroSlide } from "./heroSlides";

type HeroImageProps = {
  slide: HeroSlide;
  slides: HeroSlide[];
  activeIndex: number;
  direction: number;
  onSelectSlide: (index: number) => void;
};

export default function HeroImage({
  slide,
  slides,
  activeIndex,
  direction,
  onSelectSlide,
}: HeroImageProps) {
  const t = useTranslations("Hero");
  const bottleTitle = t(`slides.${slide.id}.bottleTitle`);
  const bottleCaption = t(`slides.${slide.id}.bottleCaption`);
  const imageBadge = t(`slides.${slide.id}.imageBadge`);

  return (
    <div
      className="relative mx-auto w-full max-w-[11rem] sm:max-w-md lg:max-w-2xl"
      aria-label={bottleTitle}
    >
      <div
        className="absolute inset-x-3 top-8 h-32 rounded-full blur-3xl sm:inset-x-8 sm:top-10 sm:h-72"
        style={{ backgroundColor: `${slide.accent}28` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-2 bottom-6 h-28 rounded-full blur-3xl sm:inset-x-4 sm:bottom-8 sm:h-52"
        style={{ backgroundColor: slide.accentSoft }}
        aria-hidden="true"
      />

      <div className="relative min-h-[15rem] overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/35 p-2.5 shadow-[0_20px_55px_rgba(30,42,37,0.12)] backdrop-blur-2xl sm:min-h-[30rem] sm:rounded-[2.5rem] sm:p-6 sm:shadow-[0_30px_90px_rgba(30,42,37,0.14)] lg:min-h-[42rem] lg:p-8">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.75), ${slide.accentSoft}52, ${slide.accent}1f)`,
          }}
          aria-hidden="true"
        />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 72 : -72, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction > 0 ? -48 : 48, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, -1.5, 0.8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto aspect-[9/11.5] w-full max-w-[9rem] overflow-hidden rounded-[1.25rem] sm:max-w-[19rem] sm:rounded-[2rem] lg:max-w-[24rem]"
            >
              <Image
                src={slide.image}
                alt={bottleTitle}
                fill
                priority
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 34vw, 42vw"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                className="object-cover drop-shadow-[0_32px_42px_rgba(30,42,37,0.18)]"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute start-3 top-3 rounded-xl border border-white/70 bg-white/45 px-2.5 py-2 shadow-[0_18px_45px_rgba(30,42,37,0.08)] backdrop-blur-xl sm:start-8 sm:top-10 sm:rounded-2xl sm:px-4 sm:py-3">
          <p
            className="text-[0.52rem] font-semibold uppercase tracking-[0.16em] sm:text-[0.65rem] sm:tracking-[0.24em]"
            style={{ color: slide.accent }}
          >
            {imageBadge}
          </p>
          <p className="mt-1 font-serif text-sm font-semibold text-[#1e2a25] sm:mt-2 sm:text-xl">
            {bottleTitle}
          </p>
          <p className="mt-0.5 text-[0.6rem] text-[var(--color-muted)] sm:mt-1 sm:text-xs">
            {bottleCaption}
          </p>
        </div>

        <div className="absolute inset-x-2 bottom-2 flex gap-1.5 sm:inset-x-6 sm:bottom-6 sm:gap-2">
          {slides.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.id}
                type="button"
                aria-label={t(`slides.${item.id}.title`)}
                aria-current={isActive ? "true" : undefined}
                onClick={() => onSelectSlide(index)}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  isActive ? "opacity-100" : "bg-[#1e2a25]/15 opacity-70"
                }`}
                style={isActive ? { backgroundColor: item.accent } : undefined}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
