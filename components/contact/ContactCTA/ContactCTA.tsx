"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";

export default function ContactCTA() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1e2a25] via-[#4d7c69] to-[#588b76] p-8 text-white shadow-[0_35px_95px_rgba(30,42,37,0.18)] sm:p-10 lg:p-14"
        >
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute bottom-0 right-12 h-44 w-32 rounded-t-[3rem] border border-white/20 bg-white/10 backdrop-blur" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f6f6df]">
              Conseil immédiat
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Parlez à un conseiller parfum.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
              Envoyez-nous vos préférences, votre budget et l’occasion. Nous vous
              répondons avec une sélection claire et élégante.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20un%20conseil%20parfum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#588b76] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f6f6df]"
              >
                WhatsApp
              </Link>
              <Link
                href="/parfums"
                className="inline-flex justify-center rounded-full border border-white/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Voir les parfums
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
