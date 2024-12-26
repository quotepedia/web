import { getUserLocale, type Locale } from "@src/shared/i18n";
import { type Theme } from "@src/shared/theme";
import { createStore } from "solid-js/store";
import { createStorage } from "../utils/storage/create";
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
