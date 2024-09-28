// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { getCookie } from "vinxi/http";
import { getRequestLocale } from "~/lib/i18n";
import { PREFERENCES_COOKIE_NAME, Preferences } from "~/lib/preferences";

export default createHandler((event) => {
  const cookie = getCookie(event.nativeEvent, PREFERENCES_COOKIE_NAME);
  const settings = JSON.parse(cookie ?? "{}") as Preferences;
  const lang = settings.locale ?? getRequestLocale();
  const theme = settings.theme ?? "system";

  return (
    <StartServer
      document={({ assets, children, scripts }) => (
        <html lang={lang} data-theme={theme}>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 24x24 32x32 48x48" />
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            {assets}
          </head>
          <body class="overflow-x-hidden">
            <div id="app" class="flex min-h-dvh bg-bg-body text-sm text-fg-body antialiased transition-colors">
              {children}
            </div>
            {scripts}
          </body>
        </html>
      )}
    />
  );
});
