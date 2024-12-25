import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Toaster } from "solid-sonner";
import { SessionExpirationObserver } from "~/entities/auth";
import { I18nProvider } from "~/shared/i18n";
import { SettingsProvider } from "~/shared/settings";
import { ThemeProvider } from "~/shared/theme";
import { Title } from "~/widgets/title";
import "./app.css";

const Snowfall = clientOnly(() => import("./widgets/snowfall"));

export default function App() {
  return (
    <MetaProvider>
      <SettingsProvider>
        <I18nProvider>
          <ThemeProvider>
            <Router
              root={(props) => (
                <Suspense>
                  {props.children}

                  <Title />
                  <SessionExpirationObserver />
                </Suspense>
              )}
            >
              <FileRoutes />
            </Router>

            <Toaster />
            <Snowfall />
          </ThemeProvider>
        </I18nProvider>
      </SettingsProvider>
    </MetaProvider>
  );
}
