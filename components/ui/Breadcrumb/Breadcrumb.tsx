"use client";

import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type AppPath =
  | "/"
  | "/perfumes"
  | "/collections"
  | "/about"
  | "/contact"
  | "/cart"
  | "/checkout";

type BreadcrumbItem = {
  label: string;
  href: AppPath | "#" | string;
  current?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const appPaths = new Set<string>([
  "/",
  "/perfumes",
  "/collections",
  "/about",
  "/contact",
  "/cart",
  "/checkout",
]);

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const t = useTranslations("Common");

  return (
    <nav aria-label={t("breadcrumb")}>
      <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        {items.map((item, index) => {
          const isCurrent = Boolean(item.current) || item.href === "#";
          const isAppPath = appPaths.has(item.href);

          return (
            <li key={`${item.href}-${item.label}`} className="flex items-center gap-2">
              {isCurrent ? (
                <span className="text-[#588b76]" aria-current="page">
                  {item.label}
                </span>
              ) : isAppPath ? (
                <Link
                  href={item.href as AppPath}
                  className="transition-colors duration-300 hover:text-[#588b76]"
                >
                  {item.label}
                </Link>
              ) : (
                <NextLink
                  href={item.href}
                  className="transition-colors duration-300 hover:text-[#588b76]"
                >
                  {item.label}
                </NextLink>
              )}
              {index < items.length - 1 && (
                <span aria-hidden="true" className="text-[var(--color-muted)]">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
