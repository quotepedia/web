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
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />
          <title>Quotepedia</title>
          {assets}
        </head>
        <body class="overflow-x-hidden transition-colors" data-theme={event.locals.settings.theme}>
          <div id="app" class="flex min-h-dvh">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
