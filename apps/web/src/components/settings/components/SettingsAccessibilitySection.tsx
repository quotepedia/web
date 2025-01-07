import { Icon, SettingsCard, SettingsGroup } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { useScopedTranslator } from "~/lib/i18n";
import { useSettings } from "~/lib/settings";

export const SettingsAccessibilitySection = () => {
  const settings = useSettings();
  const t = useScopedTranslator("settings.appearance");

  return (
    <SettingsGroup>
      <SettingsCard variant="hover" as={A} href="/settings/shortcuts">
        <Icon icon="f7:keyboard" class="text-fg-accent size-6" />
        <SettingsCard.HeaderGroup>
          <SettingsCard.Header>{t("shortcuts.heading")}</SettingsCard.Header>
          <SettingsCard.Description>{t("shortcuts.description")}</SettingsCard.Description>
        </SettingsCard.HeaderGroup>
        <SettingsCard.Value class="capitalize">
          {Object.entries(settings.store.shortcuts || {}).filter(([, value]) => value.length).length}
        </SettingsCard.Value>
        <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
      </SettingsCard>
    </SettingsGroup>
  );
};
