import { Icon, SettingsCard, SettingsGroup, Switch } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { useI18n, useScopedTranslator, type Locale } from "~/lib/i18n";
import { useSettings } from "~/lib/settings";
import { useTheme } from "~/lib/theme";

export const SettingsAppearanceSection = () => {
  const i18n = useI18n();
  const theme = useTheme();
  const settings = useSettings();

  const t = useScopedTranslator("settings.appearance");

  const getNativeLanguageName = (locale: Locale) => new Intl.DisplayNames(locale, { type: "language" }).of(locale);

  return (
    <SettingsGroup>
      <SettingsCard variant="hover" as={A} href="/settings/theme">
        <Icon icon="f7:paintbrush" class="text-fg-accent size-6" />
        <SettingsCard.HeaderGroup>
          <SettingsCard.Header>{t("theme.heading")}</SettingsCard.Header>
          <SettingsCard.Description>{t("theme.description")}</SettingsCard.Description>
        </SettingsCard.HeaderGroup>
        <SettingsCard.Value>{useScopedTranslator("settings.theme.options")(theme.theme())}</SettingsCard.Value>
        <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
      </SettingsCard>
      <SettingsCard variant="hover" as={A} href="/settings/language">
        <Icon icon="f7:globe" class="text-fg-accent size-6" />
        <SettingsCard.HeaderGroup>
          <SettingsCard.Header>{t("language.heading")}</SettingsCard.Header>
          <SettingsCard.Description>{t("language.description")}</SettingsCard.Description>
        </SettingsCard.HeaderGroup>
        <SettingsCard.Value class="capitalize">{getNativeLanguageName(i18n.locale())}</SettingsCard.Value>
        <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
      </SettingsCard>
      <SettingsCard variant="hover" as={A} href="/settings/emoji">
        <Icon icon="f7:smiley" class="text-fg-accent size-6" />
        <SettingsCard.HeaderGroup>
          <SettingsCard.Header>{t("emoji.heading")}</SettingsCard.Header>
          <SettingsCard.Description>{t("emoji.description")}</SettingsCard.Description>
        </SettingsCard.HeaderGroup>
        <SettingsCard.Value class="capitalize">{settings.store.emojiStyle}</SettingsCard.Value>
        <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
      </SettingsCard>
      <Switch checked={settings.store.snowfall} onChange={(checked) => settings.set("snowfall", checked)}>
        <Switch.Input />
        <SettingsCard>
          <Icon icon="f7:wind-snow" class="text-fg-accent size-6" />
          <SettingsCard.HeaderGroup>
            <Switch.Label as={SettingsCard.Header}>{t("snowfall.heading")}</Switch.Label>
            <Switch.Description as={SettingsCard.Description}>{t("snowfall.description")}</Switch.Description>
          </SettingsCard.HeaderGroup>
          <Switch.Indicator />
        </SettingsCard>
      </Switch>
    </SettingsGroup>
  );
};
