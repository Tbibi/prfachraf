"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { useCartStore, type CartItem } from "@/lib/stores/cartStore";
import Button from "@/components/ui/Button/Button";

// Fallback image for products without images
const FALLBACK_IMAGE = "/images/niche.jpeg";

export default function MiniCart() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalItems, getTotalPrice } =
    useCartStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCart();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeCart]);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed end-0 top-0 z-[9999] hidden h-full w-full max-w-md flex-col bg-white shadow-2xl sm:flex"
          >
            <CartContent
              items={items}
              totalItems={totalItems}
              totalPrice={totalPrice}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              closeCart={closeCart}
            />
          </motion.div>

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 z-[9999] flex h-[85vh] w-full flex-col rounded-t-3xl bg-white shadow-2xl sm:hidden"
          >
            <div className="flex justify-center py-3">
              <div className="h-1.5 w-12 rounded-full bg-gray-200" />
            </div>

            <CartContent
              items={items}
              totalItems={totalItems}
              totalPrice={totalPrice}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              closeCart={closeCart}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

type CartContentProps = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  closeCart: () => void;
};

function CartContent({
  items,
  totalItems,
  totalPrice,
  updateQuantity,
  removeItem,
  closeCart,
}: CartContentProps) {
  const t = useTranslations("Cart");
  const tCommon = useTranslations("Common");
  const router = useRouter();
  const plural = totalItems !== 1 ? "s" : "";

  return (
    <>
      <div className="flex items-center justify-between border-b border-[#1e2a25]/10 p-6">
        <div>
          <h2 className="font-serif text-xl font-semibold text-[#1e2a25]">
            {t("miniTitle")} ({totalItems})
          </h2>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {t("itemCount", { count: totalItems, plural })}
          </p>
        </div>
        <button
          onClick={closeCart}
          className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-muted)] transition-colors duration-300 hover:bg-[#1e2a25]/5 hover:text-[#1e2a25]"
          aria-label={t("close")}
        >
          ✕
        </button>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 text-6xl text-[var(--color-muted)]">🛍️</div>
          <h3 className="mb-2 font-serif text-xl font-semibold text-[#1e2a25]">
            {t("miniEmpty")}
          </h3>
          <p className="mb-6 text-[var(--color-muted)]">{t("emptyDescription")}</p>
          <Button
            variant="primary"
            onClick={() => {
              closeCart();
              router.push("/perfumes");
            }}
            className="px-6"
          >
            {t("miniEmptyCta")}
          </Button>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex gap-4 rounded-xl border border-[#1e2a25]/5 bg-gradient-to-r from-[#f6f6df]/20 to-transparent p-4"
                >
                  <div className="shrink-0">
                    <div className="h-16 w-12 overflow-hidden rounded-lg bg-gradient-to-br from-white/40 to-gray-50/60 p-2">
                      <Image
                        src={item.image || FALLBACK_IMAGE}
                        alt={item.name}
                        width={48}
                        height={58}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-1 text-sm font-medium leading-tight text-[#1e2a25]">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-[var(--color-muted)]">{item.brand}</p>
                    {item.volume ? (
                      <p className="text-xs text-[var(--color-muted)]">
                        {t("volume", { volume: item.volume })}
                      </p>
                    ) : null}

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#1e2a25]">
                        {item.price} {tCommon("currency")}
                      </span>

                      <div className="flex items-center rounded-full border border-[#1e2a25]/10 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-xs font-semibold text-[#588b76] transition-colors duration-300 hover:bg-[#588b76]/5"
                          aria-label={t("decreaseQty", { name: item.name })}
                        >
                          -
                        </button>
                        <span className="min-w-[1.5rem] text-center text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center text-xs font-semibold text-[#588b76] transition-colors duration-300 hover:bg-[#588b76]/5"
                          aria-label={t("increaseQty", { name: item.name })}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="shrink-0 p-1 text-[var(--color-muted)] transition-colors duration-300 hover:text-red-500"
                    aria-label={t("remove", { name: item.name })}
                  >
                    <span className="text-sm">🗑️</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#1e2a25]/10 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-medium text-[#1e2a25]">{t("subtotal")}</span>
              <span className="font-serif text-xl font-semibold text-[#1e2a25]">
                {totalPrice} {tCommon("currency")}
              </span>
            </div>

            <div className="space-y-3">
              <Link href="/cart" onClick={closeCart}>
                <Button variant="primary" className="h-12 w-full text-sm font-semibold">
                  {t("viewCart")}
                </Button>
              </Link>

              <Button
                variant="outline"
                onClick={closeCart}
                className="h-12 w-full text-sm font-semibold"
              >
                {tCommon("continueShopping")}
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
