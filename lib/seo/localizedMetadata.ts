import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { locales, type AppLocale } from "@/i18n/routing";
import { createSeoMetadata, getAbsoluteUrl } from "./seo";

type SeoPageKey =
  | "home"
  | "perfumes"
  | "collections"
  | "about"
  | "contact"
  | "cart"
  | "checkout";

const seoKeyMap: Record<
  SeoPageKey,
  { title: string; description: string; pathname: Parameters<typeof getPathname>[0]["href"] }
> = {
  home: {
    title: "homeTitle",
    description: "homeDescription",
    pathname: "/",
  },
  perfumes: {
    title: "perfumesTitle",
    description: "perfumesDescription",
    pathname: "/perfumes",
  },
  collections: {
    title: "collectionsTitle",
    description: "collectionsDescription",
    pathname: "/collections",
  },
  about: {
    title: "aboutTitle",
    description: "aboutDescription",
    pathname: "/about",
  },
  contact: {
    title: "contactTitle",
    description: "contactDescription",
    pathname: "/contact",
  },
  cart: {
    title: "cartTitle",
    description: "cartDescription",
    pathname: "/cart",
  },
  checkout: {
    title: "checkoutTitle",
    description: "checkoutDescription",
    pathname: "/checkout",
  },
};

export async function generateLocalizedPageMetadata(
  locale: string,
  page: SeoPageKey
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Seo" });
  const config = seoKeyMap[page];
  const localizedPath = getPathname({
    locale: locale as AppLocale,
    href: config.pathname,
  });

  const languages = Object.fromEntries(
    locales.map((item) => [
      item,
      getAbsoluteUrl(
        getPathname({
          locale: item,
          href: config.pathname,
        })
      ),
    ])
  );

  return createSeoMetadata({
    title: t(config.title),
    description: t(config.description),
    path: localizedPath,
    locale,
    languages,
    robots:
      page === "cart" || page === "checkout"
        ? { index: false, follow: false }
        : { index: true, follow: true },
  });
}
