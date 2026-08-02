"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import FiltersDrawer from "@/components/perfumes/FiltersDrawer/FiltersDrawer";
import MobileHeader from "@/components/perfumes/MobileHeader/MobileHeader";
import DesktopFilters from "@/components/perfumes/DesktopFilters/DesktopFilters";
import Pagination from "@/components/perfumes/Pagination/Pagination";
import ProductGrid from "@/components/perfumes/ProductGrid/ProductGrid";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Container from "@/components/ui/Container/Container";
import JsonLd from "@/components/seo/JsonLd";
import { perfumes } from "@/components/perfumes/ProductGrid/products";
import { seoCollections } from "@/lib/seo/config";
import { createCollectionSchema } from "@/lib/seo/jsonld";
import { getAbsoluteUrl } from "@/lib/seo/seo";

type PerfumeFilters = {
  brands: string[];
  maxPrice: number;
  olfactiveFamilies: string[];
  genders: string[];
};

type PerfumesPageProps = {
  initialCategory: string;
  initialSort: string;
};

const emptyFilters: PerfumeFilters = {
  brands: [],
  maxPrice: 500,
  olfactiveFamilies: [],
  genders: [],
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function productMatchesFamily(product: (typeof perfumes)[number], family: string) {
  const normalizedFamily = normalizeText(family);
  const searchable = normalizeText(
    `${product.name} ${product.brand} ${product.category} ${product.badge} ${product.notes}`
  );

  if (normalizedFamily === "boise") {
    return /bois|oud|cedre|vetiver|patchouli|encens|cuir/.test(searchable);
  }

  if (normalizedFamily === "oriental") {
    return /oriental|oud|ambre|epice|vanille|tonka|caramel/.test(searchable);
  }

  if (normalizedFamily === "niche") {
    return /niche|premium|luxe|iconique|atelier|royal|prive|nocturne/.test(searchable);
  }

  return searchable.includes(normalizedFamily);
}

function getFiltersFromCategory(category: string): PerfumeFilters {
  const nextFilters: PerfumeFilters = {
    ...emptyFilters,
    brands: [],
    olfactiveFamilies: [],
    genders: [],
  };
  const normalizedCategory = normalizeText(category);

  if (normalizedCategory === "homme") {
    nextFilters.genders = ["Homme"];
  }

  if (normalizedCategory === "femme") {
    nextFilters.genders = ["Femme"];
  }

  if (normalizedCategory === "oriental") {
    nextFilters.olfactiveFamilies = ["Oriental"];
  }

  if (normalizedCategory === "boise") {
    nextFilters.olfactiveFamilies = ["Boisé"];
  }

  if (normalizedCategory === "niche") {
    nextFilters.olfactiveFamilies = ["Niche"];
  }

  return nextFilters;
}

function getSortFromParam(sort: string) {
  if (sort === "new" || sort === "newest") {
    return "newest";
  }

  if (sort === "bestseller") {
    return "bestseller";
  }

  return "recommended";
}

function getCollectionKeyFromParams(category: string, sort: string) {
  const normalizedCategory = normalizeText(category);

  if (normalizedCategory in seoCollections) {
    return normalizedCategory as keyof typeof seoCollections;
  }

  if (sort === "bestseller" || sort === "newest") {
    return sort as keyof typeof seoCollections;
  }

  if (sort === "new") {
    return "newest";
  }

  return null;
}

export default function PerfumesPage({ initialCategory, initialSort }: PerfumesPageProps) {
  const t = useTranslations("Perfumes");
  const tCommon = useTranslations("Common");
  const router = useRouter();
  const categoryParam = initialCategory;
  const sortParam = initialSort;
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(() => getSortFromParam(sortParam));
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState(() => getFiltersFromCategory(categoryParam));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.brands.length > 0) count += filters.brands.length;
    if (filters.maxPrice < 500) count += 1;
    if (filters.olfactiveFamilies.length > 0) count += filters.olfactiveFamilies.length;
    if (filters.genders.length > 0) count += filters.genders.length;
    return count;
  }, [filters]);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let filtered = perfumes.filter((product) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.notes.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      // Price filter
      const productPrice = parseInt(product.price.replace(/\D/g, ""));
      if (productPrice > filters.maxPrice) {
        return false;
      }

      // Olfactive family filter (simplified - matches against notes)
      if (filters.olfactiveFamilies.length > 0) {
        const hasMatchingFamily = filters.olfactiveFamilies.some((family) =>
          productMatchesFamily(product, family)
        );
        if (!hasMatchingFamily) return false;
      }

      // Gender filter
      if (filters.genders.length > 0 && !filters.genders.includes(product.category)) {
        return false;
      }

      return true;
    });

    if (sortBy === "newest") {
      filtered = filtered.filter((product) => product.badge === "Nouveau");
    }

    if (sortBy === "bestseller") {
      filtered = filtered.filter((product) =>
        ["Best Seller", "Luxe", "Iconique", "Premium"].includes(product.badge)
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        filtered = filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/\D/g, ""));
          const priceB = parseInt(b.price.replace(/\D/g, ""));
          return priceA - priceB;
        });
        break;
      case "price-desc":
        filtered = filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/\D/g, ""));
          const priceB = parseInt(b.price.replace(/\D/g, ""));
          return priceB - priceA;
        });
        break;
      case "recommended":
      default:
        // Keep original order
        break;
    }

    return filtered;
  }, [searchQuery, sortBy, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const activeCollectionKey = getCollectionKeyFromParams(categoryParam, sortParam);
  const collectionJsonLd = activeCollectionKey
    ? createCollectionSchema({
        name: seoCollections[activeCollectionKey].name,
        description: seoCollections[activeCollectionKey].description,
        url: getAbsoluteUrl(seoCollections[activeCollectionKey].path),
        products: filteredProducts,
      })
    : null;

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleFiltersChange = (nextFilters: PerfumeFilters) => {
    setFilters(nextFilters);
    setCurrentPage(1);
  };

  const handleApplyFilters = () => {
    setIsFiltersOpen(false);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSortBy("recommended");
    setFilters(emptyFilters);
    setCurrentPage(1);
    router.replace("/perfumes", { scroll: false });
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {collectionJsonLd ? <JsonLd data={collectionJsonLd} /> : null}
      <Navbar />
      <main>
        {/* Hero Section with Breadcrumb */}
        <section className="relative overflow-hidden bg-[var(--color-background)] px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8 lg:pb-16">
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(88,139,118,0.12),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(246,246,223,0.8),transparent_32%)]"
            aria-hidden="true"
          />

          <Container>
            <Breadcrumb
              items={[
                { label: tCommon("home"), href: "/" },
                { label: t("breadcrumbPerfumes"), href: "#", current: true },
              ]}
            />

            <div className="mt-6 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#588b76]">
                {t("eyebrow")}
              </p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#1e2a25] sm:text-5xl lg:text-6xl">
                {t("title")}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg lg:leading-8">
                {t("description")}
              </p>
            </div>
          </Container>
        </section>

        {/* Mobile Header with Search & Controls */}
        <MobileHeader
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          activeFiltersCount={activeFiltersCount}
          onOpenFilters={() => setIsFiltersOpen(true)}
          totalCount={filteredProducts.length}
        />

        {/* Main Content */}
        <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-start">
            {/* Desktop Filters Sidebar */}
            <div className="hidden lg:block">
              <DesktopFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onReset={handleResetFilters}
              />
            </div>

            {/* Products & Pagination */}
            <div className="min-w-0 flex-1">
              <ProductGrid
                products={paginatedProducts}
                totalCount={filteredProducts.length}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </section>

        {/* Mobile Filters Drawer */}
        <FiltersDrawer
          isOpen={isFiltersOpen}
          onClose={() => setIsFiltersOpen(false)}
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onApply={handleApplyFilters}
          onReset={handleResetFilters}
        />
      </main>
      <Footer />
    </div>
  );
}
