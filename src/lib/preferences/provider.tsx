import { cookieStorage, makePersisted } from "@solid-primitives/storage";
import { type ParentComponent, createContext, useContext } from "solid-js";
import { type SetStoreFunction, createStore } from "solid-js/store";

import { type Preferences, getDefaultSettings } from "~/lib/preferences";
import { makeBroadcastChannelSync } from "~/lib/utils/storage";

export type PreferencesContextValue = {
  settings: Preferences;
  set: SetStoreFunction<Preferences>;
};

export const PREFERENCES_COOKIE_NAME = "preferences";

export const PreferencesContext = createContext<PreferencesContextValue>();

export const PreferencesProvider: ParentComponent = (props) => {
  const [settings, set] = makePersisted(createStore(getDefaultSettings()), {
    name: PREFERENCES_COOKIE_NAME,
    storage: cookieStorage,
    storageOptions: {
      secure: /true/i.test(import.meta.env.VITE_SECURE_COOKIES),
      sameSite: "Lax",
      path: "/",
    },
    sync: makeBroadcastChannelSync(`sync-${PREFERENCES_COOKIE_NAME}`),
  });

  return <PreferencesContext.Provider value={{ settings, set }}>{props.children}</PreferencesContext.Provider>;
};

export const usePreferences = (): PreferencesContextValue => {
  const context = useContext(PreferencesContext);

  if (context === undefined) {
    throw new Error("The 'usePreferences' must be used within a <PreferencesProvider> component.");
  }

  return context;
};
