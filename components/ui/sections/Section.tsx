import type { ComponentPropsWithoutRef } from "react";

type SectionSpacing = "none" | "sm" | "md" | "lg";
type SectionBackground = "transparent" | "background" | "surface" | "secondary";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: SectionSpacing;
  background?: SectionBackground;
};

const spacingClasses: Record<SectionSpacing, string> = {
  none: "py-0",
  sm: "py-10 sm:py-12 lg:py-16",
  md: "py-14 sm:py-16 lg:py-24",
  lg: "py-20 sm:py-24 lg:py-32",
};

const backgroundClasses: Record<SectionBackground, string> = {
  transparent: "bg-transparent",
  background: "bg-[var(--color-background)]",
  surface: "bg-[var(--color-surface)]",
  secondary: "bg-[var(--color-secondary)]",
};

export default function Section({
  children,
  className = "",
  spacing = "lg",
  background = "transparent",
  ...props
}: SectionProps) {
  return (
    <section
      className={`${spacingClasses[spacing]} ${backgroundClasses[background]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
