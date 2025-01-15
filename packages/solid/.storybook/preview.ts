/* @refresh reload */

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { JSX } from "solid-js";
import { render } from "solid-js/web";
import "./index.css";

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
      night: "night",
      system: "system",
    },
    defaultTheme: "system",
    attributeName: "data-theme",
    parentSelector: "html",
  }),
  (fn: () => JSX.Element) => {
    const root = document.createElement("div");

    render(fn, root);

    return root;
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
