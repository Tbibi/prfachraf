import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "en", "ar"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "fr";

export const localeDirection: Record<AppLocale, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  ar: "rtl",
};

export const localeNames: Record<AppLocale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: true,
  pathnames: {
    "/": "/",
    "/perfumes": {
      fr: "/parfums",
      en: "/perfumes",
      ar: "/perfumes",
    },
    "/perfumes/[slug]": {
      fr: "/parfums/[slug]",
      en: "/perfumes/[slug]",
      ar: "/perfumes/[slug]",
    },
    "/collections": "/collections",
    "/collections/[[...slug]]": "/collections/[[...slug]]",
    "/about": {
      fr: "/a-propos",
      en: "/about",
      ar: "/about",
    },
    "/contact": "/contact",
    "/cart": {
      fr: "/panier",
      en: "/cart",
      ar: "/cart",
    },
    "/checkout": {
      fr: "/commande",
      en: "/checkout",
      ar: "/checkout",
    },
  },
});
