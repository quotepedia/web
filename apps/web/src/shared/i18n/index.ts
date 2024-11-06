import { I18nProvider } from "./Provider";

import { CULTURES, DEFAULT_LOCALE, LOCALES } from "./constants";
import { useI18n } from "./context";
import { getUserLocale } from "./language";
import type { Locale } from "./types";

export type { Locale };

export { CULTURES, DEFAULT_LOCALE, getUserLocale, I18nProvider, LOCALES, useI18n };
