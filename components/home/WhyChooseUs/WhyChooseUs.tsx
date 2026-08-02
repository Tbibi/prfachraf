"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const featureKeys = [
  {
    title: "authentic",
    description: "authenticDesc",
    icon: (
      <path d="M12 3l7 4v6c0 4.4-2.8 8.4-7 9-4.2-.6-7-4.6-7-9V7l7-4z" />
    ),
  },
  {
    title: "delivery",
    description: "deliveryDesc",
    icon: (
      <path d="M3 7h11v10H3V7zm11 3h4l3 3v4h-7v-7zM7 20a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
    ),
  },
  {
    title: "payment",
    description: "paymentDesc",
    icon: <path d="M6 10V8a6 6 0 1112 0v2m-1 0H7v11h10V10zm-5 4v3" />,
  },
  {
    title: "support",
    description: "supportDesc",
    icon: (
      <path d="M4 12a8 8 0 0116 0v5a3 3 0 01-3 3h-2m-8-8v4H5a1 1 0 01-1-1v-3zm13 0v4h2a1 1 0 001-1v-3h-3z" />
    ),
  },
] as const;

export default function WhyChooseUs() {
  const t = useTranslations("Home");

  return (
    <section
      aria-labelledby="why-choose-us-title"
      className="bg-[var(--color-background)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#588b76]">
            {t("whyEyebrow")}
          </p>
          <h2
            id="why-choose-us-title"
            className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-5xl lg:text-6xl"
          >
            {t("whyHeading")}
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            {t("whyDescription")}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featureKeys.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-[2rem] border border-[#1e2a25]/10 bg-white/78 p-6 shadow-[0_22px_60px_rgba(30,42,37,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#588b76]/25 hover:shadow-[0_30px_80px_rgba(30,42,37,0.13)]"
            >
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6f6df] text-[#588b76] shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold tracking-[-0.03em] text-[#1e2a25]">
                {t(feature.title)}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {t(feature.description)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
