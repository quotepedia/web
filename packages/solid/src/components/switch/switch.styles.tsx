import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    root: "flex items-center",
    control: "bg-bg-secondary data-[checked]:bg-ring-accent ring-bg-tertiary group flex h-7 w-12 items-center rounded-full px-1 shadow-inner ring-2 ring-inset transition data-[checked]:ring-transparent",
    thumb: "ring-bg-tertiary/50 bg-fg-muted size-5 scale-75 rounded-full shadow transition group-hover:ring-8 group-focus-visible:ring-8 group-active:!scale-110 data-[checked]:translate-x-5 data-[checked]:scale-100 data-[checked]:bg-white"
  }
})