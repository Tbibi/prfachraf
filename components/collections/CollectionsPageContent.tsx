"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Container from "@/components/ui/Container/Container";
import AddToCartButton from "@/components/cart/AddToCartButton/AddToCartButton";
import { perfumes } from "@/components/perfumes/ProductGrid/products";

const collections = [
  {
    id: "homme",
    href: { pathname: "/perfumes" as const, query: { category: "homme" } },
    accent: "#588b76",
    image: "/images/Oud%20Wood.jpeg",
    alt: "Men's luxury perfume collection featuring woody and oriental fragrances",
    productCount: 6,
    notes: "Woody • Amber • Leather",
  },
  {
    id: "femme", 
    href: { pathname: "/perfumes" as const, query: { category: "femme" } },
    accent: "#b9868f",
    image: "/images/femme.jpeg",
    alt: "Women's elegant perfume collection with floral and fruity notes",
    productCount: 8,
    notes: "Floral • Rose • Vanilla",
  },
  {
    id: "oriental",
    href: { pathname: "/perfumes" as const, query: { category: "oriental" } },
    accent: "#9b6b45", 
    image: "/images/Oriental.jpeg",
    alt: "Oriental perfume collection with spices, amber and exotic woods",
    productCount: 5,
    notes: "Spices • Amber • Incense",
  },
  {
    id: "boise",
    href: { pathname: "/perfumes" as const, query: { category: "boise" } },
    accent: "#2f463f",
    image: "/images/Dior%20Sauvage.jpeg",
    alt: "Woody perfume collection featuring cedar, sandalwood and vetiver",
    productCount: 4,
    notes: "Cedar • Sandalwood • Vetiver",
  },
  {
    id: "niche",
    href: { pathname: "/perfumes" as const, query: { category: "niche" } },
    accent: "#d7a85e",
    image: "/images/niche.jpeg",
    alt: "Niche luxury perfume collection with exclusive artisanal fragrances",
    productCount: 7,
    notes: "Exclusive • Artisanal • Rare",
  },
  {
    id: "bestseller",
    href: { pathname: "/perfumes" as const, query: { sort: "bestseller" } },
    accent: "#815838",
    image: "/images/Baccarat%20Rouge.jpeg",
    alt: "Best-selling perfume collection featuring most popular fragrances",
    productCount: 12,
    notes: "Popular • Signature • Timeless",
  },
  {
    id: "newest",
    href: { pathname: "/perfumes" as const, query: { sort: "newest" } },
    accent: "#b9868f",
    image: "/images/vanilla-sex-tom-ford.png",
    alt: "New arrivals perfume collection with latest luxury fragrances",
    productCount: 3,
    notes: "Fresh • Modern • Innovative",
  },
] as const;

const featuredProducts = perfumes.slice(0, 8);

export default function CollectionsPageContent() {
  const t = useTranslations("Collections");
  const tHome = useTranslations("Home");
  const tCommon = useTranslations("Common");
  const tCart = useTranslations("Cart");

  const titleMap: Record<(typeof collections)[number]["id"], string> = {
    homme: tHome("categoryHommeTitle"),
    femme: tHome("categoryFemmeTitle"),
    oriental: tHome("categoryOriental"),
    boise: tHome("categoryBoiseTitle"),
    niche: tHome("categoryNiche"),
    bestseller: tHome("categoryBestsellersTitle"),
    newest: tHome("categoryNouveautesTitle"),
  };

  const descMap: Record<(typeof collections)[number]["id"], string> = {
    homme: tHome("categoryHommeDesc"),
    femme: tHome("categoryFemmeDesc"),
    oriental: t("description"),
    boise: tHome("categoryBoiseDesc"),
    niche: t("description"),
    bestseller: tHome("categoryBestsellersDesc"),
    newest: tHome("categoryNouveautesDesc"),
  };

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-32">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_16%,rgba(88,139,118,0.16),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(246,246,223,0.9),transparent_34%)]"
          aria-hidden="true"
        />
        <Container>
          <Breadcrumb
            items={[
              { label: tCommon("home"), href: "/" },
              { label: t("title"), href: "#", current: true },
            ]}
          />

          <div className="mt-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#588b76]">
                {t("eyebrow")}
              </p>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-[#1e2a25] sm:text-6xl lg:text-8xl">
                {t("title")}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg lg:text-xl lg:leading-9">
                {t("description")}
              </p>
              <Link
                href="/perfumes"
                className="mt-10 inline-flex rounded-full bg-[#588b76] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_45px_rgba(88,139,118,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4d7c69]"
              >
                {tCart("emptyCta")}
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={collection.href as never}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[#1e2a25]/8 bg-white shadow-[0_24px_64px_rgba(30,42,37,0.06)] transition-all duration-500 hover:shadow-[0_32px_80px_rgba(30,42,37,0.12)] md:hover:-translate-y-2"
                >
                  {/* Collection Image */}
                  <div className="relative h-[60%] overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3} // Priority for above-the-fold cards
                      loading={index >= 3 ? "lazy" : undefined}
                    />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Accent bar */}
                    <div
                      className="absolute bottom-4 left-6 h-1.5 w-20 rounded-full opacity-90"
                      style={{ backgroundColor: collection.accent }}
                    />
                  </div>

                  {/* Collection Info */}
                  <div className="relative flex h-[40%] flex-col justify-between p-6 pt-8">
                    <div>
                      <h3 className="font-serif text-2xl font-bold leading-tight tracking-[-0.02em] text-[#1e2a25] lg:text-3xl">
                        {titleMap[collection.id]}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                        {collection.notes}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#588b76]">
                        {collection.productCount} {collection.productCount === 1 ? 'fragrance' : 'fragrances'}
                      </p>
                    </div>
                    
                    {/* Discover Button */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#588b76] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 group-hover:bg-[#4d7c69] group-hover:px-8 group-hover:shadow-[0_12px_32px_rgba(88,139,118,0.4)]">
                        {t("cta")}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#588b76]">
                {t("preview")}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-5xl">
                {t("featured")}
              </h2>
            </div>
            <Link
              href="/perfumes"
              className="text-sm font-semibold uppercase tracking-[0.16em] text-[#588b76]"
            >
              {t("viewAll")} →
            </Link>
          </div>

          <div className="flex snap-x gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative min-w-[85%] snap-start sm:min-w-[48%] lg:min-w-[24%]"
              >
                <div className="overflow-hidden rounded-[2rem] border border-[#1e2a25]/8 bg-white shadow-[0_20px_50px_rgba(30,42,37,0.06)] transition-all duration-500 group-hover:shadow-[0_28px_65px_rgba(30,42,37,0.12)] group-hover:-translate-y-2">
                  {/* Product Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white p-6">
                    <div className="relative h-full w-full">
                      <Image
                        src={product.image}
                        alt={`${product.brand} ${product.name} Eau de Parfum`}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 24vw"
                        loading="lazy"
                      />
                    </div>
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute right-4 top-4 rounded-full bg-[#588b76] px-3 py-1 text-xs font-bold text-white">
                        {product.badge}
                      </div>
                    )}
                    {/* Wishlist Button */}
                    <button
                      type="button"
                      className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-400 shadow-lg transition-all duration-300 hover:bg-white hover:text-red-500 hover:scale-110"
                      aria-label={`Add ${product.name} to wishlist`}
                    >
                      ♡
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 pt-6">
                    <div className="mb-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#588b76]">
                        {product.brand}
                      </p>
                      <h3 className="mt-2 font-serif text-xl font-bold leading-tight text-[#1e2a25] lg:text-2xl">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs text-[var(--color-muted)]">
                        {product.category}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-bold text-[#1e2a25]">
                          {product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm text-[var(--color-muted)] line-through">
                            {product.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Add to Cart Button - Always visible on mobile, hover-triggered on desktop */}
                    <div className="mt-4 opacity-100 translate-y-0 transition-all duration-300 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                      <AddToCartButton
                        product={{
                          id: product.id,
                          name: product.name,
                          brand: product.brand,
                          price: product.price,
                          image: product.image,
                          oldPrice: product.oldPrice,
                          tone: product.tone,
                        }}
                        size="sm"
                        showMiniCart={false}
                      >
                        <span className="text-sm font-bold">Add to Cart</span>
                      </AddToCartButton>
                    </div>
                  </div>

                  {/* Product Link Overlay - Excludes add to cart area */}
                  <Link
                    href={{
                      pathname: "/perfumes/[slug]",
                      params: { slug: product.id },
                    }}
                    className="absolute inset-0 z-10 md:bottom-20"
                    aria-label={`View ${product.name} details`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
