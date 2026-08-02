"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Logo from "./Logo";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";

export default function MobileMenu() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  const menuItems = [
    { href: "/" as const, label: t("home") },
    { href: "/perfumes" as const, label: t("perfumes") },
    { href: "/collections" as const, label: t("collections") },
    { href: "/about" as const, label: t("about") },
    { href: "/contact" as const, label: t("contact") },
  ];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? t("closeMenu") : t("openMenu")}
        aria-controls={menuId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#588b76]/20 bg-white/70 text-[#588b76] shadow-sm backdrop-blur transition duration-300 hover:border-[#588b76]/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76]"
      >
        <span className="sr-only">{isOpen ? t("closeMenu") : t("openMenu")}</span>
        <span className="relative h-4 w-5" aria-hidden="true">
          <span
            className={`absolute start-0 top-0 h-px w-5 bg-current transition duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute start-0 top-2 h-px w-5 bg-current transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute start-0 top-4 h-px w-5 bg-current transition duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label={t("openMenu")}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[10000] h-[100dvh] w-[100vw] overflow-y-auto overscroll-contain bg-[#fffef7] backdrop-blur-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="flex min-h-[100dvh] w-full flex-col bg-[#fffef7]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#588b76]/10 px-6 py-6">
                <div className="origin-start scale-90">
                  <Logo />
                </div>
                <motion.button
                  type="button"
                  aria-label={t("closeMenu")}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#588b76]/20 bg-white/80 text-[#588b76] shadow-sm backdrop-blur transition-all duration-300 hover:border-[#588b76] hover:bg-[#588b76] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76]"
                >
                  <span className="relative h-5 w-5" aria-hidden="true">
                    <span className="absolute start-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 rounded-full bg-current" />
                    <span className="absolute start-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
                  </span>
                </motion.button>
              </div>

              <div className="flex flex-1 flex-col px-6 py-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mb-8"
                >
                  <div className="relative">
                    <input
                      type="search"
                      placeholder={t("searchPlaceholder")}
                      className="h-14 w-full rounded-2xl border border-[#588b76]/20 bg-white/80 px-6 pe-14 text-sm text-[#1e2a25] placeholder:text-[var(--color-muted)] focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10 backdrop-blur"
                    />
                    <span
                      className="pointer-events-none absolute end-5 top-1/2 -translate-y-1/2 text-[#588b76]"
                      aria-hidden="true"
                    >
                      🔍
                    </span>
                  </div>
                </motion.div>

                <nav className="flex-1" aria-label={t("openMenu")}>
                  <div className="space-y-2">
                    {menuItems.map((item, index) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname === item.href ||
                            pathname.startsWith(`${item.href}/`);

                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.15 + index * 0.05,
                            duration: 0.4,
                          }}
                        >
                          <Link
                            href={item.href}
                            aria-current={isActive ? "page" : undefined}
                            onClick={() => setIsOpen(false)}
                            className={`group flex items-center justify-between rounded-2xl px-6 py-5 text-lg font-medium tracking-[0.08em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76] ${
                              isActive
                                ? "bg-[#588b76] text-white shadow-lg"
                                : "text-[#1e2a25] hover:bg-[#588b76]/10 hover:text-[#588b76]"
                            }`}
                          >
                            <span>{item.label}</span>
                            <motion.span
                              className={`text-xl ${
                                isActive
                                  ? "text-white"
                                  : "text-[#588b76]/60 group-hover:text-[#588b76]"
                              }`}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                              aria-hidden="true"
                            >
                              →
                            </motion.span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="mt-8"
                >
                  <LanguageSwitcher variant="mobile" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mt-8 space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href="/cart"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-3 rounded-2xl border border-[#588b76]/20 bg-white/80 py-4 text-sm font-medium text-[#588b76] backdrop-blur transition-all duration-300 hover:bg-[#588b76]/10 hover:border-[#588b76]/40"
                    >
                      <span className="text-lg">🛍️</span>
                      <span>{t("cart")}</span>
                    </Link>
                    <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#588b76]/20 bg-white/80 py-4 text-sm font-medium text-[#588b76] backdrop-blur">
                      <span className="text-lg">❤️</span>
                      <span>{t("wishlist")}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    href="/perfumes"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#588b76] py-5 text-base font-semibold text-white shadow-[0_16px_40px_rgba(88,139,118,0.25)] transition-all duration-300 hover:bg-[#4d7c69] hover:shadow-[0_20px_50px_rgba(88,139,118,0.35)] active:scale-[0.98]"
                  >
                    <span className="text-lg">✨</span>
                    <span>{t("viewPerfumes")}</span>
                    <span className="text-lg">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
