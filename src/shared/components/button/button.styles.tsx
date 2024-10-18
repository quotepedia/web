import { tv } from "tailwind-variants";

export const styles = tv({
  base: [
    "text-sm leading-none outline-none text-nowrap",
    "transition-[opacity,box-shadow,border-color,background-color]",
    "focus-visible:ring ring-ring-accent/50 active:hover:duration-0",
    "disabled:cursor-not-allowed disabled:opacity-75",
    "aria-busy:cursor-progress",
  ],
  variants: {
    size: {
      md: "px-3 py-2 gap-2 rounded-lg",
    },
    color: {
      default: [
        "bg-bg-body border-bg-secondary",
        "hover:border-bg-secondary hover:bg-bg-default",
        "active:bg-bg-secondary active:border-bg-tertiary",
      ],
      dark: "bg-neutral-800 hover:bg-neutral-700 border-neutral-900 active:bg-neutral-600 text-neutral-100 ring-neutral-500",
      primary: "bg-blue-500 hover:bg-blue-600 border-blue-600 active:bg-blue-700 text-neutral-100",
      success: "bg-green-600 hover:bg-green-700 active:bg-green-800 border-green-700 text-neutral-100",
      danger: "bg-red-500 hover:bg-red-600 active:bg-red-700 border-red-600 text-neutral-100",
    },
    variant: {
      default: ["font-semibold inline-flex w-auto select-none items-center justify-center", "highlight-black/25 border"],
      hyperlink: ["p-0 !bg-transparent", "text-fg-accent", "hover:underline"],
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    variant: "default",
  },
});
