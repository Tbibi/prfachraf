"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div
      id="map"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-6"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#588b76]">
          Localisation
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#1e2a25] sm:text-4xl">
          Trouvez-nous
        </h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Visitez notre boutique pour découvrir nos parfums et bénéficier de conseils personnalisés.
        </p>
      </div>

      <div className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/60 backdrop-blur-sm overflow-hidden">
        {/* Map Container */}
        <div className="relative h-80 bg-gradient-to-br from-[#588b76]/10 to-[#f6f6df]/20">
          {/* Mock Google Maps Embed */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">🗺️</div>
              <div>
                <h3 className="font-semibold text-[#1e2a25] mb-2">Google Maps</h3>
                <p className="text-sm text-[var(--color-muted)] mb-4">
                  123 Avenue Mohammed V<br />
                  Casablanca, Maroc 20000
                </p>
                <a
                  href="https://maps.google.com/?q=33.5731,-7.5898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#588b76] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#4a7563] hover:shadow-lg"
                >
                  <span>📍</span>
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>
          
          {/* Interactive Elements */}
          <div className="absolute top-4 right-4 space-y-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              aria-label="Zoom avant"
            >
              +
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              aria-label="Zoom arrière"
            >
              −
            </button>
          </div>

          {/* Location Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
            <div className="flex flex-col items-center">
              <div className="animate-bounce">
                <div className="h-8 w-8 rounded-full bg-[#588b76] border-4 border-white shadow-lg flex items-center justify-center text-white text-sm font-bold">
                  📍
                </div>
              </div>
              <div className="mt-2 rounded-lg bg-white px-3 py-2 shadow-lg">
                <p className="text-xs font-medium text-[#1e2a25] whitespace-nowrap">
                  Achraf PARFUMS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                🚗
              </div>
              <div>
                <h4 className="font-medium text-[#1e2a25] text-sm">Parking</h4>
                <p className="text-xs text-[var(--color-muted)]">Gratuit</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                🚇
              </div>
              <div>
                <h4 className="font-medium text-[#1e2a25] text-sm">Métro</h4>
                <p className="text-xs text-[var(--color-muted)]">Casa-Port</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                🚌
              </div>
              <div>
                <h4 className="font-medium text-[#1e2a25] text-sm">Bus</h4>
                <p className="text-xs text-[var(--color-muted)]">Ligne 1, 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}