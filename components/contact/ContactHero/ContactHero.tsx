"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#588b76]/5 via-white to-[#f6f6df]/20 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(88,139,118,0.08),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(246,246,223,0.12),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px]">
        <Breadcrumb 
          items={[
            { label: "Accueil", href: "/" },
            { label: "Contact", href: "#", current: true },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#588b76]">
            Nous contacter
          </p>
          
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#1e2a25] sm:text-6xl lg:text-8xl">
            Une question ?<br />
            <span className="text-[#588b76]">Parlons-en</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl lg:leading-9">
            Notre équipe de conseillers en parfumerie est à votre disposition pour vous accompagner 
            dans le choix de votre fragrance idéale. Contactez-nous par le moyen qui vous convient le mieux.
          </p>
        </motion.div>

        {/* Quick Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-4xl"
        >
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-[#1e2a25]/10 bg-white/60 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:border-[#588b76]/30 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
              💬
            </div>
            <div>
              <h3 className="font-semibold text-[#1e2a25] group-hover:text-[#588b76] transition-colors duration-300">
                WhatsApp
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Réponse rapide
              </p>
            </div>
          </a>

          <a
            href="tel:+212600000000"
            className="group flex items-center gap-4 rounded-2xl border border-[#1e2a25]/10 bg-white/60 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:border-[#588b76]/30 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
              📞
            </div>
            <div>
              <h3 className="font-semibold text-[#1e2a25] group-hover:text-[#588b76] transition-colors duration-300">
                Téléphone
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Conseil personnalisé
              </p>
            </div>
          </a>

          <a
            href="mailto:contact@achrafparfums.ma"
            className="group flex items-center gap-4 rounded-2xl border border-[#1e2a25]/10 bg-white/60 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:border-[#588b76]/30 hover:shadow-lg hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
              ✉️
            </div>
            <div>
              <h3 className="font-semibold text-[#1e2a25] group-hover:text-[#588b76] transition-colors duration-300">
                Email
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Réponse sous 24h
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}