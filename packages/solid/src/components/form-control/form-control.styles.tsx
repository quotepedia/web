import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    label: "flex gap-1",
    button: [
      "flex justify-center items-center",
      "text-fg-muted px-0.5 first-of-type:ps-1 last-of-type:pe-1.5 outline-none transition-opacity",
      "hover:opacity-75 focus-visible:opacity-75 active:opacity-50 active:duration-0",
    ],
  },
  variants: {
    required: {
      true: {
        label: "after:content-['*'] after:text-red-600",
      },
    },
  },
});
