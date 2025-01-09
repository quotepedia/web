// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler((event) => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang={event.locals.settings.locale}>
        <head>
          <meta charset="UTF-8" />
          <title>Quotepedia</title>
          <meta name="title" content="Quotepedia" />
          <meta name="description" content="Quotepedia is a library of inspiration that you create yourself." />
          <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no, interactive-widget=resizes-content, viewport-fit=cover"
          />
          <meta name="mobile-web-app-title" content="Quotepedia" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Quotepedia" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Quotepedia" />
          <meta name="google" content="notranslate" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
          <link rel="icon" type="image/png" sizes="196x196" href="/favicon-196.png" />
          <link rel="icon" type="image/x-icon" sizes="256x256" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
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
