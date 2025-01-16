import { tv, type VariantProps } from "tailwind-variants";

export const styles = tv({
  base: [
    "relative isolate h-4 cursor-wait overflow-hidden rounded bg-bg-secondary",
    "before:absolute before:inset-0 before:w-screen before:-translate-x-[100vw] before:animate-shimmer before:ease-in-out",
    "before:bg-gradient-to-r before:from-transparent before:via-bg-secondary before:to-transparent",
    "before:border-t before:border-bg-secondary before:border-opacity-75",
    "motion-reduce:before:animate-none",
  ],
  variants: {
    opacity: {
      25: "bg-opacity-25",
      50: "bg-opacity-50",
      75: "bg-opacity-75",
    },
  },
  defaultVariants: {
    opacity: 50,
  },
});

export type SkeletonVariantProps = VariantProps<typeof styles>;

export default styles;
