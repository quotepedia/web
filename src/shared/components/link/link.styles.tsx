import { tv } from "tailwind-variants";

export const styles = tv({
  base: [
    "text-fg-accent cursor-pointer",
    "transition-opacity active:hover:duration-0 duration-75",
    "hover:underline",
    "outline-none focus-visible:underline",
    "disabled:cursor-not-allowed disabled:opacity-75",
    "aria-disabled:cursor-not-allowed aria-disabled:opacity-75",
    "aria-busy:cursor-progress",
  ],
});
