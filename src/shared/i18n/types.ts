import type { ChainedTranslator, Flatten } from "@solid-primitives/i18n";
import type { LOCALES } from "./constants";
import type { DictionaryMap } from "./locales/types";

export type Locale = (typeof LOCALES)[number];
export type LocalizedDictionary = Flatten<DictionaryMap>;
export type LocalizedTranslator = ChainedTranslator<LocalizedDictionary, string>;
