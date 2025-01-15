import type { StorybookConfig } from "storybook-solidjs-vite";
import solid from "vite-plugin-solid";
import paths from "vite-tsconfig-paths";

export default {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-themes",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "storybook-solidjs-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  staticDirs: ["../public"],
  viteFinal(config) {
    config.plugins?.unshift(solid());
    config.plugins?.unshift(paths());

    return config;
  },
} satisfies StorybookConfig;
