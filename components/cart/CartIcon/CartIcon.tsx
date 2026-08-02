"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/stores/cartStore";

type CartIconProps = {
  onClick?: () => void;
  className?: string;
};

export default function CartIcon({ onClick, className = "" }: CartIconProps) {
  const { getTotalItems, openCart } = useCartStore();
  const [hasHydrated, setHasHydrated] = useState(false);
  const totalItems = hasHydrated ? getTotalItems() : 0;

  useEffect(() => {
    const finishHydration = () => setHasHydrated(true);

    if (useCartStore.persist.hasHydrated()) {
      finishHydration();
      return;
    }

    return useCartStore.persist.onFinishHydration(finishHydration);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openCart();
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      key={totalItems}
      animate={totalItems > 0 ? {
        scale: [1, 1.2, 1],
        rotate: [0, -10, 10, -5, 0]
      } : {}}
      transition={{ 
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55]
      }}
      className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#588b76]/20 bg-white/70 text-[#588b76] shadow-sm backdrop-blur transition-all duration-300 hover:border-[#588b76]/40 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76] ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z"
        />
      </svg>

      {/* Cart Badge */}
      {totalItems > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#588b76] text-xs font-semibold text-white shadow-lg"
        >
          <span>{totalItems > 99 ? '99+' : totalItems}</span>
        </motion.div>
      )}
    </motion.button>
  );
}