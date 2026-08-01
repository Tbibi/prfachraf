"use client";

import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import CartIcon from "@/components/cart/CartIcon/CartIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]);

  return (
    <header
      className={`sticky top-0 z-30 w-full border-b transition-all duration-500 ${
        isMounted && isScrolled
          ? "border-[#588b76]/15 bg-[rgba(251,247,239,0.82)] shadow-[0_18px_60px_rgba(42,23,16,0.10)] backdrop-blur-2xl"
          : "border-transparent bg-[rgba(251,247,239,0.58)] shadow-none backdrop-blur-xl"
      }`}
      suppressHydrationWarning={true}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 transition-[height] duration-500 sm:px-6 lg:px-8">
        <Logo />
        <DesktopMenu />
        <div className="flex items-center gap-3">
          <CartIcon />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
