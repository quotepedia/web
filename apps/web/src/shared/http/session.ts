import { useSession } from "vinxi/http";
import type { JWT, SessionData } from "./types";

/**
 * Retrieves the current session data.
 *
 * @returns The current session data.
 */
export const getSession = async () => {
  "use server";

  return await useSession<SessionData>({
    name: "session",
    password: process.env.SESSION_SECRET,
    cookie: {
      secure: /true/i.test(import.meta.env.VITE_SECURE_COOKIES),
      sameSite: "lax",
    },
  });
};

/**
 * Clears the current session by setting its content to `undefined`.
 */
export const clearSession = async () => {
  "use server";

  await updateSession(undefined);
};

/**
 * Overwrites the current session with a new JWT.
 *
 * @param jwt The new JWT to be stored in the session.
 */
export const updateSession = async (jwt?: JWT) => {
  "use server";

  const session = await getSession();

  await session.update(() => ({ jwt: jwt }));
};
