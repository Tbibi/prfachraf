"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import CheckoutForm from "@/components/checkout/CheckoutForm/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary/OrderSummary";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Container from "@/components/ui/Container/Container";

const orderItems = [
  {
    id: "1",
    name: "Oud Royal",
    brand: "Achraf Signature",
    volume: "100ml",
    price: 399,
    quantity: 1,
    tone: { primary: "#588b76", secondary: "#f6f6df" },
  },
  {
    id: "2",
    name: "Rose Privée",
    brand: "Maison Florale",
    volume: "50ml",
    price: 249,
    quantity: 2,
    tone: { primary: "#b9868f", secondary: "#fff5f1" },
  },
];

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

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = subtotal >= 300 ? 0 : 30;
  const total = subtotal + shippingCost;

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
