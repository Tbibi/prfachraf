import Link from "next/link";

type HeaderProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
};

export default function Header({ searchQuery, onSearchChange, sortBy, onSortChange }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-[var(--color-background)] px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(88,139,118,0.16),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(246,246,223,0.9),transparent_32%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px]">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            <li>
              <Link href="/" className="transition-colors duration-300 hover:text-[#588b76]">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#588b76]" aria-current="page">
              Parfums
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#588b76]">
            Collection parfum
          </p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#1e2a25] sm:text-6xl lg:text-8xl">
            Nos Parfums
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg lg:text-xl lg:leading-9">
            Explorez une sélection inspirée des grandes maisons, entre élégance
            florale, bois précieux, muscs propres et sillages ambrés.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <form role="search" className="relative">
            <label htmlFor="perfume-search" className="sr-only">
              Rechercher un parfum
            </label>
            <input
              id="perfume-search"
              type="search"
              name="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Rechercher un parfum, une marque, une note..."
              className="h-14 w-full rounded-full border border-[#1e2a25]/10 bg-white/75 px-6 pr-14 text-sm text-[#1e2a25] shadow-[0_18px_45px_rgba(30,42,37,0.07)] backdrop-blur placeholder:text-[var(--color-muted)] focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10"
            />
            <span
              className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#588b76]"
              aria-hidden="true"
            >
              ⌕
            </span>
          </form>

          <div>
            <label
              htmlFor="perfume-sort"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#588b76]"
            >
              Tri
            </label>
            <select
              id="perfume-sort"
              name="sort"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="h-14 min-w-56 rounded-full border border-[#1e2a25]/10 bg-white/75 px-5 text-sm font-medium text-[#1e2a25] shadow-[0_18px_45px_rgba(30,42,37,0.07)] backdrop-blur focus:border-[#588b76]/40 focus:outline-none focus:ring-4 focus:ring-[#588b76]/10"
            >
              <option value="recommended">Recommandés</option>
              <option value="newest">Nouveautés</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
