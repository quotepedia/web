import { Group, Switch } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { useI18n, useScopedTranslator } from "~/lib/i18n";
import { useSettings } from "~/lib/settings";
import { useTheme } from "~/lib/theme";

export const SettingsAppearanceSection = () => {
  const i18n = useI18n();
  const theme = useTheme();
  const settings = useSettings();

  const t = useScopedTranslator("settings.appearance");

  return (
    <Group>
      <Group.Label>{t("label")}</Group.Label>
      <Group.Content>
        <Group.Item as={A} href="/settings/theme" hoverable>
          <Group.ItemIcon icon="f7:paintbrush" />
          <Group.ItemGroup>
            <Group.ItemLabel>{t("theme.heading")}</Group.ItemLabel>
            <Group.ItemDescription>{t("theme.description")}</Group.ItemDescription>
          </Group.ItemGroup>
          <Group.ItemValue class="capitalize">
            {useScopedTranslator("settings.theme.options")(theme.theme())}
          </Group.ItemValue>
          <Group.ItemChevron />
        </Group.Item>

        <Group.Item as={A} href="/settings/language" hoverable>
          <Group.ItemIcon icon="f7:globe" />
          <Group.ItemGroup>
            <Group.ItemLabel>{t("language.heading")}</Group.ItemLabel>
            <Group.ItemDescription>{t("language.description")}</Group.ItemDescription>
          </Group.ItemGroup>
          <Group.ItemValue class="capitalize">
            {new Intl.DisplayNames(i18n.locale(), { type: "language" }).of(i18n.locale())}
          </Group.ItemValue>
          <Group.ItemChevron />
        </Group.Item>

        <Group.Item as={A} href="/settings/emoji" hoverable>
          <Group.ItemIcon icon="f7:smiley" />
          <Group.ItemGroup>
            <Group.ItemLabel>{t("emoji.heading")}</Group.ItemLabel>
            <Group.ItemDescription>{t("emoji.description")}</Group.ItemDescription>
          </Group.ItemGroup>
          <Group.ItemValue class="capitalize">{settings.store.emojiStyle}</Group.ItemValue>
          <Group.ItemChevron />
        </Group.Item>

        <Switch checked={settings.store.snowfall} onChange={(checked) => settings.set("snowfall", checked)}>
          <Switch.Input />
          <Group.Item>
            <Group.ItemIcon icon="f7:wind-snow" />
            <Group.ItemGroup>
              <Switch.Label as={Group.ItemLabel}>{t("snowfall.heading")}</Switch.Label>
              <Switch.Description as={Group.ItemDescription}>{t("snowfall.description")}</Switch.Description>
            </Group.ItemGroup>
            <Switch.Indicator />
          </Group.Item>
        </Switch>
      </Group.Content>
    </Group>
  );
};
