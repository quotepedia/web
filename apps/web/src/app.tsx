import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { SessionExpirationObserver } from "@src/entities/auth";
import { I18nProvider } from "@src/shared/i18n";
import { SettingsProvider } from "@src/shared/settings";
import { ThemeProvider } from "@src/shared/theme";
import { Snowfall } from "@src/widgets/snowfall";
import { Title } from "@src/widgets/title";
import { Suspense } from "solid-js";
import { Toaster } from "solid-sonner";
import "./app.css";

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
