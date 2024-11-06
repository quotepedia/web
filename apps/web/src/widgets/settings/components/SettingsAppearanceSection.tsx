import { Heading, SettingsCard, SettingsExpander, SettingsGroup, Stack } from "@quotepedia/solid";
import { Icon } from "solid-heroicons";
import { language, paintBrush } from "solid-heroicons/solid-mini";
import { LocaleSwitcher } from "~/features/change-locale";
import { ThemeSwitcher } from "~/features/change-theme";
import { useI18n } from "~/shared/i18n";
import { useTheme } from "~/shared/theme";

export const SettingsAppearanceSection = () => {
  const theme = useTheme();
  const i18n = useI18n();
  const t = i18n.t.routes.settings.sections.appearance;

  return (
    <Stack.Vertical class="items-start gap-3">
      <Heading as="h2" size="subheading">
        {t.heading()}
      </Heading>

      <SettingsGroup>
        <SettingsExpander>
          <SettingsExpander.Trigger>
            <Icon path={paintBrush} class="size-4" />
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header>{t.cards.theme.heading()}</SettingsCard.Header>
              <SettingsCard.Description>{t.cards.theme.description()}</SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <SettingsCard.Value>{t.cards.theme.options[theme.theme()]()}</SettingsCard.Value>
            <SettingsExpander.Indicator />
          </SettingsExpander.Trigger>
          <SettingsExpander.Content>
            <ThemeSwitcher class="px-3 py-2" />
          </SettingsExpander.Content>
        </SettingsExpander>
        <SettingsCard>
          <Icon path={language} class="size-4" />
          <SettingsCard.HeaderGroup>
            <SettingsCard.Header>{t.cards.locale.heading()}</SettingsCard.Header>
            <SettingsCard.Description>{t.cards.locale.description()}</SettingsCard.Description>
          </SettingsCard.HeaderGroup>
          <LocaleSwitcher />
        </SettingsCard>
      </SettingsGroup>
    </Stack.Vertical>
  );
};
