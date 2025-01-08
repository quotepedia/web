import { Group } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { useScopedTranslator } from "~/lib/i18n";
import { useSettings } from "~/lib/settings";

export const SettingsAccessibilitySection = () => {
  const settings = useSettings();
  const t = useScopedTranslator("settings.accessibility");

  return (
    <Group>
      <Group.Label>{t("label")}</Group.Label>
      <Group.Content>
        <Group.Item as={A} href="/settings/shortcuts" hoverable>
          <Group.ItemIcon icon="f7:keyboard" />
          <Group.ItemGroup>
            <Group.ItemLabel>{t("shortcuts.heading")}</Group.ItemLabel>
            <Group.ItemDescription>{t("shortcuts.description")}</Group.ItemDescription>
          </Group.ItemGroup>
          <Group.ItemValue class="capitalize">
            {Object.entries(settings.store.shortcuts || {}).filter(([, value]) => value.length).length}
          </Group.ItemValue>
          <Group.ItemChevron />
        </Group.Item>
      </Group.Content>
    </Group>
  );
};
