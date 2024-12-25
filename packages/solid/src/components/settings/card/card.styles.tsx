import { tv } from "tailwind-variants";

export const styles = tv({
  base: [
    "flex select-none transition-[border-color,background-color,opacity] active:duration-0 items-center justify-center",
    "gap-3 px-3 py-2.5 w-full",
  ],
  variants: {
    variant: {
      hover: [
        "cursor-pointer outline-none",
        "hover:bg-bg-secondary active:bg-bg-secondary focus-visible:bg-bg-secondary active:opacity-75",
        "aria-busy:animate-pulse aria-busy:cursor-progress",
        "disabled:cursor-default disabled:opacity-50 data-[disabled]:cursor-default data-[disabled]:opacity-50 data-[checked]:cursor-default",
      ],
    },
  },
});
