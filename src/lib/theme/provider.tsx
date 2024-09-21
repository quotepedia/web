import { type Accessor, createContext, createEffect, type ParentComponent, useContext } from "solid-js";
import { usePreferences } from "~/lib/preferences";
import { type Theme } from "~/lib/theme";

export type ThemeContextValue = {
  theme: Accessor<Theme>;
  setTheme: (scheme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextValue>();

export const ThemeProvider: ParentComponent = (props) => {
  const preferences = usePreferences();

  const theme = () => preferences.settings.theme ?? "system";
  const setTheme = (scheme: Theme) => preferences.set("theme", scheme);

  createEffect(() => {
    document.documentElement.dataset.theme = theme();
  });

  const context: ThemeContextValue = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={context}>{props.children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(`'useTheme' must be used within a 'ThemeProvider' component.`);
  }

  return context;
};
