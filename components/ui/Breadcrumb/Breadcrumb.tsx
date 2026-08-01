import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
  current?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {item.current ? (
              <span className="text-[#588b76]" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="transition-colors duration-300 hover:text-[#588b76]"
              >
                {item.label}
              </Link>
            )}
            {index < items.length - 1 && (
              <span aria-hidden="true" className="text-[var(--color-muted)]">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}