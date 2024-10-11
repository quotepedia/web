import { Icon } from "solid-heroicons";
import { check, chevronUpDown, language } from "solid-heroicons/solid-mini";
import { type Component } from "solid-js";

import { Button, Select } from "~/components";
import { Locale, SUPPORTED_CULTURES, useI18n } from "~/lib/i18n";

export const LocaleSwitcher: Component = () => {
  const i18n = useI18n();

  const getLanguageName = (locale: Locale) => new Intl.DisplayNames("en", { type: "language" }).of(locale);
  const getNativeLanguageName = (locale: Locale) => new Intl.DisplayNames(locale, { type: "language" }).of(locale);

  return (
    <Select
      gutter={1}
      options={[...Object.keys(SUPPORTED_CULTURES)]}
      defaultValue={i18n.locale()}
      value={i18n.locale()}
      onChange={(value) => value && i18n.setLocale(value)}
      disallowEmptySelection={true}
      allowDuplicateSelectionEvents={false}
      itemComponent={(props) => (
        <Select.Item item={props.item}>
          <Select.ItemLabel class="flex items-center gap-1.5 capitalize">
            <span>{getNativeLanguageName(props.item.rawValue)}</span>
            <span class="text-fg-muted">—</span>
            <span class="text-fg-muted">{getLanguageName(props.item.rawValue)}</span>
          </Select.ItemLabel>
          <Select.ItemIndicator as={Icon} path={check} class="size-3.5 stroke-current text-fg-accent" />
        </Select.Item>
      )}
    >
      <Select.Trigger as={Button<"button">} aria-busy={i18n.isSettingLocale()} disabled={i18n.isSettingLocale()}>
        <Icon path={language} class="size-3.5" />
        <Select.Value<Locale> class="capitalize">
          {(state) => getNativeLanguageName(state.selectedOption())}
        </Select.Value>
        <Icon path={chevronUpDown} class="size-3.5" />
      </Select.Trigger>
      <Select.Content inert={i18n.isSettingLocale()}>
        <Select.ListBox class="outline-none" />
      </Select.Content>
    </Select>
  );
};
