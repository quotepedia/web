import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    wrapper: [
      "flex min-h-8 w-full overflow-hidden rounded-lg border border-bg-secondary bg-bg-body",
      "transition-[color,background-color,border-color] duration-75",
      "placeholder-fg-muted",
      "hover:border-bg-tertiary",
      "has-[:focus]:border-border-accent has-[:focus]:outline-none",
      "has-[:disabled]:cursor-not-allowed has-[:disabled]:border-bg-tertiary has-[:disabled]:bg-bg-default",
      "has-[[data-invalid]]:border-red-600",
    ],
    input: "block w-full bg-inherit px-1.5 leading-none outline-none disabled:cursor-not-allowed",
    textarea: "flex w-full resize-none bg-inherit px-1.5 py-1 outline-none disabled:cursor-not-allowed",
    label: "mb-1.5 text-sm font-semibold leading-none",
    description: "mt-1 flex justify-between text-sm text-fg-muted",
    error: "mt-1 text-sm text-red-600",
  },
});
