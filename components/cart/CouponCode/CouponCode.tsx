"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button/Button";

type CouponCodeProps = {
  onApplyCoupon: (code: string) => void;
  currentCode: string;
  discount: number;
};

export default function CouponCode({ onApplyCoupon, currentCode, discount }: CouponCodeProps) {
  const [code, setCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleApply = async () => {
    if (!code.trim()) return;
    
    setIsApplying(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    onApplyCoupon(code.trim());
    setIsApplying(false);
    setCode("");
  };

  const handleRemoveCoupon = () => {
    onApplyCoupon("");
    setCode("");
  };

  return (
    <div className="rounded-[1.5rem] border border-[#1e2a25]/10 bg-white/70 backdrop-blur-sm">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
        aria-expanded={isOpen}
      >
        <span>
          <span className="block font-serif text-xl font-semibold text-[#1e2a25]">
            Code Promo
          </span>
          {currentCode && discount > 0 ? (
            <span className="mt-1 block text-xs text-green-700">
              {currentCode} appliqué
            </span>
          ) : (
            <span className="mt-1 block text-xs text-[var(--color-muted)]">
              Ajouter un coupon
            </span>
          )}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#588b76]/10 text-[#588b76]">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 px-4 pb-4 sm:px-5">
              {currentCode && discount > 0 ? (
                <div className="flex items-center justify-between rounded-xl border border-green-200 bg-green-50 p-3">
                  <div>
                    <div className="text-sm font-medium text-green-800">
                      Code &quot;{currentCode}&quot; appliqué
                    </div>
                    <div className="text-xs text-green-600">
                      Réduction de {(discount * 100).toFixed(0)}%
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveCoupon}
                    className="text-green-600 transition-colors duration-300 hover:text-green-800"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value.toUpperCase())}
                      placeholder="Code promo"
                      className="min-w-0 flex-1 rounded-full border border-[#1e2a25]/10 bg-white px-4 py-3 text-sm text-[#1e2a25] placeholder:text-[var(--color-muted)] focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10"
                      onKeyDown={(e) => e.key === "Enter" && handleApply()}
                    />
                    <Button
                      variant="primary"
                      onClick={handleApply}
                      loading={isApplying}
                      disabled={!code.trim() || isApplying}
                      className="px-5"
                    >
                      Appliquer
                    </Button>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setCode("WELCOME10")}
                      className="rounded-lg border border-[#1e2a25]/10 bg-white/60 p-3 text-left text-sm transition-all duration-300 hover:border-[#588b76]/30"
                    >
                      <div className="font-medium text-[#1e2a25]">WELCOME10</div>
                      <div className="text-xs text-[var(--color-muted)]">10% de réduction</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCode("ACHRAF15")}
                      className="rounded-lg border border-[#1e2a25]/10 bg-white/60 p-3 text-left text-sm transition-all duration-300 hover:border-[#588b76]/30"
                    >
                      <div className="font-medium text-[#1e2a25]">ACHRAF15</div>
                      <div className="text-xs text-[var(--color-muted)]">15% de réduction</div>
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}