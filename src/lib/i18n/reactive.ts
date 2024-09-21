import * as i18n from "@solid-primitives/i18n";
import { createResource } from "solid-js";
import { type Locale, type LocalizedTranslator, getLocalizedDictionary } from "~/lib/i18n";

/**
 * Creates a translator based on the provided locale.
 * @param locale A function that returns the current locale.
 * @returns A proxy translator function.
 */
export function createTranslator(locale: () => Locale): LocalizedTranslator {
  const [dict] = createResource(locale, getLocalizedDictionary);
  const t = i18n.translator(() => dict()!, i18n.resolveTemplate);
  return i18n.proxyTranslator(t);
}
