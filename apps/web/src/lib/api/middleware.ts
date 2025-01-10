import colors from "picocolors";
import type { Middleware } from "openapi-fetch";
import { getRequestEvent } from "solid-js/web";

import { getSession } from "~/lib/session";
import logger from "~/lib/logging/console";

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

    if (event && event.locals.settings.locale) {
      request.headers.set("Accept-Language", event.locals.settings.locale);
    }

    return request;
  },
};

export const DEBUG_MIDDLEWARE: Middleware = {
  onResponse: ({ request, response }) => {
    const method = colors.white(request.method);
    const route = colors.cyan(colors.underline(request.url));

    const clone = response.clone();
    const colorizeStatus = clone.status >= 400 && clone.status < 600 ? colors.red : colors.green;
    const status = colorizeStatus(`${clone.status} ${clone.statusText}`);

    const icon = request.headers.has("Authorization") ? "🔓" : "🔒";

    logger.debug(`${method} ${route} ${status} ${icon}`);
  },
};
