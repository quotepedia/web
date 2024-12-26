import { getSession } from "@src/shared/http/session";
import type { Middleware } from "openapi-fetch";
import { getRequestEvent } from "solid-js/web";

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
