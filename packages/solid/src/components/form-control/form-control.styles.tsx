import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    label: "flex gap-1",
  },
  variants: {
    required: {
      true: {
        label: "after:content-['*'] after:text-red-600",
      },
    },
  },
});
