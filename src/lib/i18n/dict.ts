import * as i18n from "@solid-primitives/i18n";
import type { DictionaryMap, Locale, LocalizedDictionary } from "~/lib/i18n";

const cache = new Map<Locale, DictionaryMap | undefined>();

/**
 * Asynchronously retrieves the localized dictionary for a specific locale.
 * @param locale The locale for which the dictionary is to be fetched.
 * @returns A promise that resolves with the localized dictionary.
 * @throws {ReferenceError} If the dictionary for the specified locale cannot be fetched.
 */
export async function getLocalizedDictionary(locale: Locale): Promise<LocalizedDictionary> | never {
  try {
    // TODO: Replace empty strings with values from English dict.
    let dict = cache.get(locale);
    if (!dict) {
      const file = await import(`~/lib/i18n/locales/${locale}.ts`);
      dict = file.dict as DictionaryMap;
      cache.set(locale, dict);
    }
    return i18n.flatten(dict);
  } catch (error) {
    throw new ReferenceError(`Cannot fetch dictionary for locale: '${locale}'.`);
  }
}
