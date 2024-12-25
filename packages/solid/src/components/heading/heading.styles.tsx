import { tv } from "tailwind-variants";

export const styles = tv({
  base: "font-semibold select-none transition-colors",
  variants: {
    size: {
      default: "text-3xl",
      subheading: "text-2xl",
      lg: "text-xl",
      base: "text-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
