import { createMiddleware } from "@solidjs/start/middleware";
import type { Settings } from "@src/shared/settings";
import { getSettings } from "@src/shared/settings/server";

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
