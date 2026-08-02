"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const socialLinks = [
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://www.facebook.com/", label: "Facebook" },
  { href: "https://www.tiktok.com/", label: "TikTok" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");

  const footerLinks = [
    { href: "/" as const, label: tNav("home") },
    { href: "/perfumes" as const, label: tNav("perfumes") },
    { href: "/collections" as const, label: tNav("collections") },
    { href: "/about" as const, label: tNav("about") },
    { href: "/contact" as const, label: tNav("contact") },
  ];

  const whatsappMessage = encodeURIComponent(t("whatsappMessage"));

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
              aria-label={t("homeAria")}
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
              {t("description")}
            </p>
            <a
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#588b76] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(88,139,118,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f6f6df] hover:text-[#17231f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6f6df] sm:mt-8 sm:px-6 sm:py-3"
            >
              {t("whatsapp")}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6f6df]">
              {t("links")}
            </h2>
            <nav
              className="mt-4 flex flex-col gap-2 sm:mt-6 sm:gap-3"
              aria-label={t("links")}
            >
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
              {t("contact")}
            </h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-white/66 sm:mt-6 sm:space-y-3">
              <p>Maroc</p>
              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors duration-300 hover:text-[#f6f6df]"
              >
                {t("whatsappOrder")}
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
              {t("social")}
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
          <p>{t("copyright", { year: 2026 })}</p>
        </div>
      </motion.div>
    </footer>
  );
}
