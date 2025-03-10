import type { ThemeConfig } from "tailwindcss-themer/lib/utils/optionsUtils";
import colors from "tailwindcss/colors";

export default {
  name: "dark-color-scheme",
  selectors: ["[data-theme=dark]"],
  mediaQuery: "@media (prefers-color-scheme: dark)",
  extend: {
    colors: {
      fg: {
        body: colors.neutral[50],
        soft: colors.neutral[400],
        muted: colors.neutral[400],
        accent: colors.blue[500],
        quote: "#c1b7a4",
      },
      bg: {
        body: colors.neutral[900],
        default: colors.neutral[800],
        secondary: colors.neutral[700],
        tertiary: colors.neutral[600],
        quote: "#313228",
      },
      ring: {
        accent: colors.blue[600],
      },
      border: {
        accent: colors.blue[500],
        quote: "#998a66",
      },
    },
    backgroundImage: {
      quote: "radial-gradient(circle, rgba(0, 0, 0, 0.1) 90%)",
    },
    boxShadow: {
      quote: "",
    },
  },
} satisfies ThemeConfig;
