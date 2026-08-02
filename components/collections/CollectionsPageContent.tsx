"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Container from "@/components/ui/Container/Container";
import { perfumes } from "@/components/perfumes/ProductGrid/products";

const collections = [
  {
    id: "homme",
    href: { pathname: "/perfumes" as const, query: { category: "homme" } },
    accent: "#588b76",
    image: "from-[#588b76]/25 via-[#f6f6df] to-white",
  },
  {
    id: "femme",
    href: { pathname: "/perfumes" as const, query: { category: "femme" } },
    accent: "#b9868f",
    image: "from-[#b9868f]/25 via-[#fff5f1] to-white",
  },
  {
    id: "oriental",
    href: { pathname: "/perfumes" as const, query: { category: "oriental" } },
    accent: "#9b6b45",
    image: "from-[#9b6b45]/25 via-[#f6f6df] to-white",
  },
  {
    id: "boise",
    href: { pathname: "/perfumes" as const, query: { category: "boise" } },
    accent: "#2f463f",
    image: "from-[#2f463f]/25 via-[#edf4ec] to-white",
  },
  {
    id: "niche",
    href: { pathname: "/perfumes" as const, query: { category: "niche" } },
    accent: "#d7a85e",
    image: "from-[#d7a85e]/25 via-[#fff8e6] to-white",
  },
  {
    id: "bestseller",
    href: { pathname: "/perfumes" as const, query: { sort: "bestseller" } },
    accent: "#815838",
    image: "from-[#815838]/25 via-[#f4ead8] to-white",
  },
  {
    id: "newest",
    href: { pathname: "/perfumes" as const, query: { sort: "newest" } },
    accent: "#b9868f",
    image: "from-[#b9868f]/25 via-[#fff5f1] to-white",
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <Link
                  href={collection.href as never}
                  className="group relative block min-h-[23rem] overflow-hidden rounded-[2rem] border border-[#1e2a25]/10 bg-white shadow-[0_22px_60px_rgba(30,42,37,0.08)]"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${collection.image} transition-transform duration-700 group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a25]/72 via-[#1e2a25]/18 to-transparent" />
                  <div className="relative z-10 flex min-h-[23rem] flex-col justify-end p-7 text-white">
                    <div
                      className="mb-5 h-1 w-16 rounded-full"
                      style={{ backgroundColor: collection.accent }}
                    />
                    <h3 className="font-serif text-4xl font-semibold tracking-[-0.04em]">
                      {titleMap[collection.id]}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/82">
                      {descMap[collection.id]}
                    </p>
                    <span className="mt-7 inline-flex w-fit rounded-full bg-white/16 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur transition-all duration-300 group-hover:bg-white group-hover:text-[#588b76]">
                      {t("cta")}
                    </span>
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

          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="min-w-[78%] snap-start sm:min-w-[45%] lg:min-w-[23%]"
              >
                <Link
                  href={{
                    pathname: "/perfumes/[slug]",
                    params: { slug: product.id },
                  }}
                  className="group block overflow-hidden rounded-[1.75rem] border border-[#1e2a25]/10 bg-white p-4 shadow-[0_18px_45px_rgba(30,42,37,0.07)]"
                >
                  <div
                    className="flex aspect-[4/5] items-center justify-center rounded-[1.35rem] transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                      background: `linear-gradient(135deg, ${product.tone.secondary}, #fff, ${product.tone.primary}30)`,
                    }}
                  >
                    <div
                      className="h-40 w-24 rounded-[2rem] shadow-[0_22px_45px_rgba(30,42,37,0.16)]"
                      style={{
                        background: `linear-gradient(160deg, #fff, ${product.tone.secondary}, ${product.tone.primary}66)`,
                      }}
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#588b76]">
                      {product.brand}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1e2a25]">
                      {product.name}
                    </h3>
                    <p className="mt-2 font-semibold text-[#1e2a25]">{product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
