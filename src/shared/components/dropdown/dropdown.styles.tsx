import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    content: [
      "z-50 min-w-56",
      "origin-[var(--kb-menu-content-transform-origin)] animate-content-hide data-[expanded]:animate-content-show",
      "rounded-lg border border-bg-tertiary bg-bg-default backdrop-blur-xl py-0.5 shadow-md",
    ],
    item: [
      "mx-0.5 flex cursor-default select-none items-center gap-2 rounded-md px-2 py-2 text-sm outline-none",
      "transition-colors duration-0 active:hover:bg-bg-tertiary leading-none",
      "data-[disabled]:pointer-events-none data-[highlighted]:bg-bg-secondary data-[disabled]:opacity-50",
    ],
  },
});
