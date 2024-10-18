import { createMiddleware } from "@solidjs/start/middleware";
import { getSettings } from "~/shared/settings/server";

export default createMiddleware({
  onRequest: [
    (event) => {
      event.locals.settings = getSettings();
    },
  ],
});
