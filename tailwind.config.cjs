/**@type {import("tailwindcss").Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", { fontFeatureSettings: '"cv11"' }],
      },
      keyframes: {
        collapse: {
          from: { height: "var(--kb-collapsible-content-height)" },
          to: { height: 0 },
        },
        expand: {
          from: { height: 0 },
          to: { height: "var(--kb-collapsible-content-height)" },
        },
        "content-show": {
          from: { opacity: 0, scale: 0 },
          to: { opacity: 1, scale: 1 },
        },
        "content-hide": {
          from: { opacity: 1, scale: 1 },
          to: { opacity: 0, scale: 0 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        collapse: "collapse 250ms cubic-bezier(0.25, 0.75, 0.1, 1)",
        expand: "expand 300ms cubic-bezier(0.25, 1, 0.5, 1)",
        "content-show": "content-show 350ms cubic-bezier(0.25, 1.25, 0.5, 1)",
        "content-hide": "content-hide 300ms cubic-bezier(0.25, 0.75, 0.1, 1)",
        blink: "blink 1s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-safe-area"),
    require("tailwindcss-themer")({
      themes: [
        require("./themes/light"),
        require("./themes/dark"),
        require("./themes/night"),
      ],
    }),
    function ({ addUtilities, matchUtilities }) {
      addUtilities({
        ".container-size": {
          containerType: "size",
        },
      });
      matchUtilities(
        {
          "text-cqi": (value) => ({
            fontSize: `${value}cqi`,
          }),
        },
        {
          values: Object.fromEntries([25, 50, 75].map((value) => [value, value])),
        },
      );
    },
  ],
};
