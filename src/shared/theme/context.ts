import { type Accessor, createContext, useContext } from "solid-js";
import type { Theme } from "./types";

export type ThemeContextValue = {
  theme: Accessor<Theme>;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextValue>();

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(`The 'useTheme' must be used within a <ThemeProvider> component.`);
  }

  return context;
};
