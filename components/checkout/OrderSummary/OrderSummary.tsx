"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

type OrderItem = {
  id: string;
  name: string;
  brand: string;
  volume: string;
  price: number;
  quantity: number;
  image: string;
  tone: { primary: string; secondary: string };
};

type OrderSummaryProps = {
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  total: number;
};

// Fallback image for products without images
const FALLBACK_IMAGE = "/images/niche.jpeg";

export default function OrderSummary({ items, subtotal, shippingCost, total }: OrderSummaryProps) {
  const t = useTranslations("Checkout");
  const tCommon = useTranslations("Common");
  const finalTotal = total + shippingCost;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/60 backdrop-blur-sm p-6 sticky top-28">
        <h2 className="mb-6 font-serif text-2xl font-semibold text-[#1e2a25]">
          {t("summary")}
        </h2>

        {/* Order Items */}
        <div className="space-y-4 mb-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex gap-4 p-4 rounded-xl bg-white/50 border border-[#1e2a25]/5"
            >
              <div className="flex-shrink-0">
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
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[#1e2a25] text-sm leading-tight">{item.name}</h3>
                <p className="text-xs text-[var(--color-muted)] mt-1">{item.brand}</p>
                <p className="text-xs text-[var(--color-muted)]">{item.volume}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-[var(--color-muted)]">{t("quantity")}: {item.quantity}</span>
                  <span className="text-sm font-semibold text-[#1e2a25]">{item.price * item.quantity} {tCommon("currency")}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Breakdown */}
        <div className="space-y-3 pt-4 border-t border-[#1e2a25]/10">
          <div className="flex justify-between text-sm">
            <span className="text-[var(--color-muted)]">
              {t("subtotal")} ({items.length} {t("itemsLabel", { count: items.length })})
            </span>
            <span className="font-medium text-[#1e2a25]">{subtotal} {tCommon("currency")}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-[var(--color-muted)]">{t("shipping")}</span>
            <span className="font-medium text-[#1e2a25]">
              {shippingCost === 0 ? (
                <span className="text-green-600">{t("freeShipping")}</span>
              ) : (
                `${shippingCost} ${tCommon("currency")}`
              )}
            </span>
          </div>

          {shippingCost > 0 && (
            <div className="rounded-lg bg-blue-50 p-3 border border-blue-200">
              <p className="text-xs text-blue-700">
                💡 {t("freeShippingHint", { amount: "300" })}
              </p>
            </div>
          )}

          <div className="flex justify-between pt-3 border-t border-[#1e2a25]/10">
            <span className="font-semibold text-[#1e2a25]">{t("total")}</span>
            <span className="font-serif text-xl font-semibold text-[#1e2a25]">
              {finalTotal} {tCommon("currency")}
            </span>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-6 space-y-2 rounded-xl bg-gradient-to-r from-[#588b76]/5 to-transparent p-4 border border-[#588b76]/10">
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="text-green-600">🔒</span>
            <span>{t("secureOrder")}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="text-green-600">📱</span>
            <span>{t("smsConfirmation")}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="text-green-600">✅</span>
            <span>{t("authenticityGuarantee")}</span>
          </div>
        </div>

        {/* Estimated Delivery */}
        <div className="mt-4 text-center">
          <p className="text-xs font-medium text-[#588b76] uppercase tracking-[0.16em]">
            {t("estimatedDelivery")}
          </p>
          <p className="text-sm font-semibold text-[#1e2a25] mt-1">
            {t("deliveryDate")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}