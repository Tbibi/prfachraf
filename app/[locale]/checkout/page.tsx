"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import CheckoutForm from "@/components/checkout/CheckoutForm/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary/OrderSummary";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Container from "@/components/ui/Container/Container";
import { useCartStore } from "@/lib/stores/cartStore";

type OrderData = {
  customer: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
  shipping: {
    city: string;
    address: string;
    deliveryMethod: string;
  };
  payment: {
    method: string;
  };
};

export default function CheckoutPage() {
  const t = useTranslations("Checkout");
  const tCommon = useTranslations("Common");
  const router = useRouter();
  const { items: cartItems, getTotalItems } = useCartStore();
  const [hasHydrated, setHasHydrated] = useState(false);
  const [, setOrderData] = useState<OrderData>({
    customer: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    shipping: {
      city: "",
      address: "",
      deliveryMethod: "standard",
    },
    payment: {
      method: "cod",
    },
  });

  // Handle hydration to avoid hydration mismatches
  useEffect(() => {
    const finishHydration = () => setHasHydrated(true);

    if (useCartStore.persist.hasHydrated()) {
      finishHydration();
      return;
    }

    return useCartStore.persist.onFinishHydration(finishHydration);
  }, []);

  // Redirect to cart if no items
  useEffect(() => {
    if (hasHydrated && cartItems.length === 0) {
      router.push("/cart");
    }
  }, [hasHydrated, cartItems.length, router]);

  // Convert CartItem[] to OrderItem[] format for OrderSummary
  const orderItems = cartItems.map(item => ({
    id: item.id,
    name: item.name,
    brand: item.brand,
    volume: item.volume || "100ml", // fallback if volume is undefined
    price: item.price,
    quantity: item.quantity,
    image: item.image,
    tone: item.tone,
  }));

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = subtotal >= 300 ? 0 : 30;
  const total = subtotal + shippingCost;

  // Don't render until hydrated and cart has items
  if (!hasHydrated || cartItems.length === 0) {
    return null;
  }

  const handleOrderSubmit = (data: OrderData) => {
    setOrderData(data);
    alert(t("successAlert"));
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <section className="px-4 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pb-32 lg:pt-16">
          <Container>
            <Breadcrumb
              items={[
                { label: tCommon("home"), href: "/" },
                { label: t("breadcrumbCart"), href: "/cart" },
                { label: t("breadcrumbCheckout"), href: "#", current: true },
              ]}
            />

            <div className="mt-6 sm:mt-8">
              <h1 className="font-serif text-3xl font-semibold text-[#1e2a25] sm:text-4xl lg:text-5xl">
                {t("title")}
              </h1>
              <p className="mt-2 text-[var(--color-muted)]">{t("subtitle")}</p>
            </div>

            <div className="mt-8 grid gap-8 sm:mt-12 sm:gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
              <CheckoutForm onSubmit={handleOrderSubmit} />
              <OrderSummary
                items={orderItems}
                subtotal={subtotal}
                shippingCost={shippingCost}
                total={total}
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
