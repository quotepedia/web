import { getRequestEvent, isServer } from "solid-js/web";
import { type Locale, DEFAULT_LOCALE } from "~/lib/i18n";

/**
 * Gets the user locale based on where the code is running:
 * - On server: gets the locale from the request headers.
 * - On client: gets the locale from the navigator.
 * @returns The default user locale.
 */
export function getDefaultLocale(): Locale {
  return isServer ? getRequestLocale() : getNavigatorLocale();
}

/**
 * Gets the user locale from the request headers.
 * @returns The locale extracted from the request headers.
 */
export function getRequestLocale(): Locale {
  const acceptLanguage = getRequestEvent()?.request.headers.get("accept-language");
  return (acceptLanguage?.split(";")[0].split(",")[0].split("-")[0] as Locale) ?? DEFAULT_LOCALE;
}

/**
 * Gets the user locale from the navigator.
 * @returns The locale extracted from the navigator.
 */
export function getNavigatorLocale(): Locale {
  return (navigator.language.split("-")[0] as Locale) ?? DEFAULT_LOCALE;
}
