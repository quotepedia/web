import { useSettings } from "@src/shared/settings";
import { type ParentComponent, createEffect, useTransition } from "solid-js";
import { I18nContext } from "./context";
import { getUserLocale } from "./language";
import { createTranslator } from "./translator";
import type { Locale } from "./types";

export const I18nProvider: ParentComponent = (props) => {
  const settings = useSettings();

  const [isSettingLocale, startSettingLocale] = useTransition();

  const locale = () => settings.store.locale ?? getUserLocale();
  const setLocale = (locale: Locale) => startSettingLocale(() => settings.set("locale", locale));

  const t = createTranslator(locale);

  createEffect(() => {
    document.documentElement.lang = locale();
  });

  return (
    <I18nContext.Provider
      value={{
        t,
        locale,
        setLocale,
        isSettingLocale,
      }}
    >
      {props.children}
    </I18nContext.Provider>
  );
};
