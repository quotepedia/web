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
  });
}) satisfies PluginCreator;
