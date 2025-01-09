import cqi from "@src/plugins/cqi";
import reset from "@src/plugins/reset";
import themer from "@src/plugins/themer";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default (): Partial<Config> => ({
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", { fontFeatureSettings: '"ss03", "cv06", "cv08", "cv11"' }],
      },
      animation: {
        flash: "flash 1s infinite",
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
      },
      transitionTimingFunction: {
        spring: "linear(0, .006, .025 2.8%, .101 6.1%, .539 18.9%, .721 25.3%, .849 31.5%, .937 38.1%, .968 41.8%, .991 45.7%, 1.006 50.1%, 1.015 55%, 1.017 63.9%, 1.001)",
      },
    },
  },
  plugins: [
    cqi,
    reset,
    themer,
    require("tailwindcss-animate"),
    require("tailwindcss-safe-area"),
    plugin(function ({ addVariant }) {
      addVariant("standalone", "@media all and (display-mode: standalone)");
      addVariant("fullscreen", "@media all and (display-mode: fullscreen)");
      addVariant("minimal-ui", "@media all and (display-mode: minimal-ui)");
      addVariant("browser", "@media all and (display-mode: browser)");
    }),
  ],
});
