import { defineConfig } from "@solidjs/start/config";
import { name, version } from "./package.json";

export default defineConfig({
  middleware: "./src/middleware.ts",
  vite: {
    define: {
      "import.meta.env.APP_NAME": JSON.stringify(name),
      "import.meta.env.APP_VERSION": JSON.stringify(version),
    },
  },
});
