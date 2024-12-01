// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler((event) => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang={event.locals.settings.locale}>
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, interactive-widget=resizes-content, viewport-fit=cover"
          />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          {assets}
        </head>
        <body class="overflow-x-hidden text-sm transition-colors" data-theme={event.locals.settings.theme}>
          <div id="app" class="flex min-h-dvh">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
