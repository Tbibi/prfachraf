"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import { heroSlides } from "./heroSlides";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setTimeout(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused]);

  function goToSlide(index: number) {
    if (index === activeIndex) {
      return;
    }

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function goToPrevious() {
    setDirection(-1);
    setActiveIndex((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  }

  function goToNext() {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  }

  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative isolate overflow-hidden px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-32"
    >
      <motion.div
        key={activeSlide.id}
        className="absolute inset-0 -z-20"
        style={{ background: activeSlide.background }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        key={`${activeSlide.id}-accent`}
        className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl lg:h-[34rem] lg:w-[34rem]"
        style={{ backgroundColor: `${activeSlide.accent}22` }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.08 }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_minmax(8.5rem,42vw)] items-center gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.85fr)] sm:gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <HeroContent slide={activeSlide} direction={direction} />
        <HeroImage
          slide={activeSlide}
          slides={heroSlides}
          activeIndex={activeIndex}
          direction={direction}
          onSelectSlide={goToSlide}
        />
      </div>

      <div className="mx-auto mt-6 flex max-w-[1440px] flex-col gap-4 sm:mt-8 sm:gap-6 lg:mt-8">
        <div className="h-px overflow-hidden rounded-full bg-[#1e2a25]/10">
          <motion.div
            key={activeSlide.id}
            className="h-full rounded-full"
            style={{ backgroundColor: activeSlide.accent }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </div>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div className="flex items-center gap-5">
            <div className="font-serif text-lg font-semibold text-[#1e2a25]">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-2 text-[var(--color-muted)]">/</span>
              {String(heroSlides.length).padStart(2, "0")}
            </div>

            <div className="flex items-center gap-3" aria-label="Navigation des slides">
              {heroSlides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Afficher ${slide.title}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76] ${
                      isActive ? "w-10" : "w-3 bg-[#1e2a25]/20 hover:bg-[#588b76]/60"
                    }`}
                    style={isActive ? { backgroundColor: slide.accent } : undefined}
                  />
                );
              })}
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#588b76]/25 bg-white/60 text-[#588b76] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76]"
              aria-label="Slide précédent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#588b76] text-white shadow-[0_14px_34px_rgba(88,139,118,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4d7c69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76]"
              aria-label="Slide suivant"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
