import type { Metadata } from "next";
import { seoConfig } from "./config";

type RobotsConfig = {
  index?: boolean;
  follow?: boolean;
};

export type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: readonly string[];
  image?: string;
  type?: "website" | "article";
  robots?: RobotsConfig;
};

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

export function getAbsoluteUrl(path = "/") {
  const baseUrl = seoConfig.siteUrl.replace(/\/$/, "");

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path === "/" ? "" : `/${trimSlashes(path)}`;
  return `${baseUrl}${normalizedPath}`;
}

export function getSeoTitle(title: string) {
  return title === seoConfig.siteName ? title : `${title} | ${seoConfig.siteName}`;
}

export function createSeoMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = seoConfig.defaultImage,
  type = "website",
  robots = { index: true, follow: true },
}: SeoInput): Metadata {
  const canonical = getAbsoluteUrl(path);
  const imageUrl = getAbsoluteUrl(image);
  const mergedKeywords = [...seoConfig.defaultKeywords, ...keywords];

  return {
    metadataBase: new URL(seoConfig.siteUrl),
    title: getSeoTitle(title),
    description,
    keywords: mergedKeywords,
    authors: [seoConfig.author],
    creator: seoConfig.creator,
    publisher: seoConfig.publisher,
    alternates: {
      canonical,
    },
    robots: {
      index: robots.index ?? true,
      follow: robots.follow ?? true,
      googleBot: {
        index: robots.index ?? true,
        follow: robots.follow ?? true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: getSeoTitle(title),
      description,
      url: canonical,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${seoConfig.siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
      title: getSeoTitle(title),
      description,
      images: [imageUrl],
    },
  };
}
