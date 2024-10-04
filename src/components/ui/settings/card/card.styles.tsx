import { tv } from "tailwind-variants";

export const styles = tv({
  base: ["flex select-none transition-[border-color] items-center justify-center", "gap-3 px-3 py-2.5 w-full"],
  variants: {
    variant: {
      hover: [
        "cursor-pointer outline-none",
        "hover:bg-bg-secondary focus-visible:bg-bg-secondary active:opacity-75",
        "disabled:cursor-default disabled:opacity-50 aria-busy:animate-pulse aria-busy:cursor-progress",
      ],
    },
  },
});
