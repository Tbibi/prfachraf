"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCartStore, type CartItem } from "@/lib/stores/cartStore";
import Button from "@/components/ui/Button/Button";

const createProductImage = (tone: { primary: string; secondary: string }, size = 80) => {
  const svgString = `<svg width="${size}" height="${size * 1.2}" viewBox="0 0 ${size} ${size * 1.2}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bottleGradient${tone.primary}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${tone.primary};stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:${tone.primary};stop-opacity:0.95" />
      </linearGradient>
    </defs>
    <rect width="${size}" height="${size * 1.2}" fill="${tone.secondary}" opacity="0.1"/>
    <rect x="${size * 0.25}" y="${size * 0.2}" width="${size * 0.5}" height="${size * 0.7}" rx="4" fill="url(#bottleGradient${tone.primary})"/>
    <rect x="${size * 0.2}" y="${size * 0.15}" width="${size * 0.6}" height="${size * 0.15}" rx="2" fill="${tone.primary}" opacity="0.6"/>
  </svg>`;
  
  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

export default function MiniCart() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalItems, getTotalPrice } = useCartStore();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeCart]);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
          />

          {/* Desktop Cart - Slide from right */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[9999] h-full w-full max-w-md bg-white shadow-2xl flex flex-col hidden sm:flex"
          >
            <CartContent 
              items={items}
              totalItems={totalItems}
              totalPrice={totalPrice}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              closeCart={closeCart}
            />
          </motion.div>

          {/* Mobile Cart - Slide from bottom */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 z-[9999] h-[85vh] w-full bg-white shadow-2xl flex flex-col sm:hidden rounded-t-3xl"
          >
            {/* Mobile Handle */}
            <div className="flex justify-center py-3">
              <div className="h-1.5 w-12 rounded-full bg-gray-200"></div>
            </div>
            
            <CartContent 
              items={items}
              totalItems={totalItems}
              totalPrice={totalPrice}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              closeCart={closeCart}
              isMobile={true}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

type CartContentProps = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  closeCart: () => void;
  isMobile?: boolean;
};

function CartContent({ 
  items, 
  totalItems, 
  totalPrice, 
  updateQuantity, 
  removeItem, 
  closeCart,
}: CartContentProps) {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e2a25]/10 p-6">
        <div>
          <h2 className="font-serif text-xl font-semibold text-[#1e2a25]">
            Panier ({totalItems})
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            {totalItems} article{totalItems !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={closeCart}
          className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-muted)] hover:bg-[#1e2a25]/5 hover:text-[#1e2a25] transition-colors duration-300"
          aria-label="Fermer le panier"
        >
          ✕
        </button>
      </div>

      {/* Cart Items */}
      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 text-6xl text-[var(--color-muted)]">🛍️</div>
          <h3 className="mb-2 font-serif text-xl font-semibold text-[#1e2a25]">
            Votre panier est vide
          </h3>
          <p className="text-[var(--color-muted)] mb-6">
            Découvrez nos parfums d&apos;exception
          </p>
          <Button
            variant="primary"
            onClick={() => {
              closeCart();
              window.location.href = '/parfums';
            }}
            className="px-6"
          >
            Découvrir nos parfums
          </Button>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex gap-4 rounded-xl bg-gradient-to-r from-[#f6f6df]/20 to-transparent p-4 border border-[#1e2a25]/5"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <div className="h-16 w-12 overflow-hidden rounded-lg bg-gradient-to-br from-white/40 to-gray-50/60 p-2">
                      <Image
                        src={createProductImage(item.tone, 48)}
                        alt={item.name}
                        width={48}
                        height={58}
                        unoptimized
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#1e2a25] text-sm leading-tight line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--color-muted)] mt-0.5">{item.brand}</p>
                    {item.volume && (
                      <p className="text-xs text-[var(--color-muted)]">{item.volume}</p>
                    )}
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-semibold text-[#1e2a25] text-sm">
                        {item.price} DH
                      </span>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center rounded-full border border-[#1e2a25]/10 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-xs font-semibold text-[#588b76] transition-colors duration-300 hover:bg-[#588b76]/5"
                        >
                          -
                        </button>
                        <span className="min-w-[1.5rem] text-center text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center text-xs font-semibold text-[#588b76] transition-colors duration-300 hover:bg-[#588b76]/5"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex-shrink-0 text-[var(--color-muted)] hover:text-red-500 transition-colors duration-300 p-1"
                    aria-label={`Supprimer ${item.name}`}
                  >
                    <span className="text-sm">🗑️</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-[#1e2a25]/10 p-6">
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-[#1e2a25]">Sous-total</span>
              <span className="font-serif text-xl font-semibold text-[#1e2a25]">
                {totalPrice} DH
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/cart" onClick={closeCart}>
                <Button
                  variant="primary"
                  className="w-full h-12 text-sm font-semibold"
                >
                  Voir le panier
                </Button>
              </Link>
              
              <Button
                variant="outline"
                onClick={closeCart}
                className="w-full h-12 text-sm font-semibold"
              >
                Continuer mes achats
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}