import { Group } from "@quotepedia/solid";
import { useScopedTranslator } from "~/lib/i18n";

export const SettingsAboutSection = () => {
  const t = useScopedTranslator("settings.about");

  return (
    <Group>
      <Group.Label>{t("label")}</Group.Label>
      <Group.Content>
        <Group.Item as="a" href={t("news.url")} target="_blank" rel="noopener noreferrer" hoverable>
          <Group.ItemIcon icon="f7:bell" />
          <Group.ItemGroup>
            <Group.ItemLabel>{t("news.heading")}</Group.ItemLabel>
            <Group.ItemDescription>{t("news.url")}</Group.ItemDescription>
          </Group.ItemGroup>
          <Group.ItemChevron />
        </Group.Item>

        <Group.Item as="a" href={import.meta.env.APP_BUGS_URL} target="_blank" rel="noopener noreferrer" hoverable>
          <Group.ItemIcon icon="f7:flag" />
          <Group.ItemGroup>
            <Group.ItemLabel>{t("feedback.heading")}</Group.ItemLabel>
            <Group.ItemDescription>{import.meta.env.APP_BUGS_URL}</Group.ItemDescription>
          </Group.ItemGroup>
          <Group.ItemChevron />
        </Group.Item>

        <Group.Item
          as="a"
          href={import.meta.env.APP_REPOSITORY_URL}
          target="_blank"
          rel="noopener noreferrer"
          hoverable
        >
          <Group.ItemIcon icon="f7:chevron-left-slash-chevron-right" />
          <Group.ItemGroup>
            <Group.ItemLabel>{t("contribute.heading")}</Group.ItemLabel>
            <Group.ItemDescription>{import.meta.env.APP_REPOSITORY_URL}</Group.ItemDescription>
          </Group.ItemGroup>
          <Group.ItemChevron />
        </Group.Item>
      </Group.Content>
    </Group>
  );
};
