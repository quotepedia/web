import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    content: [
      "z-50 min-w-56",
      "origin-[var(--kb-popper-content-transform-origin)] transition",
      "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-0 data-[closed]:duration-300 data-[closed]:ease-in-out",
      "data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-0 data-[expanded]:duration-500 data-[expanded]:ease-spring",
      "rounded-xl border border-bg-secondary bg-bg-default/75 backdrop-blur-lg shadow-md outline-none",
    ],
  },
});
