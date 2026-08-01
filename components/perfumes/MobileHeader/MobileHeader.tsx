"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container/Container";

type MobileHeaderProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  activeFiltersCount: number;
  onOpenFilters: () => void;
  totalCount: number;
};

export default function MobileHeader({ 
  searchQuery, 
  onSearchChange, 
  sortBy, 
  onSortChange,
  activeFiltersCount,
  onOpenFilters,
  totalCount
}: MobileHeaderProps) {
  return (
    <div className="border-b border-[#1e2a25]/10 bg-white/80 backdrop-blur-sm sticky top-[72px] z-30 lg:hidden">
      <Container>
        <div className="py-4 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Rechercher un parfum, une marque..."
              className="w-full h-12 rounded-full border border-[#1e2a25]/10 bg-white px-6 pr-12 text-sm text-[#1e2a25] shadow-sm placeholder:text-[var(--color-muted)] focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10"
            />
            <span
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#588b76]"
              aria-hidden="true"
            >
              🔍
            </span>
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between">
            {/* Results Count */}
            <div className="flex-1">
              <p className="text-sm font-medium text-[#1e2a25]">
                {totalCount} parfum{totalCount !== 1 ? 's' : ''}
                {totalCount < 12 && searchQuery ? (
                  <span className="text-[var(--color-muted)]"> trouvé{totalCount !== 1 ? 's' : ''}</span>
                ) : null}
              </p>
            </div>

            {/* Sort & Filters */}
            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="appearance-none rounded-full border border-[#1e2a25]/10 bg-white pl-4 pr-10 py-2.5 text-sm font-medium text-[#1e2a25] focus:border-[#588b76]/40 focus:outline-none focus:ring-2 focus:ring-[#588b76]/20"
                >
                  <option value="recommended">Recommandés</option>
                  <option value="newest">Nouveautés</option>
                  <option value="bestseller">Best Sellers</option>
                  <option value="price-asc">Prix ↑</option>
                  <option value="price-desc">Prix ↓</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <svg className="h-4 w-4 text-[var(--color-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Filters Button */}
              <motion.button
                type="button"
                onClick={onOpenFilters}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center gap-2 rounded-full border border-[#1e2a25]/10 bg-white px-4 py-2.5 text-sm font-medium text-[#1e2a25] shadow-sm transition-all duration-300 hover:border-[#588b76]/40 hover:shadow-md focus:border-[#588b76]/40 focus:outline-none focus:ring-2 focus:ring-[#588b76]/20"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                <span>Filtres</span>
                
                {/* Active Filters Badge */}
                {activeFiltersCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#588b76] text-xs font-semibold text-white"
                  >
                    {activeFiltersCount}
                  </motion.div>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}