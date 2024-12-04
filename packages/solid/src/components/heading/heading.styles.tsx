import { tv } from "tailwind-variants";

export const styles = tv({
  base: "font-semibold select-none transition-colors",
  variants: {
    size: {
      default: "text-2xl",
      subheading: "text-xl",
      lg: "text-lg",
      base: "text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
