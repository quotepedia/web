import type { ThemeConfig } from "tailwindcss-themer/lib/utils/optionsUtils";
import colors from "tailwindcss/colors";

export default {
  name: "night-color-scheme",
  selectors: ["[data-theme=night]"],
  extend: {
    colors: {
      fg: {
        body: colors.neutral[100],
        soft: colors.neutral[400],
        muted: colors.neutral[400],
        accent: colors.blue[500],
      },
      bg: {
        body: colors.black,
        default: colors.neutral[900],
        secondary: colors.neutral[800],
        tertiary: colors.neutral[700],
      },
      ring: {
        accent: colors.blue[700],
      },
      border: {
        accent: colors.blue[600],
      },
    },
  },
} satisfies ThemeConfig;
