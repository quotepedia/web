import { type Accessor, createContext, useContext } from "solid-js";
import type { Locale, LocalizedTranslator } from "./types";

export type I18nContextValue = {
  /**
   * The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the user.
   */
  locale: Accessor<Locale>;

  /**
   * Sets the locale for the client.
   *
   * @param locale The locale to set.
   */
  setLocale: (locale: Locale) => void;

  /**
   * Determines whether the locale is currently changing.
   */
  isSettingLocale: Accessor<boolean>;

  /**
   * Provides access to a dictionary translated to the specified locale.
   */
  t: LocalizedTranslator;
};

export const I18nContext = createContext<I18nContextValue>({} as I18nContextValue);

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (context === undefined) {
    throw new Error("The 'useI18n' must be used within a <I18nProvider> component.");
  }

  return context;
};
