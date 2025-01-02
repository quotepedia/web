import { createMiddleware } from "@solidjs/start/middleware";
import type { Settings } from "~/lib/settings";
import { getSettings } from "~/lib/settings/server";

declare module "@solidjs/start/server" {
  interface RequestEventLocals {
    /**
     * Custom user-specific web app settings.
     */
    settings: Settings;
  }
}

export default createMiddleware({
  onRequest: [
    (event) => {
      event.locals.settings = getSettings();
    },
  ],
});
