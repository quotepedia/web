import { tv } from "tailwind-variants";

export const styles = tv({
  base: [
    "text-fg-accent cursor-pointer select-none",
    "transition-opacity duration-75",
    "hover:opacity-75 active:hover:opacity-50 active:duration-0",
    "outline-none focus-visible:underline",
    "disabled:cursor-not-allowed disabled:opacity-75",
    "aria-disabled:cursor-not-allowed aria-disabled:opacity-75",
    "aria-busy:cursor-progress",
  ],
});
