import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Toaster } from "solid-sonner";
import { Snowfall } from "~/components/Snowfall";
import { I18nProvider } from "~/lib/i18n";
import { createSessionValidator } from "~/lib/session";
import { SettingsProvider } from "~/lib/settings";
import { createAppShortcuts } from "~/lib/shortcuts";
import { ThemeProvider } from "~/lib/theme";
import "./app.css";

export default function App() {
  return (
    <MetaProvider>
      <SettingsProvider>
        <I18nProvider>
          <ThemeProvider>
            <Router
              root={(props) => {
                createAppShortcuts();
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
