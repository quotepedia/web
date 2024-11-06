import { tv } from "tailwind-variants";

export const styles = tv({
  base: "container mx-auto",
  variants: {
    size: {
      tight: "max-w-sm",
      wide: "max-w-3xl",
    },
    padding: {
      default: "px-4 py-6",
    },
  },
  defaultVariants: {
    padding: "default",
  },
});
