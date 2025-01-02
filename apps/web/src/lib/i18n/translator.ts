import { resolveTemplate, translator, type Translator } from "@solid-primitives/i18n";
import { createResource, type Accessor } from "solid-js";
import { fetchDictionary } from "./dict";
import type { Dictionary, Locale } from "./types";

export function createTranslator(locale: Accessor<Locale>): Translator<Dictionary> {
  const [dict] = createResource(locale, fetchDictionary);
  return translator(() => dict()!, resolveTemplate);
}
