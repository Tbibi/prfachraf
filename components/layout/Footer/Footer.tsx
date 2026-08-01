"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/parfums", label: "Parfums" },
  { href: "/collections", label: "Collections" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://www.facebook.com/", label: "Facebook" },
  { href: "https://www.tiktok.com/", label: "TikTok" },
];

const whatsappMessage = encodeURIComponent(
  "Bonjour Achraf Parfums, je souhaite passer une commande."
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#17231f] px-4 pt-10 text-white sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(88,139,118,0.42),transparent_30%),radial-gradient(circle_at_84%_0%,rgba(246,246,223,0.14),transparent_28%)]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[1440px]"
      >
        <div className="grid gap-7 border-b border-white/10 pb-8 sm:gap-10 sm:pb-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr] lg:gap-12 lg:pb-14">
          <div>
            <Link
              href="/"
              aria-label="Achraf Parfums accueil"
              className="inline-flex flex-col text-[#f6f6df] transition-opacity duration-300 hover:opacity-80"
            >
              <span className="font-serif text-3xl font-semibold leading-none tracking-[0.04em] sm:text-4xl">
                Achraf
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-[0.5em]">
                PARFUMS
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/68 sm:mt-6 sm:leading-7">
              Une maison de parfums premium au Maroc, dédiée aux fragrances
              authentiques, élégantes et mémorables.
            </p>
            <a
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#588b76] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(88,139,118,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f6f6df] hover:text-[#17231f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6f6df] sm:mt-8 sm:px-6 sm:py-3"
            >
              WhatsApp
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6f6df]">
              Liens
            </h2>
            <nav className="mt-4 flex flex-col gap-2 sm:mt-6 sm:gap-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/66 transition-colors duration-300 hover:text-[#f6f6df]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6f6df]">
              Contact
            </h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-white/66 sm:mt-6 sm:space-y-3">
              <p>Maroc</p>
              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors duration-300 hover:text-[#f6f6df]"
              >
                WhatsApp commande
              </a>
              <a
                href="mailto:contact@achrafparfums.ma"
                className="block transition-colors duration-300 hover:text-[#f6f6df]"
              >
                contact@achrafparfums.ma
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6f6df]">
              Social
            </h2>
            <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/66 transition-colors duration-300 hover:text-[#f6f6df]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-5 text-xs text-white/48 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-7">
          <p>© 2026 Achraf Parfums. Tous droits réservés.</p>
          <p>Parfums premium au Maroc.</p>
        </div>
      </motion.div>
    </footer>
  );
}
