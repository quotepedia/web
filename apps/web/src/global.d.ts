/// <reference types="@solidjs/start/env" />

interface ImportMetaEnv {
  /**
   * The web app version.
   */
  readonly APP_VERSION: string;

  /**
   * The URL to report bugs and other issues.
   */
  readonly APP_BUGS_URL: string;

  /**
   * The URL to the app's repo.
   */
  readonly APP_REPOSITORY_URL: string;

  /**
   * URL of the API server that the web app will interact with.
   */
  readonly VITE_API_URL: string;

  /**
   * Determines whether the cookies sent to browser should be
   * marked as [secure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#block_access_to_your_cookies).
   */
  readonly VITE_SECURE_COOKIES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
