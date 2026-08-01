"use client";

import { useState } from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import CartItems from "@/components/cart/CartItems/CartItems";
import CartSummary from "@/components/cart/CartSummary/CartSummary";
import CouponCode from "@/components/cart/CouponCode/CouponCode";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Container from "@/components/ui/Container/Container";

// Mock cart data
const initialCartItems = [
  {
    id: "1",
    productId: "oud-royal",
    name: "Oud Royal",
    brand: "Achraf Signature",
    image: "",
    volume: "100ml",
    price: 399,
    originalPrice: 449,
    quantity: 1,
    tone: { primary: "#588b76", secondary: "#f6f6df" }
  },
  {
    id: "2",
    productId: "rose-privee",
    name: "Rose Privée",
    brand: "Maison Florale",
    image: "",
    volume: "50ml",
    price: 249,
    originalPrice: 299,
    quantity: 2,
    tone: { primary: "#b9868f", secondary: "#fff5f1" }
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = (code: string) => {
    setCouponCode(code);
    // Mock coupon logic
    if (code.toUpperCase() === "WELCOME10") {
      setDiscount(0.1); // 10% discount
    } else if (code.toUpperCase() === "ACHRAF15") {
      setDiscount(0.15); // 15% discount
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;
  const shippingCost = total >= 300 ? 0 : 30;
  const finalTotal = total + shippingCost;

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <section className="px-4 pb-28 pt-6 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-32 lg:pt-14">
          <Container>
            <Breadcrumb 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Panier", href: "#", current: true },
              ]}
            />

            <div className="mt-6 sm:mt-8">
              <h1 className="font-serif text-3xl font-semibold text-[#1e2a25] sm:text-4xl lg:text-5xl">
                Votre Panier
              </h1>
              <p className="mt-1 text-sm text-[var(--color-muted)] sm:mt-2 sm:text-base">
                {cartItems.length} article{cartItems.length !== 1 ? 's' : ''} dans votre panier
              </p>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-6 text-8xl text-[var(--color-muted)]">🛍️</div>
                <h2 className="mb-4 font-serif text-3xl font-semibold text-[#1e2a25]">
                  Votre panier est vide
                </h2>
                <p className="mb-8 text-[var(--color-muted)]">
                  Découvrez nos parfums d&apos;exception et trouvez votre fragrance idéale
                </p>
                <a
                  href="/parfums"
                  className="inline-flex items-center justify-center rounded-full bg-[#588b76] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#4a7563] hover:shadow-lg"
                >
                  Découvrir nos parfums
                </a>
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
                  itemCount={cartItems.length}
                />
              </div>
            )}
          </Container>
        </section>
      </main>
      {cartItems.length > 0 ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1e2a25]/10 bg-white/95 px-4 py-3 shadow-[0_-18px_45px_rgba(30,42,37,0.12)] backdrop-blur-xl sm:hidden">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Total
              </p>
              <p className="font-serif text-xl font-semibold text-[#1e2a25]">
                {finalTotal} DH
              </p>
            </div>
            <a
              href="/checkout"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#588b76] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(88,139,118,0.24)]"
            >
              Procéder au paiement
            </a>
          </div>
        </div>
      ) : null}
      <div className="sm:block [&_footer]:pb-24 sm:[&_footer]:pb-0">
        <Footer />
      </div>
    </div>
  );
}