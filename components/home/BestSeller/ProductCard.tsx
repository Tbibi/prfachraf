import Image from "next/image";
import type { FeaturedProduct } from "./products";

type ProductCardProps = {
  product: FeaturedProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Bonjour Achraf Parfums, je souhaite commander ${product.name}.`
  );

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#1e2a25]/10 bg-white shadow-[0_22px_60px_rgba(30,42,37,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_rgba(30,42,37,0.14)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f6df]">
        <Image
          src={product.image}
          alt={`Flacon ${product.name} par Achraf Parfums`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#588b76] shadow-sm backdrop-blur">
          {product.category}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-[-0.03em] text-[#1e2a25]">
              {product.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              {product.description}
            </p>
          </div>
          <p className="shrink-0 rounded-full bg-[#f6f6df] px-3 py-1.5 text-sm font-semibold text-[#1e2a25]">
            {product.price}
          </p>
        </div>

        <a
          href={`https://wa.me/?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Commander ${product.name} sur WhatsApp`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#588b76] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_14px_34px_rgba(88,139,118,0.26)] transition-all duration-300 hover:bg-[#4d7c69] hover:shadow-[0_18px_44px_rgba(88,139,118,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#588b76]"
        >
          Commander sur WhatsApp
        </a>
      </div>
    </article>
  );
}
