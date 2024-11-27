import { Fade } from "@quotepedia/solid";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Toaster } from "solid-sonner";
import { SessionExpirationObserver } from "~/entities/auth";
import { I18nProvider } from "~/shared/i18n";
import { SettingsProvider } from "~/shared/settings";
import { ThemeProvider } from "~/shared/theme";
import { AppTitle } from "~/widgets/app-title";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <SettingsProvider>
            <I18nProvider>
              <ThemeProvider>
                <Suspense>
                  <Fade>{props.children}</Fade>
                </Suspense>

                <Toaster />
                <AppTitle />
                <SessionExpirationObserver />
              </ThemeProvider>
            </I18nProvider>
          </SettingsProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
