"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactFAQ() {
  const t = useTranslations("Contact");
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: t("faq1q"), answer: t("faq1a") },
    { question: t("faq2q"), answer: t("faq2a") },
    { question: t("faq3q"), answer: t("faq3a") },
    { question: t("faq4q"), answer: t("faq4a") },
  ];

  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#588b76]">
            {t("faqEyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-5xl">
            {t("faqTitle")}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            {t("faqSubtitle")}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="overflow-hidden rounded-[1.5rem] border border-[#1e2a25]/10 bg-white/70 shadow-[0_18px_45px_rgba(30,42,37,0.06)] backdrop-blur"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-start"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl font-semibold text-[#1e2a25]">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#588b76]/10 text-[#588b76]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-7 text-[var(--color-muted)]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
