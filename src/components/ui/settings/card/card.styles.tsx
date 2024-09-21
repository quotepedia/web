import { tv } from "tailwind-variants";

export const styles = tv({
  base: ["flex select-none transition-[border-color] items-center justify-center", "gap-4 px-4 py-3 w-full"],
  variants: {
    variant: {
      hover: [
        "cursor-pointer outline-none",
        "hover:bg-bg-secondary hover:opacity-75 focus-visible:ring active:opacity-50",
        "disabled:cursor-default disabled:opacity-50 aria-busy:animate-pulse aria-busy:cursor-progress",
      ],
    },
  },
});
