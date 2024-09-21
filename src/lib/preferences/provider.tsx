import * as storage from "@solid-primitives/storage";
import { type ParentComponent, createContext, createEffect, onCleanup, onMount, useContext } from "solid-js";
import { type SetStoreFunction, createStore } from "solid-js/store";
import { type Preferences, getDefaultSettings } from "~/lib/preferences";

export type PreferencesContextValue = {
  settings: Preferences;
  set: SetStoreFunction<Preferences>;
};

export const PREFERENCES_COOKIE_NAME = "preferences";

export const PreferencesContext = createContext<PreferencesContextValue>({} as PreferencesContextValue);

export const PreferencesProvider: ParentComponent = (props) => {
  const sync = new BroadcastChannel("preferences_sync");

  // TODO: Use sync @solid-primitives/storage's API
  const [settings, set] = storage.makePersisted(createStore(getDefaultSettings()), {
    name: PREFERENCES_COOKIE_NAME,
    storage: storage.cookieStorage,
    storageOptions: {
      secure: /true/i.test(import.meta.env.VITE_SECURE_COOKIES),
      sameSite: "Lax",
      path: "/",
    },
  });

  onMount(() => {
    sync.onmessage = (event) => {
      set(event.data);
    };
  });

  createEffect(
    () => {
      sync.postMessage({ ...settings });
    },
    { defer: true },
  );

  onCleanup(() => {
    sync.close();
  });

  return <PreferencesContext.Provider value={{ settings, set }}>{props.children}</PreferencesContext.Provider>;
};

export const usePreferences = () => useContext(PreferencesContext);
