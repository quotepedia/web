import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", { fontFeatureSettings: '"cv11"' }],
      },
      animation: {
        flash: "flash 1s infinite",
        expand: "expand 300ms cubic-bezier(0.25, 1, 0.5, 1)",
        collapse: "collapse 300ms cubic-bezier(0.25, 0.75, 0.1, 1)",
      },
      keyframes: {
        flash: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
        },
        expand: {
          from: {
            height: "0",
          },
          to: {
            height: "var(--kb-collapsible-content-height)",
          },
        },
        collapse: {
          from: {
            height: "var(--kb-collapsible-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-safe-area"),
    require("tailwindcss-themer")({
      themes: [
        require("@quotepedia/tailwindcss/themes/light"),
        require("@quotepedia/tailwindcss/themes/dark"),
        require("@quotepedia/tailwindcss/themes/night"),
      ],
    }),
    require("@quotepedia/tailwindcss/plugins/cqi"),
  ],
} satisfies Config;
