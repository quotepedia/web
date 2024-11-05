import { proxyTranslator, resolveTemplate, translator } from "@solid-primitives/i18n";
import { createResource } from "solid-js";
import type { Locale, LocalizedTranslator } from "./types";
import { getLocalizedDictionary } from "./dict";

/**
 * Creates a translator based on the provided locale.
 * @param locale A function that returns the current locale.
 * @returns A proxy translator function.
 */
export function createTranslator(locale: () => Locale): LocalizedTranslator {
  const [dict] = createResource(locale, getLocalizedDictionary);
  const t = translator(() => dict()!, resolveTemplate);
  return proxyTranslator(t);
}
