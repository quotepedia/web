import {
  scopedTranslator,
  type BaseTemplateArgs,
  type Scoped,
  type Scopes,
  type Translator,
} from "@solid-primitives/i18n";
import { createContext, useContext, type Accessor } from "solid-js";
import type { Dictionary, IntlLDMLPluralRuleScopes, Locale } from "./types";

export type I18nContextValue = {
  t: Translator<Dictionary>;
  locale: Accessor<Locale>;
  setLocale: (locale: Locale) => void;
  isSettingLocale: Accessor<boolean>;
};

export const I18nContext = createContext<I18nContextValue>();

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (context === undefined) {
    throw new Error("The 'useI18n' must be used within a <I18nProvider> component.");
  }

  return context;
};

export const useTranslator = (): Translator<Dictionary> => {
  return useI18n().t;
};

export const useScopedTranslator = <S extends Scopes<keyof Dictionary>>(
  scope: S,
): Translator<Scoped<Dictionary, S>> => {
  return scopedTranslator(useTranslator(), scope);
};

export const useMessage = (path: keyof Dictionary, args: BaseTemplateArgs | undefined = undefined) => {
  return useTranslator()(path, args);
};

export const usePlurarized = (scope: IntlLDMLPluralRuleScopes<keyof Dictionary>, count: number): string => {
  const i18n = useI18n();
  const pluralRules = new Intl.PluralRules(i18n.locale());
  const category = pluralRules.select(count);

  return `${count} ${useScopedTranslator(scope)(category)}`;
};
