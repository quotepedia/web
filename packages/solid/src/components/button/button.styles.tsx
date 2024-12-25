import { tv } from "tailwind-variants";

export const styles = tv({
  base: [
    "relative w-auto overflow-hidden",
    "text-nowrap font-medium select-none",
    "inline-flex items-center justify-center",
    "outline outline-1 -outline-offset-1 ring-opacity-50 focus-visible:ring",
    "aria-busy:cursor-progress",
    "aria-disabled:pointer-events-none aria-disabled:opacity-75",
    "disabled:pointer-events-none disabled:opacity-75",
    "transition-[opacity,box-shadow,outline-color,background-color] active:duration-0",
  ],
  variants: {
    size: {
      md: "rounded-lg px-3 gap-1 text-base leading-8",
      sm: "rounded-2xl px-2 gap-1 text-sm leading-7",
    },
    color: {
      default: [
        "outline-bg-secondary bg-bg-body ring-ring-accent focus-visible:bg-bg-secondary",
        "hover:bg-bg-default active:bg-bg-secondary data-[expanded]:bg-bg-default",
        "hover:outline-bg-tertiary active:outline-bg-tertiary data-[expanded]:outline-bg-tertiary",
      ],
      dark: [
        "outline-neutral-700 bg-neutral-800 ring-neutral-800 focus-visible:bg-neutral-700",
        "hover:bg-neutral-700 active:bg-neutral-600 data-[expanded]:bg-neutral-700",
      ],
      primary: [
        "outline-blue-800 bg-blue-600 ring-blue-600 focus-visible:bg-blue-700",
        "hover:bg-blue-700 active:bg-blue-800 data-[expanded]:bg-blue-700",
      ],
      success: [
        "outline-green-800 bg-green-600 ring-green-600 focus-visible:bg-green-700",
        "hover:bg-green-700 active:bg-green-800 data-[expanded]:bg-green-700",
      ],
      danger: [
        "outline-red-800 bg-red-600 ring-red-600 focus-visible:bg-red-700",
        "hover:bg-red-700 active:bg-red-800 data-[expanded]:bg-red-700",
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
