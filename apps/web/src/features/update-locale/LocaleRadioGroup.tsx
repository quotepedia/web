import { RadioGroup } from "@kobalte/core/radio-group";
import { SettingsGroup } from "@quotepedia/solid";
import { For } from "solid-js";
import { LOCALES, useI18n, type Locale } from "~/shared/i18n";
import { LocaleRadioGroupItem } from "./LocaleRadioGroupItem";

export const LocaleToggleGroup = () => {
  const i18n = useI18n();

  const onChange = (value: string) => {
    i18n.setLocale(value as Locale);
  };

  return (
    <RadioGroup value={i18n.locale()} onChange={onChange} disabled={i18n.isSettingLocale()} orientation="vertical">
      <SettingsGroup>
        <For each={LOCALES}>{(locale) => <LocaleRadioGroupItem locale={locale} />}</For>
      </SettingsGroup>
    </RadioGroup>
  );
};
