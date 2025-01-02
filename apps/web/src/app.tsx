import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Toaster } from "solid-sonner";
import { I18nProvider } from "~/shared/i18n";
import { createSessionValidator } from "~/shared/session";
import { SettingsProvider } from "~/shared/settings";
import { ThemeProvider } from "~/shared/theme";
import { Snowfall } from "~/widgets/snowfall";
import "./app.css";

export default function App() {
  return (
    <MetaProvider>
      <SettingsProvider>
        <I18nProvider>
          <ThemeProvider>
            <Router
              root={(props) => {
                createSessionValidator();

                return <Suspense>{props.children}</Suspense>;
              }}
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
