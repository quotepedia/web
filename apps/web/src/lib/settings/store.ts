import { createStore } from "solid-js/store";
import type { EmojiStyle } from "~/lib/emoji";
import { getUserLocale, type Locale } from "~/lib/i18n";
import { type Theme } from "~/lib/theme";
import { createStorage } from "~/utils/storage/create";
import { SETTINGS_COOKIE_NAME } from "./constants";

export type Settings = {
  locale?: Locale;
  theme?: Theme;
  emojiStyle?: EmojiStyle;
  snowfall?: boolean;
};

export const getDefaultSettings = (): Settings => ({
  locale: getUserLocale(),
  theme: "system",
  emojiStyle: "apple",
  snowfall: true,
});

export const createSettingsStore = () => createStore(getDefaultSettings());

export const createSettingsPersistence = () => createStorage(createSettingsStore(), SETTINGS_COOKIE_NAME);
