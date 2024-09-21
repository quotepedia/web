/// <reference types="@solidjs/start/env" />

interface ImportMetaEnv {
  /**
   * The web app name.
   */
  readonly VITE_APP_NAME: string;

  /**
   * The web app version.
   */
  readonly VITE_APP_VERSION: string;

  /**
   * URL of the API server that the web app will interact with.
   */
  readonly VITE_API_URL: string;

  /**
   * Private key used to encrypt sessions.
   */
  readonly VITE_SESSION_SECRET: string;

  /**
   * Determines whether the cookies sent to browser should be marked as [secure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#block_access_to_your_cookies).
   */
  readonly VITE_SECURE_COOKIES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
