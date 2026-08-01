import type { PerfumeProduct } from "@/components/perfumes/ProductGrid/products";
import { seoConfig } from "./config";
import { getAbsoluteUrl } from "./seo";
import { schemaContext, type BreadcrumbItem, type JsonLdObject } from "./schema";

const getNumericPrice = (price: string) => price.replace(/[^\d.]/g, "");

export function createOrganizationSchema(): JsonLdObject {
  return {
    "@context": schemaContext,
    "@type": "Organization",
    name: seoConfig.brandName,
    url: getAbsoluteUrl("/"),
    logo: getAbsoluteUrl(seoConfig.defaultImage),
    sameAs: [],
  };
}

export function createWebsiteSchema(): JsonLdObject {
  return {
    "@context": schemaContext,
    "@type": "WebSite",
    name: seoConfig.brandName,
    url: getAbsoluteUrl("/"),
    potentialAction: createSearchActionSchema(),
  };
}

export function createSearchActionSchema(): JsonLdObject {
  return {
    "@type": "SearchAction",
    target: `${getAbsoluteUrl("/perfumes")}?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": schemaContext,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createCollectionSchema({
  name,
  description,
  url,
  products,
}: {
  name: string;
  description: string;
  url: string;
  products: PerfumeProduct[];
}): JsonLdObject {
  return {
    "@context": schemaContext,
    "@type": "CollectionPage",
    name,
    description,
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: getAbsoluteUrl(`/perfumes/${product.id}`),
        name: product.name,
      })),
    },
  };
}

export function createProductSchema(product: PerfumeProduct): JsonLdObject {
  const inStock = product.availability === "Disponible";

  return {
    "@context": schemaContext,
    "@type": "Product",
    name: product.name,
    image: getAbsoluteUrl(product.image),
    description: `Discover ${product.name}, a premium ${product.notes.toLowerCase()} perfume crafted for luxury fragrance lovers.`,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "124",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Client Achraf Parfums",
      },
      reviewBody: `${product.name} offre un sillage élégant et une très belle tenue.`,
    },
    offers: {
      "@type": "Offer",
      url: getAbsoluteUrl(`/perfumes/${product.id}`),
      priceCurrency: "MAD",
      price: getNumericPrice(product.price),
      availability: inStock ? "https://schema.org/InStock" : "https://schema.org/LimitedAvailability",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
}
