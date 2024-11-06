import { tv } from "tailwind-variants";

export const styles = tv({
  base: "shrink-0 border-bg-tertiary transition-colors",
  variants: {
    orientation: {
      vertical: "h-full w-px",
      horizontal: "h-px w-full",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});
