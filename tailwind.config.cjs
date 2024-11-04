/**@type {import("tailwindcss").Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontSize: {
        "cqi-25": "25cqi",
        "cqi-50": "50cqi",
      },
      transitionProperty: {
        "filter": "filter",
      },
      colors: {
        fg: {
          body: "var(--fg-color-body)",
          soft: "var(--fg-color-soft)",
          muted: "var(--fg-color-muted)",
          accent: "var(--fg-color-accent)",
        },
        bg: {
          body: "color-mix(in srgb, var(--bg-color-body) calc(<alpha-value> * 100%), transparent)",
          default: "color-mix(in srgb, var(--bg-color-default) calc(<alpha-value> * 100%), transparent)",
          secondary: "color-mix(in srgb, var(--bg-color-secondary) calc(<alpha-value> * 100%), transparent)",
          tertiary: "color-mix(in srgb, var(--bg-color-tertiary) calc(<alpha-value> * 100%), transparent)",
        },
        ring: {
          accent: "color-mix(in srgb, var(--ring-color-accent) calc(<alpha-value> * 100%), transparent)"
        },
        border: {
          accent: "color-mix(in srgb, var(--border-color-accent) calc(<alpha-value> * 100%), transparent)"
        }
      },
      fontFamily: {
        sans: ["Inter", { fontFeatureSettings: '"cv11"', }],
      },
      keyframes: {
        "collapse": {
          from: { height: "var(--kb-collapsible-content-height)" },
          to: { height: 0 }
        },
        "expand": {
          from: { height: 0 },
          to: { height: "var(--kb-collapsible-content-height)" }
        },
        "content-show": {
          from: { opacity: 0, scale: 0 },
          to: { opacity: 1, scale: 1 }
        },
        "content-hide": {
          from: { opacity: 1, scale: 1 },
          to: { opacity: 0, scale: 0 }
        },
        "blink": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 }
        }
      },
      animation: {
        "collapse": "collapse 250ms cubic-bezier(0.25, 0.75, 0.1, 1)",
        "expand": "expand 300ms cubic-bezier(0.25, 1, 0.5, 1)",
        "content-show": "content-show 350ms cubic-bezier(0.25, 1.25, 0.5, 1)",
        "content-hide": "content-hide 300ms cubic-bezier(0.25, 0.75, 0.1, 1)",
        "blink": "blink 1s cubic-bezier(0.4, 0, 0.2, 1) infinite"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-safe-area"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.container-size': {
          containerType: 'size',
        }
      })
    })
  ]
}
