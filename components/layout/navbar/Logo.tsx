"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Logo() {
  const t = useTranslations("Footer");

  return (
    <Link
      href="/"
      aria-label={t("homeAria")}
      className="inline-flex flex-col items-start text-[#588b76] transition-opacity duration-300 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76]"
    >
      <span className="font-serif text-[clamp(1.875rem,5vw,2.75rem)] font-semibold leading-none tracking-[0.04em]">
        Achraf
      </span>
      <span className="mt-1 font-serif text-[clamp(0.625rem,1.8vw,0.8125rem)] font-medium uppercase leading-none tracking-[0.48em]">
        PARFUMS
      </span>
    </Link>
  );
}
