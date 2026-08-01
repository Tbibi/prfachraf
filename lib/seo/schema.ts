export const schemaContext = "https://schema.org";

export type JsonLdObject = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type ProductReview = {
  ratingValue: number;
  reviewCount: number;
};
