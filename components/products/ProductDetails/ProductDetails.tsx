"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PerfumeProduct } from "@/components/perfumes/ProductGrid/products";
import Badge from "@/components/ui/Badge/Badge";
import Button from "@/components/ui/Button/Button";
import AddToCartButton from "@/components/cart/AddToCartButton/AddToCartButton";

type ProductDetailsProps = {
  product: PerfumeProduct;
};

const volumes = ["50ml", "100ml", "150ml"];
const prices = {
  "50ml": { current: "249 DH", old: "299 DH" },
  "100ml": { current: "399 DH", old: "449 DH" },
  "150ml": { current: "549 DH", old: "599 DH" },
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedVolume, setSelectedVolume] = useState("100ml");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour! Je souhaite commander le parfum "${product.name}" - ${selectedVolume} (Quantité: ${quantity}). Prix: ${prices[selectedVolume as keyof typeof prices].current}`
  );

  const whatsappLink = `https://wa.me/212600000000?text=${whatsappMessage}`;

  return (
    <div className="space-y-8">
      {/* Product Title & Rating */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="primary">{product.badge}</Badge>
          <span className="text-sm text-[var(--color-muted)]">{product.availability}</span>
        </div>
        
        <h1 className="font-serif text-4xl font-semibold text-[#1e2a25] lg:text-5xl">
          {product.name}
        </h1>
        
        <p className="mt-2 text-lg text-[var(--color-muted)]">
          par <span className="font-medium text-[#588b76]">{product.brand}</span>
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className="text-lg">★</span>
            ))}
          </div>
          <span className="text-sm text-[var(--color-muted)]">(4.8) · 124 avis</span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-3xl font-semibold text-[#1e2a25]">
            {prices[selectedVolume as keyof typeof prices].current}
          </span>
          <span className="text-lg text-[var(--color-muted)] line-through">
            {prices[selectedVolume as keyof typeof prices].old}
          </span>
          <Badge variant="success">-12%</Badge>
        </div>
        <p className="text-sm text-[var(--color-muted)]">
          Prix dégressifs disponibles · Livraison gratuite dès 300 DH
        </p>
      </div>

      {/* Description */}
      <div className="prose max-w-none">
        <p className="text-[var(--color-muted)] leading-relaxed">
          Une création olfactive exceptionnelle qui capture l&apos;essence de {product.notes.toLowerCase()}. 
          Cette fragrance sophistiquée révèle des accords subtils qui évoluent tout au long de la journée, 
          offrant une expérience sensorielle unique et mémorable.
        </p>
      </div>

      {/* Volume Selection */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25]">
          Volume
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {volumes.map((volume) => (
            <motion.button
              key={volume}
              type="button"
              onClick={() => setSelectedVolume(volume)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative rounded-xl border-2 p-4 text-center transition-all duration-300 ${
                selectedVolume === volume
                  ? "border-[#588b76] bg-[#588b76]/5 text-[#588b76]"
                  : "border-[#1e2a25]/10 bg-white hover:border-[#588b76]/30"
              }`}
            >
              <div className="font-medium">{volume}</div>
              <div className="text-xs text-[var(--color-muted)] mt-1">
                {prices[volume as keyof typeof prices].current}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25]">
          Quantité
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-full border border-[#1e2a25]/10 bg-white">
            <button
              type="button"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-[#588b76] transition-colors duration-300 hover:bg-[#588b76]/5 disabled:opacity-50"
            >
              -
            </button>
            <span className="min-w-[3rem] text-center font-medium">{quantity}</span>
            <button
              type="button"
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= 10}
              className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-[#588b76] transition-colors duration-300 hover:bg-[#588b76]/5 disabled:opacity-50"
            >
              +
            </button>
          </div>
          <p className="text-sm text-[var(--color-muted)]">Maximum 10 par commande</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <AddToCartButton
          product={{
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: prices[selectedVolume as keyof typeof prices].current,
            tone: product.tone,
          }}
          volume={selectedVolume}
          size="lg"
        />
        
        <Button
          variant="outline"
          className="w-full h-14 text-base font-semibold"
          onClick={() => window.open(whatsappLink, '_blank')}
        >
          <span className="mr-2">💬</span>
          Commander sur WhatsApp
        </Button>
      </div>

      {/* Additional Info */}
      <div className="space-y-4 rounded-xl bg-gradient-to-r from-[#588b76]/5 to-transparent p-6 border border-[#588b76]/10">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-green-600">✓</span>
          <span>Authenticité garantie</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-green-600">✓</span>
          <span>Livraison rapide partout au Maroc</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-green-600">✓</span>
          <span>Retour gratuit sous 14 jours</span>
        </div>
      </div>
    </div>
  );
}