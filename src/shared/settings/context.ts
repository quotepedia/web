import { createContext, useContext } from "solid-js";
import type { SetStoreFunction, Store } from "solid-js/store";
import type { Settings } from "./store";

export type SettingsContextValue = {
  store: Store<Settings>;
  set: SetStoreFunction<Settings>;
};

export const SettingsContext = createContext<SettingsContextValue>();

export const useSettings = (): SettingsContextValue => {
  const context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error("The 'useSettings' must be used within a <SettingsProvider> component.");
  }

  return context;
};
