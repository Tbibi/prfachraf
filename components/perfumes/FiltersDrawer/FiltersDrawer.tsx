"use client";

import { useTranslations } from "next-intl";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Button from "@/components/ui/Button/Button";

type PerfumeFilters = {
  brands: string[];
  maxPrice: number;
  olfactiveFamilies: string[];
  genders: string[];
};

type FiltersDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  filters: PerfumeFilters;
  onFiltersChange: (filters: PerfumeFilters) => void;
  onApply: () => void;
  onReset: () => void;
};

const brands = [
  "Achraf Signature",
  "Maison Florale", 
  "Pure Collection",
  "Atelier Privé",
  "Nocturne",
  "Riviera",
  "Gourmand Luxe",
  "Royal Woods",
  "Floral Couture",
  "Fresh Line",
  "Evening Blend",
  "Soft Maison",
];

const olfactiveFamilies = ["Oriental", "Boisé", "Niche", "Floral", "Ambré", "Musqué", "Frais"];
const genders = ["Homme", "Femme", "Mixte"];

export default function FiltersDrawer({ 
  isOpen, 
  onClose, 
  filters, 
  onFiltersChange, 
  onApply, 
  onReset 
}: FiltersDrawerProps) {
  const t = useTranslations("Perfumes");
  
  // Prevent body scroll when drawer is open
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
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked
      ? [...filters.brands, brand]
      : filters.brands.filter(b => b !== brand);
    onFiltersChange({ ...filters, brands: newBrands });
  };

  const handlePriceChange = (maxPrice: number) => {
    onFiltersChange({ ...filters, maxPrice });
  };

  const handleOlfactiveFamilyChange = (family: string, checked: boolean) => {
    const newFamilies = checked
      ? [...filters.olfactiveFamilies, family]
      : filters.olfactiveFamilies.filter(f => f !== family);
    onFiltersChange({ ...filters, olfactiveFamilies: newFamilies });
  };

  const handleGenderChange = (gender: string, checked: boolean) => {
    const newGenders = checked
      ? [...filters.genders, gender]
      : filters.genders.filter(g => g !== gender);
    onFiltersChange({ ...filters, genders: newGenders });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#1e2a25]/10 p-6">
              <div>
                <h2 className="font-serif text-xl font-semibold text-[#1e2a25]">{t("filters")}</h2>
                <p className="text-sm text-[var(--color-muted)] mt-1">
                  Affiner votre recherche
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-muted)] hover:bg-[#1e2a25]/5 hover:text-[#1e2a25] transition-colors duration-300"
                aria-label="Fermer les filtres"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-8 p-6">
                {/* Brands */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25]">
                    Marque
                  </h3>
                  <div className="max-h-48 overflow-y-auto space-y-3">
                    {brands.map((brand) => (
                      <label
                        key={brand}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[var(--color-muted)]"
                      >
                        <input
                          type="checkbox"
                          checked={filters.brands.includes(brand)}
                          onChange={(e) => handleBrandChange(brand, e.target.checked)}
                          className="h-4 w-4 rounded border-[#588b76]/30 accent-[#588b76]"
                        />
                        {brand}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25]">
                    Prix maximum
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="inline-block rounded-full bg-[#588b76]/10 px-4 py-2 font-semibold text-[#1e2a25]">
                        {filters.maxPrice} DH
                      </span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="500"
                      step="10"
                      value={filters.maxPrice}
                      onChange={(e) => handlePriceChange(Number(e.target.value))}
                      className="w-full accent-[#588b76]"
                    />
                    <div className="flex justify-between text-xs text-[var(--color-muted)]">
                      <span>200 DH</span>
                      <span>500 DH</span>
                    </div>
                  </div>
                </div>

                {/* Olfactive Families */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25]">
                    Famille Olfactive
                  </h3>
                  <div className="space-y-3">
                    {olfactiveFamilies.map((family) => (
                      <label
                        key={family}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[var(--color-muted)]"
                      >
                        <input
                          type="checkbox"
                          checked={filters.olfactiveFamilies.includes(family)}
                          onChange={(e) => handleOlfactiveFamilyChange(family, e.target.checked)}
                          className="h-4 w-4 rounded border-[#588b76]/30 accent-[#588b76]"
                        />
                        {family}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25]">
                    Genre
                  </h3>
                  <div className="space-y-3">
                    {genders.map((gender) => (
                      <label
                        key={gender}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[var(--color-muted)]"
                      >
                        <input
                          type="checkbox"
                          checked={filters.genders.includes(gender)}
                          onChange={(e) => handleGenderChange(gender, e.target.checked)}
                          className="h-4 w-4 rounded border-[#588b76]/30 accent-[#588b76]"
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t border-[#1e2a25]/10 p-6">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={onReset}
                  className="flex-1 h-12"
                >
                  {t("clearFilters")}
                </Button>
                <Button
                  variant="primary"
                  onClick={onApply}
                  className="flex-1 h-12"
                >
                  Appliquer
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}