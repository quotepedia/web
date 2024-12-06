import type { Dictionary, Locale } from "./types";

export const map: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("./locales/en.json"),
  ru: () => import("./locales/ru.json"),
};

export async function fetchDictionary(locale: Locale): Promise<Dictionary> {
  return (await map[locale]()).default;
}
