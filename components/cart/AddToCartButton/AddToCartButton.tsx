"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCartStore, CartItem } from "@/lib/stores/cartStore";
import { useToastStore } from "@/components/ui/Toast/Toast";
import Button from "@/components/ui/Button/Button";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    brand: string;
    price: string;
    tone: {
      primary: string;
      secondary: string;
    };
  };
  volume?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showMiniCart?: boolean;
};

export default function AddToCartButton({ 
  product, 
  volume,
  className = "",
  children,
  variant = "primary",
  size = "md",
  showMiniCart = true
}: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);
  const { addItem, openCart } = useCartStore();
  const { addToast } = useToastStore();

  const handleAddToCart = async () => {
    if (isAdding) return;
    
    setIsAdding(true);
    
    // Extract numeric price
    const numericPrice = parseInt(product.price.replace(/\D/g, ""));
    
    // Create cart item
    const cartItem: Omit<CartItem, 'quantity'> = {
      id: volume ? `${product.id}-${volume}` : product.id,
      name: product.name,
      brand: product.brand,
      price: numericPrice,
      image: "", // Will be generated dynamically
      volume,
      tone: product.tone,
    };

    // Add to cart
    addItem(cartItem);
    
    // Show success toast
    addToast({
      type: 'success',
      message: `${product.name} ajouté au panier`,
      duration: 2000
    });

    // Brief loading state for visual feedback
    setTimeout(() => {
      setIsAdding(false);
      
      // Open mini cart after a short delay
      if (showMiniCart) {
        setTimeout(() => {
          openCart();
        }, 300);
      }
    }, 600);
  };

  const buttonSizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-base"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      <Button
        variant={variant}
        onClick={handleAddToCart}
        disabled={isAdding}
        loading={isAdding}
        className={`w-full font-semibold transition-all duration-300 ${buttonSizes[size]}`}
      >
        {isAdding ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            <span>Ajout en cours...</span>
          </motion.div>
        ) : (
          children || (
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <span>🛍️</span>
              <span>Ajouter au panier</span>
            </motion.div>
          )
        )}
      </Button>
    </motion.div>
  );
}