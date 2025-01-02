import type { LOCALES } from "./constants";
import type * as en from "./locales/en.json";

export type Locale = (typeof LOCALES)[number];
export type Dictionary = typeof en;
