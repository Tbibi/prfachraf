import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, Playfair_Display, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { ToastProvider } from "@/components/ui/Toast/Toast";
import MiniCart from "@/components/cart/MiniCart/MiniCart";
import FloatingCart from "@/components/cart/FloatingCart/FloatingCart";
import JsonLd from "@/components/seo/JsonLd";
import {
  createOrganizationSchema,
  createWebsiteSchema,
} from "@/lib/seo/jsonld";
import { localeDirection, locales, routing } from "@/i18n/routing";
import { createSeoMetadata } from "@/lib/seo/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Seo" });

  return createSeoMetadata({
    title: t("homeTitle"),
    description: t("homeDescription"),
    path: `/${locale}`,
    locale,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const direction = localeDirection[locale as keyof typeof localeDirection];

  return (
    <html
      lang={locale}
      dir={direction}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfairDisplay.variable} ${notoSansArabic.variable} h-full antialiased`}
    >
      <body
        className={`${
          locale === "ar" ? notoSansArabic.className : inter.className
        } min-h-full flex flex-col`}
        suppressHydrationWarning={true}
      >
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={[createOrganizationSchema(), createWebsiteSchema()]} />
          {children}
          <ToastProvider />
          <MiniCart />
          <FloatingCart />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
