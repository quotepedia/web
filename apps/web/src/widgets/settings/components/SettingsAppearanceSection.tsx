import { Icon, Heading, SettingsCard, SettingsExpander, SettingsGroup, Stack } from "@quotepedia/solid";
import { scopedTranslator } from "@solid-primitives/i18n";
import { LocaleSwitcher } from "~/features/change-locale";
import { ThemeSwitcher } from "~/features/change-theme";
import { useScopedTranslator } from "~/shared/i18n";
import { useTheme } from "~/shared/theme";

export const SettingsAppearanceSection = () => {
  const theme = useTheme();
  const t = useScopedTranslator("routes.settings.sections.appearance");

  return (
    <Stack.Vertical class="items-start gap-3">
      <Heading as="h2" size="subheading">
        {t("heading")}
      </Heading>

      <SettingsGroup>
        <SettingsExpander>
          <SettingsExpander.Trigger>
            <Icon icon="heroicons:paint-brush-16-solid" class="size-4" />
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header>{t("cards.theme.heading")}</SettingsCard.Header>
              <SettingsCard.Description>{t("cards.theme.description")}</SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <SettingsCard.Value>{scopedTranslator(t, "cards.theme.options")(theme.theme())}</SettingsCard.Value>
            <SettingsExpander.Indicator />
          </SettingsExpander.Trigger>
          <SettingsExpander.Content>
            <ThemeSwitcher class="px-3 py-2" />
          </SettingsExpander.Content>
        </SettingsExpander>
        <SettingsCard>
          <Icon icon="heroicons:language-16-solid" class="size-4" />
          <SettingsCard.HeaderGroup>
            <SettingsCard.Header>{t("cards.locale.heading")}</SettingsCard.Header>
            <SettingsCard.Description>{t("cards.locale.description")}</SettingsCard.Description>
          </SettingsCard.HeaderGroup>
          <LocaleSwitcher />
        </SettingsCard>
      </SettingsGroup>
    </Stack.Vertical>
  );
};
