import createClient from "openapi-fetch";

import { AUTH_MIDDLEWARE, DEBUG_MIDDLEWARE, I18N_MIDDLEWARE } from "./middleware";
import type { paths } from "./schema";

const client = createClient<paths>({ baseUrl: import.meta.env.VITE_API_URL });

client.use(AUTH_MIDDLEWARE);
client.use(I18N_MIDDLEWARE);

if (import.meta.env.DEV) {
  client.use(DEBUG_MIDDLEWARE);
}

export default client;
