declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SESSION_SECRET: string;
    }
  }
}

/**
 * Represents a JSON Web Token (JWT) contents.
 */
export type JWT = {
  access_token: string;
  token_type: string;
  expires_at: string;
};

/**
 * Represents the session data associated with a user session.
 */
export type SessionData = {
  jwt?: JWT;
};
