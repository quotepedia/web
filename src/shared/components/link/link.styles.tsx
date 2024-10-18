import { tv } from "tailwind-variants";

export const styles = tv({
  base: [
    "text-fg-accent cursor-pointer",
    "hover:underline",
    "transition-color duration-75",
    "focus-visible:ring active:hover:duration-0",
    "aria-disabled:cursor-not-allowed aria-disabled:opacity-75 disabled:cursor-not-allowed disabled:opacity-75",
    "aria-busy:cursor-progress",
  ],
});
