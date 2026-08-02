"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import Button from "@/components/ui/Button/Button";

type CartSummaryProps = {
  subtotal: number;
  discount: number;
  total: number;
  itemCount: number;
};

export default function CartSummary({
  subtotal,
  discount,
  total,
  itemCount,
}: CartSummaryProps) {
  const t = useTranslations("Cart");
  const tCommon = useTranslations("Common");
  const router = useRouter();
  const shippingCost = total >= 300 ? 0 : 30;
  const finalTotal = total + shippingCost;
  const plural = itemCount !== 1 ? "s" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="sticky top-28 rounded-[1.5rem] border border-[#1e2a25]/10 bg-white/70 p-5 backdrop-blur-sm sm:p-6">
        <h2 className="mb-4 font-serif text-2xl font-semibold text-[#1e2a25]">
          {t("summary")}
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-[var(--color-muted)]">
              {t("subtotalItems", { count: itemCount, plural })}
            </span>
            <span className="font-medium text-[#1e2a25]">
              {subtotal} {tCommon("currency")}
            </span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-green-600">{t("discount")}</span>
              <span className="font-medium text-green-600">
                -{discount.toFixed(0)} {tCommon("currency")}
              </span>
            </div>
          )}

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
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="text-xs text-blue-700">
                💡{" "}
                {t("freeShippingHint", {
                  amount: (300 - total).toFixed(0),
                })}
              </p>
            </div>
          )}

          <div className="border-t border-[#1e2a25]/10 pt-4">
            <div className="flex justify-between">
              <span className="font-semibold text-[#1e2a25]">{t("total")}</span>
              <span className="font-serif text-xl font-semibold text-[#1e2a25]">
                {finalTotal} {tCommon("currency")}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 hidden space-y-3 sm:block">
          <Button
            variant="primary"
            className="h-12 w-full text-sm font-semibold"
            onClick={() => router.push("/checkout")}
          >
            {t("checkout")}
          </Button>
        </div>

        <div className="mt-5 space-y-2 rounded-xl border border-[#588b76]/10 bg-gradient-to-r from-[#588b76]/5 to-transparent p-3 sm:p-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="text-green-600">🔒</span>
            <span>{t("securePayment")}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="text-green-600">🚚</span>
            <span>{t("fastDelivery")}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="text-green-600">↩️</span>
            <span>{t("freeReturns")}</span>
          </div>
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/perfumes"
            className="text-sm font-medium text-[#588b76] underline decoration-[#588b76]/30 underline-offset-4 transition-all duration-300 hover:decoration-[#588b76]"
          >
            {t("continueShopping")}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
