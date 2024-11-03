// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import type { Settings } from "~/shared/settings";

declare module "@solidjs/start/server" {
  interface RequestEventLocals {
    /**
     * Custom user-specific web app settings.
     */
    settings: Settings;
  }
}

export default createHandler((event) => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang={event.locals.settings.locale} data-theme={event.locals.settings.theme}>
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, interactive-widget=resizes-content, viewport-fit=cover"
          />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 24x24 32x32 48x48" />
          <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          {assets}
        </head>
        <body class="overflow-x-hidden text-sm text-fg-body antialiased">
          <div id="app" class="flex min-h-dvh bg-bg-body transition-colors">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
