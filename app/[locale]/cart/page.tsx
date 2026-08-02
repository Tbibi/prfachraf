"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import CartItems from "@/components/cart/CartItems/CartItems";
import CartSummary from "@/components/cart/CartSummary/CartSummary";
import CouponCode from "@/components/cart/CouponCode/CouponCode";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Container from "@/components/ui/Container/Container";
import { useCartStore } from "@/lib/stores/cartStore";

export default function CartPage() {
  const t = useTranslations("Cart");
  const tCommon = useTranslations("Common");
  const {
    items: cartItems,
    updateQuantity,
    removeItem,
    getTotalItems,
  } = useCartStore();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [hasHydrated, setHasHydrated] = useState(false);
  const totalItems = getTotalItems();
  const isEmpty = hasHydrated && cartItems.length === 0;

  useEffect(() => {
    const finishHydration = () => setHasHydrated(true);

    if (useCartStore.persist.hasHydrated()) {
      finishHydration();
      return;
    }

    return useCartStore.persist.onFinishHydration(finishHydration);
  }, []);

  const applyCoupon = (code: string) => {
    setCouponCode(code);
    if (code.toUpperCase() === "WELCOME10") {
      setDiscount(0.1);
    } else if (code.toUpperCase() === "ACHRAF15") {
      setDiscount(0.15);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;
  const shippingCost = total >= 300 ? 0 : 30;
  const finalTotal = total + shippingCost;
  const plural = totalItems !== 1 ? "s" : "";

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <section className="px-4 pb-28 pt-6 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-32 lg:pt-14">
          <Container>
            <Breadcrumb
              items={[
                { label: tCommon("home"), href: "/" },
                { label: t("title"), href: "#", current: true },
              ]}
            />

            <div className="mt-6 sm:mt-8">
              <h1 className="font-serif text-3xl font-semibold text-[#1e2a25] sm:text-4xl lg:text-5xl">
                {t("title")}
              </h1>
              <p className="mt-1 text-sm text-[var(--color-muted)] sm:mt-2 sm:text-base">
                {t("itemCount", {
                  count: hasHydrated ? totalItems : 0,
                  plural: hasHydrated ? plural : "",
                })}
              </p>
            </div>

            {!hasHydrated ? null : isEmpty ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-6 text-8xl text-[var(--color-muted)]">🛍️</div>
                <h2 className="mb-4 font-serif text-3xl font-semibold text-[#1e2a25]">
                  {t("emptyTitle")}
                </h2>
                <p className="mb-8 text-[var(--color-muted)]">{t("emptyDescription")}</p>
                <Link
                  href="/perfumes"
                  className="inline-flex items-center justify-center rounded-full bg-[#588b76] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#4a7563] hover:shadow-lg"
                >
                  {t("emptyCta")}
                </Link>
              </div>
            ) : (
              <div className="mt-7 grid gap-6 lg:mt-10 lg:grid-cols-[2fr_1fr] lg:gap-10">
                <div className="space-y-4 sm:space-y-5">
                  <CartItems
                    items={cartItems}
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeItem}
                  />
                  <CouponCode
                    onApplyCoupon={applyCoupon}
                    currentCode={couponCode}
                    discount={discount}
                  />
                </div>

                <CartSummary
                  subtotal={subtotal}
                  discount={discountAmount}
                  total={total}
                  itemCount={totalItems}
                />
              </div>
            )}
          </Container>
        </section>
      </main>
      {hasHydrated && cartItems.length > 0 ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1e2a25]/10 bg-white/95 px-4 py-3 shadow-[0_-18px_45px_rgba(30,42,37,0.12)] backdrop-blur-xl sm:hidden">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                {t("total")}
              </p>
              <p className="font-serif text-xl font-semibold text-[#1e2a25]">
                {finalTotal} {tCommon("currency")}
              </p>
            </div>
            <Link
              href="/checkout"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#588b76] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(88,139,118,0.24)]"
            >
              {t("checkout")}
            </Link>
          </div>
        </div>
      ) : null}
      <div className="sm:block [&_footer]:pb-24 sm:[&_footer]:pb-0">
        <Footer />
      </div>
    </div>
  );
}
