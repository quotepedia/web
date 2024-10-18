import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    overlay: [
      "fixed inset-0 z-50",
      "bg-black/25 backdrop-blur",
      "md:data-[expanded]:animate-in md:data-[closed]:animate-out",
      "md:data-[expanded]:fade-in-0 md:data-[closed]:fade-out-0",
    ],
    content: [
      "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
      "flex w-full flex-col gap-4 overflow-y-auto overflow-x-hidden max-sm:h-dvh sm:max-w-sm",
      "border-bg-tertiary bg-bg-default/75 p-6 shadow-2xl backdrop-blur-xl sm:rounded-2xl sm:border",
      "md:data-[expanded]:animate-in md:data-[closed]:animate-out",
      "md:data-[expanded]:fade-in-0 md:data-[closed]:fade-out-0",
      "md:data-[expanded]:zoom-in-95 md:data-[closed]:zoom-out-95",
      "md:data-[expanded]:slide-in-from-left-1/2 md:data-[closed]:slide-out-to-left-1/2",
      "md:data-[expanded]:slide-in-from-top-1/2 md:data-[closed]:slide-out-to-top-1/2",
    ],
    dismiss: ["size-6 rounded-md p-0.5 text-fg-muted transition-colors hover:bg-bg-secondary active:bg-bg-tertiary"],
    header: ["flex items-center justify-between"],
    title: ["text-xl font-semibold leading-none tracking-tight"],
    description: ["text-sm"],
    footer: ["flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"],
  },
});
