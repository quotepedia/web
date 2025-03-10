import { Toaster } from "@quotepedia/solid";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
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

            <Toaster
              // @ts-expect-error use the theme from the document element instead of the toaster
              theme=""
              class="lg:mb-safe-offset-0 max-lg:mb-safe-offset-16"
              position="bottom-right"
              duration={3000}
              offset={24}
              gap={8}
            />
            <Snowfall />
          </ThemeProvider>
        </I18nProvider>
      </SettingsProvider>
    </MetaProvider>
  );
}
