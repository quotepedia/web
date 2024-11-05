import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    root: [
      "group relative inline-flex size-24 items-center justify-center container-size",
      "select-none overflow-hidden rounded-full text-fg-soft ring-1 ring-bg-tertiary transition-shadow",
    ],
    img: ["group-aria-busy:cursor-progress group-aria-busy:animate-pulse"],
    alt: [
      "flex size-full items-center justify-center",
      "bg-bg-default text-cqi-50 font-medium uppercase leading-none transition",
      "group-aria-busy:cursor-progress group-aria-busy:animate-pulse",
    ],
    fallback: ["size-full animate-pulse bg-bg-default"],
  },
});
