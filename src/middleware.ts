import { createMiddleware } from "@solidjs/start/middleware";
import { getCookie } from "vinxi/http";

import { getDefaultSettings, PREFERENCES_COOKIE_NAME } from "~/lib/preferences";

export default createMiddleware({
  onRequest: [
    (event) => {
      const cookie = getCookie(event.nativeEvent, PREFERENCES_COOKIE_NAME);
      const settings = cookie ? JSON.parse(cookie) : {};

      event.locals.settings = { ...getDefaultSettings(), ...settings };
    },
  ],
});
