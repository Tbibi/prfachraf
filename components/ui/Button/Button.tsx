import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  loading?: boolean;
};

const baseClasses =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-[0.14em] transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#588b76] text-white shadow-[0_14px_34px_rgba(88,139,118,0.28)] hover:-translate-y-0.5 hover:bg-[#4d7c69] hover:shadow-[0_18px_44px_rgba(88,139,118,0.34)] focus-visible:outline-[#588b76]",
  outline:
    "border border-[#588b76]/35 bg-transparent text-[#588b76] hover:-translate-y-0.5 hover:border-[#588b76] hover:bg-[#588b76]/10 hover:shadow-[0_14px_34px_rgba(88,139,118,0.14)] focus-visible:outline-[#588b76]",
  ghost:
    "bg-transparent text-[#588b76] hover:bg-[#588b76]/10 hover:text-[#4d7c69] focus-visible:outline-[#588b76]",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  loading = false,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : null}
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
        {children}
      </span>
    </button>
  );
}
