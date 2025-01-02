import { createEffect, type ParentComponent } from "solid-js";
import { useSettings } from "~/lib/settings";
import { ThemeContext, type ThemeContextValue } from "./context";
import type { Theme } from "./types";

export const ThemeProvider: ParentComponent = (props) => {
  const settings = useSettings();

  const theme = () => settings.store.theme ?? "system";
  const setTheme = (theme: Theme) => settings.set("theme", theme);

  createEffect(() => {
    document.body.dataset.theme = theme();
  });

  const context: ThemeContextValue = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={context}>{props.children}</ThemeContext.Provider>;
};
