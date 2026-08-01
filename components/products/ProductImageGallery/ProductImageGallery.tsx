"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PerfumeProduct } from "@/components/perfumes/ProductGrid/products";

type ProductImageGalleryProps = {
  product: PerfumeProduct;
};

export default function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const productImages = [
    { src: product.image, alt: `${product.name} - Vue principale` },
    { src: product.image, alt: `${product.name} - Vue de profil` },
    { src: product.image, alt: `${product.name} - Vue arrière` },
    { src: product.image, alt: `${product.name} - Vue détaillée` },
  ];

  const selectedImage = productImages[selectedImageIndex];

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/40 to-gray-50/60 p-8 shadow-[0_24px_60px_rgba(30,42,37,0.08)] backdrop-blur">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImageIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative aspect-[4/5] w-full max-w-md">
              <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 92vw"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
              className="object-cover drop-shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
              />
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Zoom indicator */}
        <button 
          type="button"
          className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#588b76] shadow-lg backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-xl"
          aria-label="Agrandir l'image"
        >
          🔍
        </button>
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-4">
        {productImages.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImageIndex(index)}
            className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-white/60 to-gray-50/40 p-4 shadow-sm transition-all duration-300 hover:shadow-md ${
              index === selectedImageIndex
                ? "ring-2 ring-[#588b76] ring-offset-2 shadow-lg"
                : "hover:ring-1 hover:ring-[#588b76]/30"
            }`}
          >
            <span className="relative block aspect-[4/5] w-full">
              <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="120px"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
              className="object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}