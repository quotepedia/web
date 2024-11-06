import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    content: [
      "z-50 min-w-56",
      "origin-[var(--kb-popper-content-transform-origin)]",
      "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-0",
      "data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-0",
      "rounded-lg border border-bg-tertiary bg-bg-default backdrop-blur-xl py-0.5 shadow-md",
    ],
    item: [
      "mx-0.5 flex cursor-default select-none items-center gap-2 rounded-md px-2 py-2 text-sm outline-none",
      "transition-colors duration-0 active:hover:bg-bg-tertiary leading-none",
      "data-[disabled]:pointer-events-none data-[highlighted]:bg-bg-secondary data-[disabled]:opacity-50",
    ],
  },
});
