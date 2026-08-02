"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { useCartStore } from "@/lib/stores/cartStore";

const hiddenRoutes = ["/cart", "/checkout"];

export default function FloatingCart() {
  const t = useTranslations("Cart");
  const tCommon = useTranslations("Common");
  const pathname = usePathname();
  const { isFloatingVisible, getTotalItems, getTotalPrice, openCart } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  const plural = totalItems !== 1 ? "s" : "";

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  if (!isFloatingVisible || totalItems === 0) {
    return null;
  }

  return (
    <div className="sm:hidden">
      <AnimatePresence>
        <motion.button
          type="button"
          onClick={openCart}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.4 
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-2xl bg-[#588b76] px-6 py-4 shadow-[0_16px_40px_rgba(88,139,118,0.3)] backdrop-blur transition-all duration-300 hover:bg-[#4d7c69] hover:shadow-[0_20px_50px_rgba(88,139,118,0.4)]"
        >
          {/* Cart Icon */}
          <div className="relative">
            <svg
              className="h-5 w-5 text-white"
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
            
            {/* Badge */}
            <div className="absolute -top-2 -end-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs font-bold text-[#588b76]">
              {totalItems > 9 ? "9+" : totalItems}
            </div>
          </div>

          <div className="text-white">
            <div className="text-sm font-semibold">
              {t("itemsShort", { count: totalItems, plural })}
            </div>
            <div className="text-xs opacity-90">
              {totalPrice} {tCommon("currency")}
            </div>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </motion.button>
      </AnimatePresence>
    </div>
  );
}