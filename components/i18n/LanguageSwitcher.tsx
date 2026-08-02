"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, locales, type AppLocale } from "@/i18n/routing";

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile";
};

export default function LanguageSwitcher({
  variant = "desktop",
}: LanguageSwitcherProps) {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(nextLocale: AppLocale) {
    if (nextLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      // Preserve the current localized pathname when switching locales,
      // including dynamic routes (e.g. /perfumes/[slug]).
      router.replace(pathname as Parameters<typeof router.replace>[0], {
        locale: nextLocale,
      });
      setIsOpen(false);
    });
  }

  if (variant === "mobile") {
    return (
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#588b76]">
          {t("label")}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {locales.map((item) => {
            const isActive = item === locale;

            return (
              <button
                key={item}
                type="button"
                disabled={isPending}
                onClick={() => switchLocale(item)}
                className={`rounded-xl border px-3 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-[#588b76] bg-[#588b76]/10 text-[#588b76]"
                    : "border-[#1e2a25]/10 bg-white/70 text-[#1e2a25] hover:border-[#588b76]/30"
                }`}
              >
                {localeNames[item]}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative hidden md:block">
      <button
        type="button"
        aria-label={t("label")}
        aria-expanded={isOpen}
        disabled={isPending}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-11 items-center gap-2 rounded-full border border-[#588b76]/20 bg-white/70 px-4 text-sm font-medium text-[#588b76] shadow-sm backdrop-blur transition-all duration-300 hover:border-[#588b76]/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76]"
      >
        <span className="uppercase tracking-[0.14em]">{locale}</span>
        <span aria-hidden="true" className="text-xs">
          ▾
        </span>
      </button>

      {isOpen ? (
        <div className="absolute end-0 top-full z-50 mt-2 min-w-[10rem] overflow-hidden rounded-2xl border border-[#1e2a25]/10 bg-white/95 py-2 shadow-[0_18px_45px_rgba(30,42,37,0.12)] backdrop-blur-xl">
          {locales.map((item) => {
            const isActive = item === locale;

            return (
              <button
                key={item}
                type="button"
                disabled={isPending}
                onClick={() => switchLocale(item)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors duration-200 ${
                  isActive
                    ? "bg-[#588b76]/10 text-[#588b76]"
                    : "text-[#1e2a25] hover:bg-[#588b76]/5"
                }`}
              >
                <span>{localeNames[item]}</span>
                <span className="uppercase tracking-[0.14em] text-xs opacity-70">
                  {item}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
