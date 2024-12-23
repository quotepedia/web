import { Button, Icon, Select } from "@quotepedia/solid";
import { type Component } from "solid-js";
import { Locale, LOCALES, useI18n } from "~/shared/i18n";

export const LocaleSwitcher: Component = () => {
  const i18n = useI18n();

  const getLanguageName = (locale: Locale) => new Intl.DisplayNames("en", { type: "language" }).of(locale);
  const getNativeLanguageName = (locale: Locale) => new Intl.DisplayNames(locale, { type: "language" }).of(locale);

  return (
    <Select
      gutter={1}
      options={Array.from(LOCALES)}
      value={i18n.locale()}
      defaultValue={i18n.locale()}
      onChange={(value) => value && i18n.setLocale(value)}
      disallowEmptySelection={true}
      allowDuplicateSelectionEvents={false}
      itemComponent={(props) => (
        <Select.Item item={props.item}>
          <Select.ItemLabel class="flex items-center gap-1.5 capitalize">
            <Icon icon={`circle-flags:${props.item.rawValue}`} class="ring-bg-tertiary size-4 rounded-full ring-1" />
            <span>{getNativeLanguageName(props.item.rawValue)}</span>
            <span class="text-fg-muted">—</span>
            <span class="text-fg-muted">{getLanguageName(props.item.rawValue)}</span>
          </Select.ItemLabel>
          <Select.ItemIndicator>
            <Icon icon="heroicons:check-20-solid" class="text-fg-accent size-4 stroke-current" />
          </Select.ItemIndicator>
        </Select.Item>
      )}
    >
      <Select.Trigger as={Button} aria-busy={i18n.isSettingLocale()} disabled={i18n.isSettingLocale()}>
        <Select.Value<Locale> class="capitalize">
          {(state) => getNativeLanguageName(state.selectedOption())}
        </Select.Value>
        <Icon icon="heroicons:chevron-up-down-16-solid" class="size-4" />
      </Select.Trigger>
      <Select.Content inert={i18n.isSettingLocale()}>
        <Select.ListBox class="outline-none" />
      </Select.Content>
    </Select>
  );
};
