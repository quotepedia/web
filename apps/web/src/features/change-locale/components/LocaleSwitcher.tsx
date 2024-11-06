import { Button, Select } from "@quotepedia/solid";
import { Icon } from "solid-heroicons";
import { check, chevronUpDown } from "solid-heroicons/solid-mini";
import { type Component } from "solid-js";
import { CULTURES, Locale, useI18n } from "~/shared/i18n";

export const LocaleSwitcher: Component = () => {
  const i18n = useI18n();

  const getLanguageName = (locale: Locale) => new Intl.DisplayNames("en", { type: "language" }).of(locale);
  const getNativeLanguageName = (locale: Locale) => new Intl.DisplayNames(locale, { type: "language" }).of(locale);

  return (
    <Select
      gutter={1}
      options={[...Object.keys(CULTURES)]}
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
          <Select.ItemIndicator as={Icon} path={check} class="text-fg-accent size-4 stroke-current" />
        </Select.Item>
      )}
    >
      <Button as={Select.Trigger} aria-busy={i18n.isSettingLocale()} disabled={i18n.isSettingLocale()}>
        <Select.Value<Locale> class="capitalize">
          {(state) => getNativeLanguageName(state.selectedOption())}
        </Select.Value>
        <Icon path={chevronUpDown} class="size-4" />
      </Button>
      <Select.Content inert={i18n.isSettingLocale()}>
        <Select.ListBox class="outline-none" />
      </Select.Content>
    </Select>
  );
};
