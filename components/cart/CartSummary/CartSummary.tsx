"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button/Button";

type CartSummaryProps = {
  subtotal: number;
  discount: number;
  total: number;
  itemCount: number;
};

export default function CartSummary({ subtotal, discount, total, itemCount }: CartSummaryProps) {
  const shippingCost = total >= 300 ? 0 : 30;
  const finalTotal = total + shippingCost;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      {/* Order Summary */}
      <div className="sticky top-28 rounded-[1.5rem] border border-[#1e2a25]/10 bg-white/70 p-5 backdrop-blur-sm sm:p-6">
        <h2 className="mb-4 font-serif text-2xl font-semibold text-[#1e2a25]">
          Résumé
        </h2>

        <div className="space-y-3">
          {/* Subtotal */}
          <div className="flex justify-between text-sm">
            <span className="text-[var(--color-muted)]">
              Sous-total ({itemCount} article{itemCount !== 1 ? 's' : ''})
            </span>
            <span className="font-medium text-[#1e2a25]">{subtotal} DH</span>
          </div>

          {/* Discount */}
          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-green-600">Réduction</span>
              <span className="font-medium text-green-600">-{discount.toFixed(0)} DH</span>
            </div>
          )}

          {/* Shipping */}
          <div className="flex justify-between text-sm">
            <span className="text-[var(--color-muted)]">Livraison</span>
            <span className="font-medium text-[#1e2a25]">
              {shippingCost === 0 ? (
                <span className="text-green-600">Gratuite</span>
              ) : (
                `${shippingCost} DH`
              )}
            </span>
          </div>

          {/* Free shipping notice */}
          {shippingCost > 0 && (
            <div className="rounded-lg bg-blue-50 p-3 border border-blue-200">
              <p className="text-xs text-blue-700">
                💡 Ajoutez {(300 - total).toFixed(0)} DH pour bénéficier de la livraison gratuite !
              </p>
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-[#1e2a25]/10 pt-4">
            <div className="flex justify-between">
              <span className="font-semibold text-[#1e2a25]">Total</span>
              <span className="font-serif text-xl font-semibold text-[#1e2a25]">
                {finalTotal} DH
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 hidden space-y-3 sm:block">
          <Button
            variant="primary"
            className="w-full h-12 text-sm font-semibold"
            onClick={() => window.location.href = '/checkout'}
          >
            Procéder au paiement
          </Button>
        </div>

        {/* Security & Guarantees */}
        <div className="mt-5 space-y-2 rounded-xl border border-[#588b76]/10 bg-gradient-to-r from-[#588b76]/5 to-transparent p-3 sm:p-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="text-green-600">🔒</span>
            <span>Paiement 100% sécurisé</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="text-green-600">🚚</span>
            <span>Livraison rapide partout au Maroc</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="text-green-600">↩️</span>
            <span>Retour gratuit sous 14 jours</span>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-5 text-center">
          <a
            href="/parfums"
            className="text-sm font-medium text-[#588b76] underline decoration-[#588b76]/30 underline-offset-4 transition-all duration-300 hover:decoration-[#588b76]"
          >
            ← Continuer mes achats
          </a>
        </div>
      </div>
    </motion.div>
  );
}