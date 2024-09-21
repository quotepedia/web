import colors from "picocolors";

import { type Middleware } from "openapi-fetch";

import { getRequestEvent } from "solid-js/web";
import { getCookie } from "vinxi/http";
import { getSession } from "~/lib/http/session";
import { DEFAULT_LOCALE, getRequestLocale } from "~/lib/i18n";
import logger from "~/lib/logging/console";
import { Preferences, PREFERENCES_COOKIE_NAME } from "~/lib/preferences";

export const AUTH_MIDDLEWARE: Middleware = {
  onRequest: async ({ request }) => {
    const session = await getSession();
    const jwt = session.data.jwt;

    if (jwt && Date.parse(jwt.expires_at) > Date.now()) {
      request.headers.set("Authorization", `${jwt.token_type} ${jwt.access_token}`);
    }

    return request;
  },
};

export const I18N_MIDDLEWARE: Middleware = {
  onRequest: async ({ request }) => {
    const event = getRequestEvent();
    if (!event) return;

    const cookie = getCookie(event.nativeEvent, PREFERENCES_COOKIE_NAME);
    const settings = JSON.parse(cookie ?? "{}") as Preferences;
    const locale = settings.locale || getRequestLocale();

    request.headers.set("Accept-Language", locale);

    return request;
  },
};

export const DEBUG_MIDDLEWARE: Middleware = {
  onResponse: async ({ request, response }) => {
    const method = colors.white(request.method);
    const route = colors.cyan(colors.underline(request.url));

    const clone = response.clone();
    const colorizeStatus = clone.status >= 400 && clone.status < 600 ? colors.red : colors.green;
    const status = colorizeStatus(`${clone.status} ${clone.statusText}`);

    const icon = request.headers.has("Authorization") ? "🔓" : "🔒";

    logger.debug(`${method} ${route} ${status} ${icon}`);
  },
};
