"use client";

import { motion } from "framer-motion";

const whatsappMessage = encodeURIComponent(
  "Bonjour Achraf Parfums, je souhaite recevoir des conseils pour choisir un parfum."
);

export default function WhatsAppCTA() {
  return (
    <section className="bg-[var(--color-background)] px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-[#1e2a25] px-6 py-14 shadow-[0_30px_90px_rgba(30,42,37,0.22)] sm:px-10 sm:py-16 lg:px-16"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(88,139,118,0.55),transparent_32%),radial-gradient(circle_at_84%_20%,rgba(246,246,223,0.18),transparent_30%),linear-gradient(135deg,#1e2a25,#24352f_52%,#588b76)]"
          aria-hidden="true"
        />
        <div
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl"
          aria-hidden="true"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f6f6df]">
              Conseil personnalisé
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Besoin d&apos;un parfum qui vous ressemble ?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72 sm:text-lg">
              Écrivez-nous sur WhatsApp et recevez une recommandation adaptée à
              votre style, votre budget et l&apos;occasion.
            </p>
          </div>

          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#f6f6df] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25] shadow-[0_18px_45px_rgba(246,246,223,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_24px_60px_rgba(246,246,223,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6f6df]"
          >
            Commander sur WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
