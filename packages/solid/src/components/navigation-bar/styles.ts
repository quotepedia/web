import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    root: [
      "w-full text-nowrap",
      "flex items-center justify-between",
      "sticky top-0 z-10 border-b min-h-11 px-safe pt-safe",
      "transition duration-150",
      "bg-bg-body border-bg-secondary border-opacity-0 bg-opacity-0",
      "standalone:bg-bg-default standalone:bg-opacity-0 standalone:backdrop-blur-lg",
    ],
    leading: "shrink-0 grow basis-0 justify-start truncate lg:px-3",
    center: "flex flex-col justify-center gap-1 truncate text-center",
    trailing: "flex shrink-0 grow basis-0 justify-end truncate lg:px-3",
  },
  variants: {
    scrolled: {
      true: {
        root: ["border-opacity-100 bg-opacity-100 duration-150", "standalone:bg-opacity-75"],
      },
    },
  },
});

export default styles;
