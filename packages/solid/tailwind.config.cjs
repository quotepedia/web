module.exports = {
  content: process.env.NODE_ENV !== "production" && ["./playground/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  presets: [require("@quotepedia/tailwindcss")],
};
