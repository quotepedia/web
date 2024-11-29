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
      colorScheme: "only light",
    },
    '[data-theme="dark"], [data-theme="night"]': {
      colorScheme: "only dark",
    },
    '@media (prefers-color-scheme: light)': {
      '[data-theme="system"]': {
        colorScheme: "only light",
      },
    },
    '@media (prefers-color-scheme: dark)': {
      '[data-theme="system"]': {
        colorScheme: "only dark",
      },
    },
  });
}) satisfies PluginCreator;
