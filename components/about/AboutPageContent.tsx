"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Container from "@/components/ui/Container/Container";

export default function AboutPageContent() {
  const t = useTranslations("About");
  const tCommon = useTranslations("Common");

  const values = [
    { title: t("value1Title"), description: t("value1Desc") },
    { title: t("value2Title"), description: t("value2Desc") },
    { title: t("value3Title"), description: t("value3Desc") },
  ];

  const timeline = [
    { year: "2019", title: t("t1Title"), text: t("t1Text") },
    { year: "2021", title: t("t2Title"), text: t("t2Text") },
    { year: "2024", title: t("t3Title"), text: t("t3Text") },
    { year: "2026", title: t("t4Title"), text: t("t4Text") },
  ];

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
              { label: tCommon("home"), href: "/" },
              { label: t("breadcrumb"), href: "#", current: true },
            ]}
          />

          <div className="mt-12 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#588b76]">
                {t("eyebrow")}
              </p>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-[#1e2a25] sm:text-6xl lg:text-8xl">
                {t("title")}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg lg:text-xl lg:leading-9">
                {t("intro")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative min-h-[32rem] overflow-hidden rounded-[2.5rem] border border-[#1e2a25]/10 bg-gradient-to-br from-white via-[#f6f6df] to-[#588b76]/18 p-8 shadow-[0_35px_95px_rgba(30,42,37,0.12)]"
            >
              <div className="absolute start-8 top-8 h-32 w-32 rounded-full bg-white/55 blur-2xl" />
              <div className="absolute bottom-10 start-1/2 h-72 w-44 -translate-x-1/2 rounded-[3rem] border border-white/70 bg-white/35 shadow-[0_30px_80px_rgba(88,139,118,0.22)] backdrop-blur" />
              <div className="absolute bottom-20 start-[54%] h-44 w-28 -translate-x-1/2 rounded-[2rem] bg-gradient-to-br from-white via-[#f6f6df] to-[#588b76]/45 shadow-[0_24px_55px_rgba(30,42,37,0.14)]" />
              <div className="relative z-10 max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#588b76]">
                  {t("cardEyebrow")}
                </p>
                <p className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#1e2a25]">
                  {t("cardTitle")}
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
                {t("storyEyebrow")}
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold tracking-[-0.04em]">
                {t("storyTitle")}
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/74">{t("storyText")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="space-y-7"
            >
              <p className="font-serif text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#1e2a25] sm:text-5xl">
                {t("beliefTitle")}
              </p>
              <p className="max-w-3xl text-base leading-8 text-[var(--color-muted)]">
                {t("beliefText")}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <Container>
          <div className="mb-10">
            <h2 className="font-serif text-4xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-5xl">
              {t("valuesTitle")}
            </h2>
          </div>
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
            <h2 className="font-serif text-4xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-5xl">
              {t("timelineTitle")}
            </h2>
          </div>

          <div className="relative space-y-6 before:absolute before:start-4 before:top-2 before:h-full before:w-px before:bg-[#588b76]/18 md:grid md:grid-cols-4 md:gap-6 md:space-y-0 md:before:hidden">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="relative ps-12 md:ps-0"
              >
                <span className="absolute start-0 top-2 h-8 w-8 rounded-full border border-[#588b76]/30 bg-[#f6f6df] md:static md:mb-5 md:inline-block" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#588b76]">
                  {item.year}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-[#1e2a25]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.text}</p>
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
              <h2 className="font-serif text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                {t("ctaTitle")}
              </h2>
              <Link
                href="/perfumes"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#588b76] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f6f6df]"
              >
                {t("ctaButton")}
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
