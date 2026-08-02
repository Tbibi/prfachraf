"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function DesktopMenu() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const menuItems = [
    { href: "/" as const, label: t("home") },
    { href: "/perfumes" as const, label: t("perfumes") },
    { href: "/collections" as const, label: t("collections") },
    { href: "/about" as const, label: t("about") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <nav className="hidden md:flex items-center gap-8" role="navigation">
      {menuItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#588b76] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76] ${
              isActive
                ? "text-[#588b76]"
                : "text-gray-700 hover:text-[#588b76]"
            }`}
          >
            {item.label}
            <span
              className={`absolute -bottom-1 start-0 h-0.5 bg-[#588b76] transition-all duration-300 ${
                isActive ? "w-full" : "w-0 hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
