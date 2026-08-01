import ProductCard from "../ProductCard/ProductCard";
import { PerfumeProduct } from "./products";

type ProductGridProps = {
  products: PerfumeProduct[];
  totalCount: number;
};

export default function ProductGrid({ products, totalCount }: ProductGridProps) {
  return (
    <section aria-labelledby="products-title" className="min-w-0 flex-1">
      <div className="mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#588b76]">
            Catalogue
          </p>
          <h2
            id="products-title"
            className="mt-2 font-serif text-3xl font-semibold tracking-[-0.04em] text-[#1e2a25] sm:text-4xl"
          >
            {totalCount} parfum{totalCount !== 1 ? 's' : ''} {totalCount < 12 ? 'trouvé' + (totalCount !== 1 ? 's' : '') : 'sélectionnés'}
          </h2>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 text-6xl text-[var(--color-muted)]">🔍</div>
          <h3 className="mb-2 font-serif text-2xl font-semibold text-[#1e2a25]">
            Aucun parfum trouvé
          </h3>
          <p className="text-[var(--color-muted)]">
            Essayez de modifier vos critères de recherche ou filtres.
          </p>
        </div>
      )}
    </section>
  );
}
