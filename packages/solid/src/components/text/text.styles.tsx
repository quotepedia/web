import { tv } from "tailwind-variants";

export const styles = tv({
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    variant: {
      default: "text-fg-body",
      soft: "text-fg-soft",
      muted: "text-fg-muted",
      success: "text-green-600",
      danger: "text-red-600",
      accent: "text-fg-accent",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});
