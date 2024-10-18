import { useSession, type SessionConfig } from "vinxi/http";
import { type JWT, type SessionData } from "~/shared/http";

/**
 * The name of the session cookie.
 */
export const SESSION_COOKIE_NAME = "session" as const;

/**
 * Configuration options for the session cookie.
 */
export const SESSION_COOKIE_OPTIONS: SessionConfig = {
  name: SESSION_COOKIE_NAME,
  password: import.meta.env.VITE_SESSION_SECRET,
  cookie: {
    secure: /true/i.test(import.meta.env.VITE_SECURE_COOKIES),
    sameSite: "lax",
  },
};

/**
 * Retrieves the current session data.
 *
 * @returns The current session data.
 */
export const getSession = async () => {
  "use server";

  return await useSession<SessionData>(SESSION_COOKIE_OPTIONS);
};

/**
 * Overwrites the current session with a new JWT.
 *
 * @param jwt The new JWT to be stored in the session.
 */
export const updateSession = async (jwt?: JWT) => {
  "use server";

  const session = await getSession();

  const data: SessionData = {
    jwt: jwt,
  };

  await session.update(() => data);
};

/**
 * Resets the current session by setting the JWT to `undefined`.
 */
export const resetSession = async () => {
  "use server";

  await updateSession(undefined);
};
