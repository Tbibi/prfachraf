"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Accueil" },
  { href: "/parfums", label: "Parfums" },
  { href: "/collections", label: "Collections" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-8" role="navigation">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        
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
              className={`absolute -bottom-1 left-0 h-0.5 bg-[#588b76] transition-all duration-300 ${
                isActive ? "w-full" : "w-0 hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}