import { Link } from "@solidjs/meta";
import { type ParentComponent, createEffect, useTransition } from "solid-js";
import { useSettings } from "~/shared/settings";
import { I18nContext, type I18nContextValue } from "./context";
import { getUserLocale } from "./language";
import { createTranslator } from "./translator";
import type { Locale } from "./types";

export const I18nProvider: ParentComponent = (props) => {
  const settings = useSettings();

  const locale = () => settings.store.locale ?? getUserLocale();
  const setLocale = (locale: Locale) => startSettingLocale(() => settings.set("locale", locale));
  const [isSettingLocale, startSettingLocale] = useTransition();

  const t = createTranslator(locale);

  createEffect(() => {
    document.documentElement.lang = locale();
  });

  const context: I18nContextValue = { locale, setLocale, isSettingLocale, t };

  return (
    <I18nContext.Provider value={context}>
      <Link rel="manifest" href={`/manifest/${locale()}.json`} />
      {props.children}
    </I18nContext.Provider>
  );
};
