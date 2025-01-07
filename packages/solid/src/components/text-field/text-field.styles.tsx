import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    wrapper: [
      "flex items-center justify-center w-full overflow-hidden rounded-xl outline-none",
      "transition-[color,background-color,box-shadow,opacity] duration-150 cursor-text",
      "placeholder-fg-muted",
      "has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
      "has-[[data-invalid]]:ring-red-600",
    ],
    input: "grow bg-transparent outline-none disabled:cursor-not-allowed px-2 py-1.5",
    textarea: "grow resize-none bg-transparent outline-none disabled:cursor-not-allowed px-2 py-1.5",
    label: "mb-1.5 text-sm font-semibold leading-none",
    description: "mt-1 flex justify-between text-sm text-fg-muted",
    error: "mt-1 text-sm text-red-600",
  },
  variants: {
    plain: {
      true: {
        wrapper: "",
      },
      false: {
        wrapper: [
          "ring-1 ring-inset ring-bg-secondary bg-bg-secondary/75 backdrop-blur-xl",
          "hover:ring-bg-tertiary",
          "has-[:focus]:ring-border-accent has-[:focus]:bg-bg-default/75",
          "has-[:disabled]:ring-bg-secondary",
        ],
      },
    },
    align: {
      left: {
        input: "text-left",
      },
      right: {
        input: "text-right",
      },
    },
  },
  defaultVariants: {
    align: "left",
    plain: false,
  },
});
