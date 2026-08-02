import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ProductImageGallery from "@/components/products/ProductImageGallery/ProductImageGallery";
import ProductDetails from "@/components/products/ProductDetails/ProductDetails";
import ProductTabs from "@/components/products/ProductTabs/ProductTabs";
import SimilarProducts from "@/components/products/SimilarProducts/SimilarProducts";
import JsonLd from "@/components/seo/JsonLd";
import SeoBreadcrumb from "@/components/seo/SeoBreadcrumb";
import { perfumes } from "@/components/perfumes/ProductGrid/products";
import {
  generateNotFoundMetadata,
  generateProductMetadata,
} from "@/lib/seo/generateMetadata";
import { createProductBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { createProductSchema } from "@/lib/seo/jsonld";

type PerfumeProductPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: PerfumeProductPageProps) {
  const { locale, slug } = await params;
  const product = perfumes.find((item) => item.id === slug);

  if (!product) {
    return generateNotFoundMetadata(locale);
  }

  return generateProductMetadata(product, locale);
}

export default async function PerfumeProductPage({ params }: PerfumeProductPageProps) {
  const { slug } = await params;
  const product = perfumes.find((item) => item.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <JsonLd data={createProductSchema(product)} />
      <Navbar />
      <main>
        <section className="px-4 pt-8 pb-20 sm:px-6 sm:pt-12 sm:pb-24 lg:px-8 lg:pt-16 lg:pb-32">
          <div className="mx-auto max-w-[1440px]">
            <SeoBreadcrumb items={createProductBreadcrumbs(product)} />

            <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <ProductImageGallery product={product} />
              <ProductDetails product={product} />
            </div>

            <div className="mt-16">
              <ProductTabs product={product} />
            </div>

            <div className="mt-20">
              <SimilarProducts currentProduct={product} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
