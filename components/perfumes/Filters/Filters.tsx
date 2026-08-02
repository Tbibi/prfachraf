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
const olfactiveFamilies = ["Boisé", "Floral", "Ambré", "Musqué", "Frais"];
const genders = ["Homme", "Femme", "Mixte"];

type PerfumeFilters = {
  brands: string[];
  maxPrice: number;
  olfactiveFamilies: string[];
  genders: string[];
};

type FiltersProps = {
  filters: PerfumeFilters;
  onFiltersChange: (filters: PerfumeFilters) => void;
};

export default function Filters({ filters, onFiltersChange }: FiltersProps) {
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

  const handleReset = () => {
    onFiltersChange({
      brands: [],
      maxPrice: 500,
      olfactiveFamilies: [],
      genders: [],
    });
  };

  return (
    <aside className="rounded-[2rem] border border-[#1e2a25]/10 bg-white/78 p-5 shadow-[0_22px_60px_rgba(30,42,37,0.08)] backdrop-blur-xl lg:sticky lg:top-28 lg:w-80 lg:shrink-0">
      <div className="flex items-center justify-between gap-4 border-b border-[#1e2a25]/10 pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#588b76]">
            Filtres
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-[#1e2a25]">
            Affiner
          </h2>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] transition-colors duration-300 hover:text-[#588b76]"
        >
          Reset
        </button>
      </div>

      <form className="mt-6 space-y-8">
        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1e2a25]">
            Marque
          </legend>
          <div className="mt-4 space-y-3">
            {brands.map((brand) => (
              <label
                key={brand}
                className="flex cursor-pointer items-center gap-3 text-sm text-[var(--color-muted)]"
              >
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  checked={filters.brands.includes(brand)}
                  onChange={(e) => handleBrandChange(brand, e.target.checked)}
                  className="h-4 w-4 rounded border-[#588b76]/30 accent-[#588b76]"
                />
                {brand}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1e2a25]">
            Prix
          </legend>
          <label htmlFor="price-range" className="mt-4 block text-sm text-[var(--color-muted)]">
            Jusqu&apos;à <span className="font-semibold text-[#1e2a25]">{filters.maxPrice} DH</span>
          </label>
          <input
            id="price-range"
            type="range"
            min="200"
            max="500"
            step="10"
            value={filters.maxPrice}
            onChange={(event) => handlePriceChange(Number(event.target.value))}
            className="mt-4 w-full accent-[#588b76]"
          />
          <div className="mt-2 flex justify-between text-xs text-[var(--color-muted)]">
            <span>200 DH</span>
            <span>500 DH</span>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1e2a25]">
            Famille Olfactive
          </legend>
          <div className="mt-4 space-y-3">
            {olfactiveFamilies.map((family) => (
              <label
                key={family}
                className="flex cursor-pointer items-center gap-3 text-sm text-[var(--color-muted)]"
              >
                <input
                  type="checkbox"
                  name="olfactive-family"
                  value={family}
                  checked={filters.olfactiveFamilies.includes(family)}
                  onChange={(e) => handleOlfactiveFamilyChange(family, e.target.checked)}
                  className="h-4 w-4 rounded border-[#588b76]/30 accent-[#588b76]"
                />
                {family}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1e2a25]">
            Genre
          </legend>
          <div className="mt-4 space-y-3">
            {genders.map((gender) => (
              <label
                key={gender}
                className="flex cursor-pointer items-center gap-3 text-sm text-[var(--color-muted)]"
              >
                <input
                  type="checkbox"
                  name="gender"
                  value={gender}
                  checked={filters.genders.includes(gender)}
                  onChange={(e) => handleGenderChange(gender, e.target.checked)}
                  className="h-4 w-4 rounded border-[#588b76]/30 accent-[#588b76]"
                />
                {gender}
              </label>
            ))}
          </div>
        </fieldset>
      </form>
    </aside>
  );
}
