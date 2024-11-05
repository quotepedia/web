import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    overlay: [
      "fixed inset-0 z-50",
      "bg-black/25 backdrop-blur",
      "sm:data-[expanded]:animate-in sm:data-[closed]:animate-out",
      "sm:data-[expanded]:fade-in-0 sm:data-[closed]:fade-out-0",
    ],
    content: [
      "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
      "flex w-full flex-col gap-4 overflow-y-auto overflow-x-hidden max-sm:h-dvh sm:max-w-sm",
      "border-bg-tertiary bg-bg-default/75 p-6 shadow-2xl backdrop-blur-xl sm:rounded-2xl sm:border",
      "sm:data-[expanded]:animate-in sm:data-[closed]:animate-out",
      "sm:data-[expanded]:fade-in-0 sm:data-[closed]:fade-out-0",
      "sm:data-[expanded]:zoom-in-95 sm:data-[closed]:zoom-out-95",
      "sm:data-[expanded]:slide-in-from-left-1/2 sm:data-[closed]:slide-out-to-left-1/2",
      "sm:data-[expanded]:slide-in-from-top-1/2 sm:data-[closed]:slide-out-to-top-1/2",
    ],
    dismiss: ["size-6 rounded-md p-0.5 text-fg-muted transition-colors hover:bg-bg-secondary active:bg-bg-tertiary"],
    header: ["flex items-center justify-between"],
    title: ["text-xl font-semibold leading-none tracking-tight"],
    description: ["text-sm"],
    footer: ["flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"],
  },
});