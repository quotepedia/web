import { createStore } from "solid-js/store";
import { getUserLocale, type Locale } from "~/lib/i18n";
import { type Theme } from "~/lib/theme";
import { createStorage } from "../../utils/storage/create";
import { SETTINGS_COOKIE_NAME } from "./constants";

export type Settings = {
  locale?: Locale;
  theme?: Theme;
  snowfall?: boolean;
};

export const getDefaultSettings = (): Settings => ({
  locale: getUserLocale(),
  theme: "system",
  snowfall: true,
});

export const createSettingsStore = () => createStore(getDefaultSettings());

export const createSettingsPersistence = () => createStorage(createSettingsStore(), SETTINGS_COOKIE_NAME);
