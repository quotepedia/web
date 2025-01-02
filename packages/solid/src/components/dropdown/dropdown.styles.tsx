import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    content: [
      "z-50 min-w-56",
      "origin-[var(--kb-popper-content-transform-origin)] transition",
      "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-0 data-[closed]:duration-300 data-[closed]:ease-in-out",
      "data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-0 data-[expanded]:duration-500 data-[expanded]:ease-spring",
      "rounded-lg border border-bg-secondary bg-bg-default/75 backdrop-blur-lg py-0.5 shadow-md outline-none",
    ],
    item: [
      "mx-0.5 flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 outline-none",
      "transition-colors duration-75 data-[highlighted]:active:bg-bg-tertiary active:duration-0 leading-none",
      "data-[disabled]:pointer-events-none data-[highlighted]:bg-bg-secondary data-[disabled]:opacity-50",
    ],
  },
});
