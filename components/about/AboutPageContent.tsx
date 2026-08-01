"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Container from "@/components/ui/Container/Container";

const values = [
  {
    title: "Authenticité",
    description: "Des parfums sélectionnés avec exigence, transparence et respect des matières.",
  },
  {
    title: "Conseil",
    description: "Un accompagnement humain pour trouver le sillage qui vous ressemble vraiment.",
  },
  {
    title: "Élégance",
    description: "Une expérience sobre, raffinée et premium, du choix au dernier geste.",
  },
];

const timeline = [
  { year: "2019", title: "Premières sélections", text: "Une curation intime autour des fragrances les plus demandées." },
  { year: "2021", title: "Conseil personnalisé", text: "Achraf Parfums développe une approche centrée sur l’écoute client." },
  { year: "2024", title: "Univers premium", text: "Une identité plus éditoriale, inspirée des grandes maisons de parfum." },
  { year: "2026", title: "Expérience digitale", text: "Une boutique pensée pour découvrir, comparer et commander facilement." },
];

export default function AboutPageContent() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-36">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(88,139,118,0.14),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(246,246,223,0.9),transparent_34%)]"
          aria-hidden="true"
        />
        <Container>
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "À propos", href: "#", current: true },
            ]}
          />

          <div className="mt-12 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#588b76]">
                Maison Achraf
              </p>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-[#1e2a25] sm:text-6xl lg:text-8xl">
                Le parfum comme signature personnelle.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg lg:text-xl lg:leading-9">
                Achraf Parfums accompagne les amateurs de belles fragrances avec
                une sélection luxueuse, accessible et pensée pour le quotidien marocain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative min-h-[32rem] overflow-hidden rounded-[2.5rem] border border-[#1e2a25]/10 bg-gradient-to-br from-white via-[#f6f6df] to-[#588b76]/18 p-8 shadow-[0_35px_95px_rgba(30,42,37,0.12)]"
            >
              <div className="absolute left-8 top-8 h-32 w-32 rounded-full bg-white/55 blur-2xl" />
              <div className="absolute bottom-10 left-1/2 h-72 w-44 -translate-x-1/2 rounded-[3rem] border border-white/70 bg-white/35 shadow-[0_30px_80px_rgba(88,139,118,0.22)] backdrop-blur" />
              <div className="absolute bottom-20 left-[54%] h-44 w-28 -translate-x-1/2 rounded-[2rem] bg-gradient-to-br from-white via-[#f6f6df] to-[#588b76]/45 shadow-[0_24px_55px_rgba(30,42,37,0.14)]" />
              <div className="relative z-10 max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#588b76]">
                  Sélection curatée
                </p>
                <p className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#1e2a25]">
                  Des sillages élégants, choisis avec patience.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className="rounded-[2.25rem] bg-[#1e2a25] p-8 text-white shadow-[0_30px_80px_rgba(30,42,37,0.14)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f6f6df]">
                Notre histoire
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold tracking-[-0.04em]">
                Une maison proche de ses clients.
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/74">
                L’idée est simple : rendre le choix d’un parfum plus personnel,
                plus rassurant et plus élégant. Chaque recommandation part d’un
                style, d’une saison, d’un souvenir ou d’une envie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="space-y-7"
            >
              <p className="font-serif text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#1e2a25] sm:text-5xl">
                Nous croyons qu’un beau parfum n’est pas seulement un produit :
                c’est une présence.
              </p>
              <p className="max-w-3xl text-base leading-8 text-[var(--color-muted)]">
                Notre rôle est de vous aider à trouver cette présence. Un parfum
                discret pour le bureau, une signature intense pour le soir, une
                fragrance propre après la douche ou un oud plus cérémoniel.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/70 p-7 shadow-[0_20px_55px_rgba(30,42,37,0.07)] backdrop-blur"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#588b76]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-serif text-3xl font-semibold text-[#1e2a25]">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#588b76]">
              Timeline
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-5xl">
              Une évolution constante.
            </h2>
          </div>

          <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-[#588b76]/18 md:grid md:grid-cols-4 md:gap-6 md:space-y-0 md:before:hidden">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="relative pl-12 md:pl-0"
              >
                <span className="absolute left-0 top-2 h-8 w-8 rounded-full border border-[#588b76]/30 bg-[#f6f6df] md:static md:mb-5 md:inline-block" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#588b76]">
                  {item.year}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-[#1e2a25]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#588b76] via-[#4d7c69] to-[#1e2a25] p-8 text-white shadow-[0_35px_95px_rgba(88,139,118,0.2)] sm:p-10 lg:p-14"
          >
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f6f6df]">
                Besoin de conseil ?
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Trouvons votre prochaine signature.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/78 sm:text-base">
                Répondez à quelques questions sur votre style, votre budget et les
                notes que vous aimez. Nous vous orientons vers les meilleurs choix.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#588b76] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f6f6df]"
              >
                Demander un conseil
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
