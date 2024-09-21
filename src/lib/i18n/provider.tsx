import { Link } from "@solidjs/meta";
import { type Accessor, type ParentComponent, createContext, createEffect, useContext, useTransition } from "solid-js";
import { getDefaultLocale, type Locale, type LocalizedTranslator, createTranslator } from "~/lib/i18n";
import { usePreferences } from "~/lib/preferences";

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

export const I18nProvider: ParentComponent = (props) => {
  const preferences = usePreferences();

  const locale = () => preferences.settings.locale ?? getDefaultLocale();
  const setLocale = (locale: Locale) => startSettingLocale(() => preferences.set("locale", locale));
  const [isSettingLocale, startSettingLocale] = useTransition();

  const t = createTranslator(locale);

  createEffect(() => {
    document.documentElement.lang = locale();
  });

  return (
    <I18nContext.Provider value={{ locale, setLocale, isSettingLocale, t }}>
      <Link rel="manifest" href={`/manifest/${locale()}.json`} />
      {props.children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
