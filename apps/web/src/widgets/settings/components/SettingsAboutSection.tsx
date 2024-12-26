import { Image } from "@kobalte/core/image";
import { Icon, Separator, SettingsCard, SettingsExpander, SettingsGroup } from "@quotepedia/solid";
import { useMessage, useScopedTranslator } from "@src/shared/i18n";

export const SettingsAboutSection = () => {
  const t = useScopedTranslator("settings.about");

  return (
    <SettingsGroup>
      <SettingsExpander>
        <SettingsExpander.Trigger>
          <Image class="text-fg-accent size-6">
            <Image.Img src="/favicon.svg" alt={useMessage("quotepedia")} />
            <Image.Fallback as={Icon} icon="f7:info-circle" />
          </Image>
          <SettingsCard.HeaderGroup>
            <SettingsCard.Header>{useMessage("quotepedia")}</SettingsCard.Header>
          </SettingsCard.HeaderGroup>
          <SettingsCard.Value as="code">{import.meta.env.APP_VERSION}</SettingsCard.Value>
          <SettingsExpander.Indicator />
        </SettingsExpander.Trigger>
        <SettingsExpander.Content>
          <Separator class="border-bg-secondary" />
          <SettingsCard variant="hover" as={"a"} href={t("news.url")} target="_blank">
            <Icon icon="f7:bell" class="text-fg-accent size-6" />
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header>{t("news.heading")}</SettingsCard.Header>
              <SettingsCard.Description>{t("news.url")}</SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
          </SettingsCard>
          <Separator class="border-bg-secondary" />
          <SettingsCard variant="hover" as={"a"} href={import.meta.env.APP_BUGS_URL} target="_blank">
            <Icon icon="f7:flag" class="text-fg-accent size-6" />
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header>{t("feedback.heading")}</SettingsCard.Header>
              <SettingsCard.Description>{import.meta.env.APP_BUGS_URL}</SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
          </SettingsCard>
          <Separator class="border-bg-secondary" />
          <SettingsCard variant="hover" as={"a"} href={import.meta.env.APP_REPOSITORY_URL} target="_blank">
            <Icon icon="f7:chevron-left-slash-chevron-right" class="text-fg-accent size-6" />
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header>{t("contribute.heading")}</SettingsCard.Header>
              <SettingsCard.Description>{import.meta.env.APP_REPOSITORY_URL}</SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
          </SettingsCard>
        </SettingsExpander.Content>
      </SettingsExpander>
    </SettingsGroup>
  );
};
