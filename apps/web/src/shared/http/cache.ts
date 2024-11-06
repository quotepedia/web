import { query } from "@solidjs/router";
import { getSession } from "./session";

/**
 * Determines whether the current user is logged in using the JWT.
 */
export const getIsLoggedIn = query(async () => {
  "use server";

  const session = await getSession();
  const jwt = session.data.jwt;
  const isLoggedIn = jwt !== undefined && Date.parse(jwt.expires_at) > Date.now();

  return isLoggedIn;
}, "isLoggedIn");

/**
 * Retrieves the session expiration date.
 */
export const getSessionExpirationDate = query(async () => {
  "use server";

  const session = await getSession();
  const jwt = session.data.jwt;
  const sessionExpirationDate = jwt ? Date.parse(jwt.expires_at) : undefined;

  return sessionExpirationDate;
}, "sessionExpirationDate");