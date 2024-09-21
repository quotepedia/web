import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Toaster } from "solid-sonner";
import { SessionExpirationObserver } from "~/components";
import { I18nProvider } from "~/lib/i18n";
import { PreferencesProvider } from "~/lib/preferences";
import { ThemeProvider } from "~/lib/theme";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <PreferencesProvider>
            <I18nProvider>
              <ThemeProvider>
                <Suspense>{props.children}</Suspense>

                <Toaster />
                <SessionExpirationObserver />
              </ThemeProvider>
            </I18nProvider>
          </PreferencesProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
