import { cn } from "@/lib/utils";

type Variant = "h1" | "h2" | "h3" | "h4" | "overline" | "body-lg" | "body-md" | "body-sm";

interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function Typography({
  variant = "body-md",
  children,
  className,
  as,
}: TypographyProps) {
  const styles: Record<Variant, string> = {
    h1: "text-5xl md:text-7xl font-serif font-light tracking-tight leading-tight",
    h2: "text-4xl md:text-6xl font-serif font-light leading-tight",
    h3: "text-3xl md:text-4xl font-serif font-light leading-snug",
    h4: "text-2xl md:text-3xl font-serif font-light leading-snug",
    overline: "text-xs font-medium uppercase tracking-widest",
    "body-lg": "text-lg md:text-xl font-light leading-relaxed",
    "body-md": "text-base font-light leading-relaxed",
    "body-sm": "text-sm font-light leading-relaxed",
  };

  const defaultTags: Record<Variant, "h1" | "h2" | "h3" | "h4" | "p" | "span"> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    overline: "span",
    "body-lg": "p",
    "body-md": "p",
    "body-sm": "p",
  };

  const Tag = as || defaultTags[variant];

  return <Tag className={cn(styles[variant], className)}>{children}</Tag>;
}
