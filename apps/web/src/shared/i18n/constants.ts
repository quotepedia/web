import type { Locale } from "./types";

export const LOCALES = ["en", "ru"] as const;
export const DEFAULT_LOCALE: Locale = "en" as const;

export const CULTURES: Record<Locale, string> = {
  en: "US",
  ru: "RU",
} as const;
