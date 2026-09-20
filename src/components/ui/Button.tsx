import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  external,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 rounded-full";

  const variants = {
    primary: "bg-seacliff-navy text-white hover:bg-seacliff-gold hover:text-seacliff-navy",
    secondary: "border border-white text-white hover:bg-white hover:text-seacliff-navy",
    tertiary: "border border-seacliff-navy text-seacliff-navy hover:bg-seacliff-navy hover:text-white",
  };

  const sizes = {
    sm: "text-xs px-5 py-2",
    md: "text-xs px-7 py-3",
    lg: "text-sm px-9 py-4",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
