"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { CartItem } from "@/lib/stores/cartStore";

type CartItemsProps = {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
};

// Fallback image for products without images
const FALLBACK_IMAGE = "/images/niche.jpeg";

export default function CartItems({ items, onUpdateQuantity, onRemoveItem }: CartItemsProps) {
  const t = useTranslations("Cart");
  const tCommon = useTranslations("Common");

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[1.5rem] border border-[#1e2a25]/10 bg-white/70 backdrop-blur-sm">
        <div className="border-b border-[#1e2a25]/10 px-4 py-4 sm:px-5 sm:py-5">
          <h2 className="font-serif text-xl font-semibold text-[#1e2a25] sm:text-2xl">
            {t("articles", { count: items.length })}
          </h2>
        </div>

        <div className="space-y-3 p-3 sm:p-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.24, delay: index * 0.04 }}
              className="relative rounded-[1.35rem] border border-[#1e2a25]/10 bg-white/85 p-3 shadow-[0_12px_30px_rgba(30,42,37,0.05)] sm:p-4"
            >
              <div className="flex gap-3 sm:gap-4">
                <div className="shrink-0">
                  <div className="h-24 w-20 overflow-hidden rounded-[1rem] bg-gradient-to-br from-white/40 to-gray-50/60 p-2.5 sm:h-28 sm:w-24">
                    <Image
                      src={item.image || FALLBACK_IMAGE}
                      alt={item.name}
                      width={80}
                      height={96}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1 pe-9">
                  <div>
                    <h3 className="line-clamp-1 font-medium text-[#1e2a25]">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-[var(--color-muted)] sm:text-sm">
                      {item.brand}
                    </p>
                    {item.volume ? (
                      <p className="text-xs text-[var(--color-muted)] sm:text-sm">
                        {t("volume", { volume: item.volume })}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#1e2a25] sm:text-base">
                      {item.price} {tCommon("currency")}
                    </span>
                    {item.originalPrice != null && item.originalPrice > item.price ? (
                      <span className="text-xs text-[var(--color-muted)] line-through">
                        {item.originalPrice} {tCommon("currency")}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex items-center rounded-full border border-[#1e2a25]/10 bg-white">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold text-[#588b76] transition-colors duration-300 hover:bg-[#588b76]/5 disabled:opacity-50"
                        aria-label={t("decreaseQty", { name: item.name })}
                      >
                        -
                      </button>
                      <span className="min-w-9 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                        className="flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold text-[#588b76] transition-colors duration-300 hover:bg-[#588b76]/5 disabled:opacity-50"
                        aria-label={t("increaseQty", { name: item.name })}
                      >
                        +
                      </button>
                    </div>

                    <div className="text-end">
                      <div className="text-sm font-semibold text-[#1e2a25]">
                        {item.price * item.quantity} {tCommon("currency")}
                      </div>
                      <div className="text-[0.68rem] text-[var(--color-muted)]">
                        {t("total")}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  className="absolute bottom-3 end-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#1e2a25]/5 text-[var(--color-muted)] transition-colors duration-300 hover:bg-red-50 hover:text-red-500"
                  aria-label={t("remove", { name: item.name })}
                >
                  🗑️
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}