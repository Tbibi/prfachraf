"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Container from "@/components/ui/Container/Container";
import { perfumes } from "@/components/perfumes/ProductGrid/products";

const collections = [
  {
    title: "Homme",
    href: "/perfumes?category=homme",
    description: "Bois secs, ambres profonds et sillages affirmés.",
    accent: "#588b76",
    image: "from-[#588b76]/25 via-[#f6f6df] to-white",
  },
  {
    title: "Femme",
    href: "/perfumes?category=femme",
    description: "Fleurs lumineuses, muscs soyeux et vanilles élégantes.",
    accent: "#b9868f",
    image: "from-[#b9868f]/25 via-[#fff5f1] to-white",
  },
  {
    title: "Oriental",
    href: "/perfumes?category=oriental",
    description: "Résines, épices et matières précieuses au caractère enveloppant.",
    accent: "#9b6b45",
    image: "from-[#9b6b45]/25 via-[#f6f6df] to-white",
  },
  {
    title: "Boisé",
    href: "/perfumes?category=boise",
    description: "Cèdre, santal, vétiver et signatures très couture.",
    accent: "#2f463f",
    image: "from-[#2f463f]/25 via-[#edf4ec] to-white",
  },
  {
    title: "Niche",
    href: "/perfumes?category=niche",
    description: "Créations rares pour les amateurs de parfums distinctifs.",
    accent: "#d7a85e",
    image: "from-[#d7a85e]/25 via-[#fff8e6] to-white",
  },
  {
    title: "Best Sellers",
    href: "/perfumes?sort=bestseller",
    description: "Les parfums favoris de nos clients, choisis pour leur tenue.",
    accent: "#815838",
    image: "from-[#815838]/25 via-[#f4ead8] to-white",
  },
  {
    title: "New Arrivals",
    href: "/perfumes?sort=newest",
    description: "Les dernières nouveautés premium sélectionnées pour la saison.",
    accent: "#b9868f",
    image: "from-[#b9868f]/25 via-[#fff5f1] to-white",
  },
];

const featuredProducts = perfumes.slice(0, 8);

export default function CollectionsPageContent() {
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
              { label: "Accueil", href: "/" },
              { label: "Collections", href: "#", current: true },
            ]}
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#588b76]">
                Collections signature
              </p>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-[#1e2a25] sm:text-6xl lg:text-8xl">
                Explorez les familles du parfum.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg lg:text-xl lg:leading-9">
                Des sélections éditoriales pensées pour chaque humeur, chaque saison
                et chaque signature personnelle.
              </p>
              <Link
                href="/parfums"
                className="mt-10 inline-flex rounded-full bg-[#588b76] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_45px_rgba(88,139,118,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4d7c69]"
              >
                Découvrir les parfums
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative min-h-[24rem] overflow-hidden rounded-[2.25rem] border border-[#1e2a25]/10 bg-gradient-to-br from-[#588b76]/18 via-white/70 to-[#f6f6df] p-8 shadow-[0_30px_90px_rgba(30,42,37,0.12)]"
            >
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#588b76]/20 blur-3xl" />
              <div className="absolute bottom-8 right-8 h-52 w-36 rounded-[2.5rem] border border-white/70 bg-white/35 shadow-[0_25px_70px_rgba(88,139,118,0.2)] backdrop-blur" />
              <div className="relative z-10 max-w-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#588b76]">
                  Collection mise en avant
                </p>
                <h2 className="mt-5 font-serif text-4xl font-semibold leading-none text-[#1e2a25]">
                  Oud & Bois Précieux
                </h2>
                <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                  Une sélection intense et magnétique, construite autour du oud, du
                  cèdre, du santal et des résines chaudes.
                </p>
                <Link
                  href="/perfumes?category=oriental"
                  className="mt-8 inline-flex rounded-full border border-[#588b76]/35 bg-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#588b76] backdrop-blur transition-all duration-300 hover:bg-white"
                >
                  Voir la collection
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#588b76]">
              Choisir par univers
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-5xl">
              Six collections premium.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <Link
                  href={collection.href}
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
                      {collection.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/82">
                      {collection.description}
                    </p>
                    <span className="mt-7 inline-flex w-fit rounded-full bg-white/16 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur transition-all duration-300 group-hover:bg-white group-hover:text-[#588b76]">
                      Explorer
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
                Aperçu produit
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-5xl">
                Les pièces à essayer.
              </h2>
            </div>
            <Link href="/parfums" className="text-sm font-semibold uppercase tracking-[0.16em] text-[#588b76]">
              Voir tout →
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
                  href={`/perfumes/${product.id}`}
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
