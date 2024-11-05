import { defineConfig } from "@solidjs/start/config";
import app from "./package.json";

export default defineConfig({
  middleware: "./src/middleware.ts",
  vite: {
    define: {
      "import.meta.env.APP_NAME": JSON.stringify(app.name),
      "import.meta.env.APP_VERSION": JSON.stringify(app.version),
      "import.meta.env.APP_BUGS_URL": JSON.stringify(app.bugs.url),
      "import.meta.env.APP_REPOSITORY_URL": JSON.stringify(app.repository.url),
      "import.meta.env.APP_AUTHOR_NAME": JSON.stringify(app.author.name),
    },
  },
});
