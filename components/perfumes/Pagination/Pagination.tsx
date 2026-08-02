type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();
  return (
    <nav
      aria-label="Pagination des parfums"
      className="mt-14 flex flex-wrap items-center justify-center gap-3"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex h-11 items-center justify-center rounded-full border border-[#1e2a25]/10 bg-white px-5 text-sm font-semibold text-[var(--color-muted)] shadow-sm transition-all duration-300 hover:border-[#588b76]/30 hover:text-[#588b76] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#1e2a25]/10 disabled:hover:text-[var(--color-muted)]"
      >
        Précédent
      </button>

      {visiblePages.map((page) => {
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76] ${
              isActive
                ? "bg-[#588b76] text-white shadow-[0_14px_34px_rgba(88,139,118,0.24)]"
                : "border border-[#1e2a25]/10 bg-white text-[var(--color-muted)] shadow-sm hover:border-[#588b76]/30 hover:text-[#588b76]"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex h-11 items-center justify-center rounded-full border border-[#1e2a25]/10 bg-white px-5 text-sm font-semibold text-[var(--color-muted)] shadow-sm transition-all duration-300 hover:border-[#588b76]/30 hover:text-[#588b76] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#1e2a25]/10 disabled:hover:text-[var(--color-muted)]"
      >
        Suivant
      </button>
    </nav>
  );
}
