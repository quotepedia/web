import { tv } from "tailwind-variants";

export const styles = tv({
  base: [
    "inline-flex w-auto select-none items-center justify-center text-nowrap font-medium",
    "transition-[opacity,box-shadow,outline-color,background-color] active:hover:duration-0",
    "outline outline-1 -outline-offset-1 ring-opacity-50 focus-visible:ring",
    "disabled:cursor-not-allowed disabled:opacity-75",
    "aria-disabled:cursor-not-allowed aria-disabled:opacity-75",
    "aria-busy:cursor-progress",
  ],
  variants: {
    size: {
      md: "gap-1 rounded-lg px-3 text-sm leading-8",
      sm: "gap-1 rounded-2xl px-2 text-xs leading-7",
    },
    color: {
      default: [
        "outline-bg-secondary bg-bg-body ring-ring-accent focus-visible:bg-bg-secondary",
        "enabled:hover:bg-bg-default enabled:active:bg-bg-secondary",
        "enabled:hover:outline-bg-tertiary enabled:active:outline-bg-tertiary",
      ],
      dark: [
        "outline-neutral-700 bg-neutral-800 ring-neutral-800 focus-visible:bg-neutral-700",
        "enabled:hover:bg-neutral-700 enabled:active:bg-neutral-600",
      ],
      primary: [
        "outline-blue-800 bg-blue-600 ring-blue-600 focus-visible:bg-blue-700",
        "enabled:hover:bg-blue-700 enabled:active:bg-blue-800",
      ],
      success: [
        "outline-green-800 bg-green-600 ring-green-600 focus-visible:bg-green-700",
        "enabled:hover:bg-green-700 enabled:active:bg-green-800",
      ],
      danger: [
        "outline-red-800 bg-red-600 ring-red-600 focus-visible:bg-red-700",
        "enabled:hover:bg-red-700 enabled:active:bg-red-800",
      ],
    },
  },
  compoundVariants: [
    {
      color: ["dark", "primary", "success", "danger"],
      class: "text-white",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "default",
  },
});
