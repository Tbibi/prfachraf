import type { ComponentPropsWithoutRef } from "react";

type BadgeVariant = "primary" | "secondary" | "success" | "outline";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

const baseClasses =
  "inline-flex items-center rounded-full px-3 py-1 text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.18em] shadow-sm sm:px-3.5 sm:py-1.5 sm:text-xs";

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-[#588b76] text-white shadow-[#588b76]/20",
  secondary: "bg-[#f6f6df] text-[#1e2a25] shadow-[#1e2a25]/5",
  success: "bg-emerald-50 text-emerald-700 shadow-emerald-900/5",
  outline: "border border-[#588b76]/25 bg-white text-[#588b76] shadow-[#1e2a25]/5",
};

export default function Badge({
  children,
  className = "",
  variant = "primary",
  ...props
}: BadgeProps) {
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}
