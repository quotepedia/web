import type { PluginCreator } from "tailwindcss/types/config";

export default (({ addBase }) => {
  addBase({
    html: {
      WebkitTapHighlightColor: "transparent",
    },
    body: {
      color: "rgb(var(--colors-fg-body))",
      background: "rgb(var(--colors-bg-body))",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    '[data-theme="light"]': {
      colorScheme: "light",
    },
    '[data-theme="dark"], [data-theme="night"]': {
      colorScheme: "dark",
    },
    '@media (prefers-color-scheme: light)': {
      '[data-theme="system"]': {
        colorScheme: "light",
      },
    },
    '@media (prefers-color-scheme: dark)': {
      '[data-theme="system"]': {
        colorScheme: "dark",
      },
    },
  });
}) satisfies PluginCreator;
