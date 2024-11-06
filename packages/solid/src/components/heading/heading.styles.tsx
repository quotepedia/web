import { tv } from "tailwind-variants";

export const styles = tv({
  base: "font-semibold",
  variants: {
    size: {
      default: "text-2xl",
      subheading: "text-xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
