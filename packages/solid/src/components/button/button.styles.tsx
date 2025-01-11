import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    root: [
      "w-fit outline-none select-none font-medium",
      "inline-flex items-center justify-center",
      "transition duration-300 active:duration-0",
      "data-[expanded]:duration-300 data-[expanded]:opacity-25",
      "disabled:cursor-not-allowed disabled:opacity-100 disabled:text-opacity-75",
      "aria-disabled:cursor-not-allowed aria-disabled:opacity-100 aria-disabled:text-opacity-75",
      "aria-busy:cursor-wait data-[loading=true]:cursor-wait",
    ],
    icon: "text-current",
  },
  variants: {
    size: {
      sm: {
        root: "text-sm",
        icon: "size-5",
      },
      md: {
        root: "text-base",
        icon: "size-6",
      },
      lg: {
        root: "text-lg",
        icon: "size-7",
      },
    },
    shape: {
      circle: {
        root: "rounded-full",
      },
      default: {
        root: "rounded-xl",
      },
    },
    spacing: {
      sm: {
        root: "px-1 py-1 gap-0.5",
      },
      md: {
        root: "px-1.5 py-1.5 gap-0.5",
      },
      lg: {
        root: "py-2 px-2.5 gap-0.5",
      },
    },
    color: {
      primary: "",
      secondary: "",
      success: "",
      danger: "",
    },
    style: {
      ghost: {
        root: "hover:opacity-50 active:opacity-25 data-[expanded]:opacity-25 focus-visible:opacity-50",
      },
      bezeled: {
        root: "hover:opacity-75 active:opacity-50 data-[expanded]:opacity-50 focus-visible:opacity-75",
      },
      default: {
        root: "hover:opacity-75 active:opacity-50 data-[expanded]:opacity-50 focus-visible:opacity-75",
      },
    },
  },
  compoundVariants: [
    {
      style: "default",
      class: {
        root: "disabled:bg-bg-tertiary disabled:text-fg-muted",
      },
    },
    {
      style: "default",
      color: "primary",
      class: {
        root: "bg-blue-500 text-white",
      },
    },
    {
      style: "default",
      color: "secondary",
      class: {
        root: "bg-bg-tertiary text-fg-body",
      },
    },
    {
      style: "default",
      color: "success",
      class: {
        root: "bg-green-500 text-white",
      },
    },
    {
      style: "default",
      color: "danger",
      class: {
        root: "bg-red-500 text-white",
      },
    },
    {
      style: "bezeled",
      class: {
        root: "disabled:bg-bg-secondary disabled:text-fg-muted",
      },
    },
    {
      style: "bezeled",
      color: "primary",
      class: {
        root: "text-fg-accent bg-blue-500/25",
      },
    },
    {
      style: "bezeled",
      color: "secondary",
      class: {
        root: "bg-bg-secondary text-fg-body",
      },
    },
    {
      style: "bezeled",
      color: "success",
      class: {
        root: "text-green-600 bg-green-500/25",
      },
    },
    {
      style: "bezeled",
      color: "danger",
      class: {
        root: "text-red-700 bg-red-500/25",
      },
    },
    {
      style: "ghost",
      class: {
        root: "disabled:text-fg-muted",
      },
    },
    {
      style: "ghost",
      color: "primary",
      class: {
        root: "text-fg-accent",
      },
    },
    {
      style: "ghost",
      color: "secondary",
      class: {
        root: "text-fg-muted",
      },
    },
    {
      style: "ghost",
      color: "success",
      class: {
        root: "text-green-600",
      },
    },
    {
      style: "ghost",
      color: "danger",
      class: {
        root: "text-red-700",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    shape: "default",
    spacing: "md",
    style: "default",
    color: "primary",
  },
});
