import { defineConfig } from "@solidjs/start/config";
import app from "./package.json";

export default defineConfig({
  vite: {
    define: {
      "import.meta.env.APP_VERSION": JSON.stringify(app.version),
      "import.meta.env.APP_BUGS_URL": JSON.stringify(app.bugs.url),
      "import.meta.env.APP_REPOSITORY_URL": JSON.stringify(app.repository.url),
    },
  },
  server: {
    output: {
      dir: "dist",
    },
  },
  middleware: "./src/middleware.ts",
});
