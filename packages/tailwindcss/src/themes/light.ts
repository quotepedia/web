import type { ThemeConfig } from "tailwindcss-themer/lib/utils/optionsUtils";
import colors from "tailwindcss/colors";

export default {
  name: "light-color-scheme",
  selectors: ["[data-theme=light]"],
  mediaQuery: "@media (prefers-color-scheme: light)",
  extend: {
    colors: {
      fg: {
        body: colors.neutral[950],
        soft: colors.neutral[800],
        muted: colors.neutral[500],
        accent: colors.blue[600],
        quote: "#6a5f49",
      },
      bg: {
        body: colors.white,
        default: colors.neutral[100],
        secondary: colors.neutral[200],
        tertiary: colors.neutral[300],
        quote: "#f2f7ba",
      },
      ring: {
        accent: colors.blue[400],
      },
      border: {
        accent: colors.blue[400],
        quote: "#ada185",
      },
    },
    backgroundImage: {
      quote: "radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 90%)",
    },
    boxShadow: {
      quote: "inset 0 0 4px rgba(216, 224, 113, 1), inset 0 0 4px rgba(0, 0, 0, 0.25)",
    },
  },
} satisfies ThemeConfig;
