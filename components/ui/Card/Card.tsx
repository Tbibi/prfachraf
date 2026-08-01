import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"article">;

const cardClasses =
  "rounded-2xl border border-gray-200/80 bg-white p-5 shadow-[0_18px_45px_rgba(30,42,37,0.08)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:border-gray-300/80 hover:shadow-[0_24px_60px_rgba(30,42,37,0.12)] motion-safe:hover:-translate-y-1 sm:p-6 lg:p-8";

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <article className={`${cardClasses} ${className}`} {...props}>
      {children}
    </article>
  );
}
