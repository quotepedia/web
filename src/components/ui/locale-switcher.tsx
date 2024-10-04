import { Icon } from "solid-heroicons";
import { check, chevronUpDown, language } from "solid-heroicons/solid-mini";
import { type Component } from "solid-js";

import { Button, Select } from "~/components";
import { Locale, SUPPORTED_CULTURES, useI18n } from "~/lib/i18n";

export const LocaleSwitcher: Component = () => {
  const i18n = useI18n();

  const languageNames = () => new Intl.DisplayNames([i18n.locale()], { type: "language" });
  const getNativeLanguageName = (locale: Locale) => new Intl.DisplayNames([locale], { type: "language" }).of(locale);

  return (
    <Select
      gutter={2}
      options={[...Object.keys(SUPPORTED_CULTURES)]}
      allowDuplicateSelectionEvents={false}
      disallowEmptySelection={true}
      value={i18n.locale()}
      defaultValue={i18n.locale()}
      onChange={(value) => value && i18n.setLocale(value)}
      itemComponent={(props) => (
        <Select.Item item={props.item}>
          <Select.ItemLabel class="flex items-center gap-1.5 capitalize">
            <span>{getNativeLanguageName(props.item.rawValue)}</span>
            <span>—</span>
            <span class="text-fg-muted">{languageNames().of(props.item.rawValue)}</span>
          </Select.ItemLabel>
          <Select.ItemIndicator class="text-fg-accent">
            <Icon path={check} width={14} stroke="currentColor" stroke-width={1} />
          </Select.ItemIndicator>
        </Select.Item>
      )}
    >
      <Select.Trigger as={Button<"button">} aria-busy={i18n.isSettingLocale()} disabled={i18n.isSettingLocale()}>
        <Icon path={language} width={14} />
        <Select.Value<Locale> class="capitalize">
          {(state) => getNativeLanguageName(state.selectedOption())}
        </Select.Value>
        <Select.Icon>
          <Icon path={chevronUpDown} width={14} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content inert={i18n.isSettingLocale()}>
        <Select.ListBox class="outline-none" />
      </Select.Content>
    </Select>
  );
};
