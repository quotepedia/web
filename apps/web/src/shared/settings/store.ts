import { cookieStorage, makePersisted } from "@solid-primitives/storage";
import { createStore } from "solid-js/store";
import { getUserLocale, type Locale } from "~/shared/i18n";
import { type Theme } from "~/shared/theme";
import { makeBroadcastChannelSync } from "~/shared/utils/storage";
import { SETTINGS_COOKIE_NAME, SETTINGS_COOKIE_SYNC_NAME } from "./constants";

export type Settings = {
  locale?: Locale;
  theme?: Theme;
};

export const getDefaultSettings = (): Settings => ({
  locale: getUserLocale(),
  theme: "system",
});

export const createSettingsStore = () => createStore(getDefaultSettings());

export const createSettingsPersistence = () => {
  return makePersisted(createSettingsStore(), {
    name: SETTINGS_COOKIE_NAME,
    storage: cookieStorage,
    storageOptions: {
      path: "/",
      secure: /true/i.test(import.meta.env.VITE_SECURE_COOKIES),
      sameSite: "Lax",
    },
    sync: makeBroadcastChannelSync(SETTINGS_COOKIE_SYNC_NAME),
  });
};
