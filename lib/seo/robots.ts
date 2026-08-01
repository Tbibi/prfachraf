import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "./seo";

export function generateRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/private"],
    },
    sitemap: getAbsoluteUrl("/sitemap.xml"),
  };
}
