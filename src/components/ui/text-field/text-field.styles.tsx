import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    wrapper: [
      "flex min-h-8 w-full overflow-hidden rounded-lg border border-bg-secondary bg-bg-body text-sm leading-none",
      "transition-all duration-75",
      "placeholder-fg-muted",
      "hover:border-bg-tertiary",
      "has-[:focus]:border-border-accent has-[:focus]:outline-none has-[:focus]:ring has-[:focus]:ring-ring-accent/50",
      "has-[:disabled]:cursor-not-allowed has-[:disabled]:border-bg-tertiary has-[:disabled]:bg-bg-default",
      "has-[[data-invalid]]:border-red-600 has-[[data-invalid]]:ring-red-200",
    ],
    input: "block w-full bg-bg-body px-1.5 leading-none outline-none disabled:cursor-not-allowed",
    textarea: "flex w-full resize-none px-1.5 py-1 text-sm outline-none disabled:cursor-not-allowed",
    label: "mb-1.5 text-xs font-semibold leading-none",
    description: "mt-1 flex justify-between text-xs text-fg-muted",
    error: "mt-1 text-xs text-red-600",
  },
});
