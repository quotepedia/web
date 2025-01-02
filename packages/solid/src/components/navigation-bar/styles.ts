import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    root: [
      "w-full text-nowrap",
      "flex items-center justify-between",
      "sticky top-0 z-10 border-b min-h-11",
      "transition duration-100",
      "border-transparent",
    ],
    leading: "shrink-0 grow basis-0 justify-start truncate lg:px-3",
    center: "flex flex-col justify-center gap-1 truncate text-center",
    trailing: "flex shrink-0 grow basis-0 justify-end truncate lg:px-3",
  },
  variants: {
    scrolled: {
      true: {
        root: "border-bg-secondary bg-bg-body duration-150",
      },
    },
  },
});

export default styles;