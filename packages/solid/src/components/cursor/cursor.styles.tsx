import { tv } from "tailwind-variants";

export const styles = tv({
  base: "h-full w-0.5 rounded-full bg-fg-body",
  variants: {
    flash: {
      true: "animate-flash",
    },
  },
  defaultVariants: {
    flash: true,
  },
});
