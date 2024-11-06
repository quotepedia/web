import createClient from "openapi-fetch";

import type { paths } from "./generated/schema";
import { AUTH_MIDDLEWARE, I18N_MIDDLEWARE } from "./middleware";

export const client = createClient<paths>({ baseUrl: import.meta.env.VITE_API_URL });

client.use(AUTH_MIDDLEWARE);
client.use(I18N_MIDDLEWARE);
