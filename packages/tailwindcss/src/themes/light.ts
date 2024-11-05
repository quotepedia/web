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
      },
      bg: {
        body: colors.white,
        default: colors.neutral[100],
        secondary: colors.neutral[200],
        tertiary: colors.neutral[300],
      },
      ring: {
        accent: colors.blue[400],
      },
      border: {
        accent: colors.blue[400],
      },
    },
  },
} satisfies ThemeConfig;
