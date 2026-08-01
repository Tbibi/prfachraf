"use client";

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

type PerfumeFilters = {
  brands: string[];
  maxPrice: number;
  olfactiveFamilies: string[];
  genders: string[];
};

type DesktopFiltersProps = {
  filters: PerfumeFilters;
  onFiltersChange: (filters: PerfumeFilters) => void;
  onReset: () => void;
};

export default function DesktopFilters({ filters, onFiltersChange, onReset }: DesktopFiltersProps) {
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
    <aside className="w-[280px] shrink-0 sticky top-28">
      <div className="rounded-[1.5rem] border border-[#1e2a25]/10 bg-white/60 p-5 shadow-[0_20px_50px_rgba(30,42,37,0.08)] backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-[#1e2a25]/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#588b76]">
              Filtres
            </p>
            <h2 className="mt-1 font-serif text-xl font-semibold text-[#1e2a25]">
              Affiner
            </h2>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors duration-300 hover:text-[#588b76]"
          >
            Reset
          </button>
        </div>

        {/* Filters */}
        <div className="mt-6 space-y-6">
          {/* Brands */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25]">
              Marque
            </h3>
            <div className="max-h-48 overflow-y-auto space-y-2.5">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex cursor-pointer items-center gap-2.5 text-sm text-[var(--color-muted)] hover:text-[#1e2a25] transition-colors duration-300"
                >
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={(e) => handleBrandChange(brand, e.target.checked)}
                    className="h-4 w-4 rounded border-[#588b76]/30 accent-[#588b76]"
                  />
                  <span className="truncate">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25]">
              Prix
            </h3>
            <div className="space-y-3">
              <div className="text-center">
                <span className="text-sm text-[var(--color-muted)]">Jusqu&apos;à</span>
                <span className="ml-1 font-semibold text-[#1e2a25]">{filters.maxPrice} DH</span>
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
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25]">
              Famille Olfactive
            </h3>
            <div className="space-y-2.5">
              {olfactiveFamilies.map((family) => (
                <label
                  key={family}
                  className="flex cursor-pointer items-center gap-2.5 text-sm text-[var(--color-muted)] hover:text-[#1e2a25] transition-colors duration-300"
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
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2a25]">
              Genre
            </h3>
            <div className="space-y-2.5">
              {genders.map((gender) => (
                <label
                  key={gender}
                  className="flex cursor-pointer items-center gap-2.5 text-sm text-[var(--color-muted)] hover:text-[#1e2a25] transition-colors duration-300"
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
    </aside>
  );
}