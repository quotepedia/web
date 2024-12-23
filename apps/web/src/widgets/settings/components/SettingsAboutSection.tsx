import { Image } from "@kobalte/core/image";
import { Icon, Heading, Separator, SettingsCard, SettingsExpander, SettingsGroup, Stack } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { useScopedTranslator } from "~/shared/i18n";

export const SettingsAboutSection = () => {
  const t = useScopedTranslator("routes.settings.sections.about");

  return (
    <Stack.Vertical class="items-start gap-3">
      <Heading as="h2" size="subheading">
        {t("heading")}
      </Heading>

      <SettingsGroup>
        <SettingsExpander>
          <SettingsExpander.Trigger>
            <Image class="size-4">
              <Image.Img src="/favicon.svg" alt={import.meta.env.APP_NAME} />
              <Image.Fallback as={Icon} icon="heroicons:information-circle-16-solid" />
            </Image>
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header class="capitalize">{import.meta.env.APP_NAME}</SettingsCard.Header>
              <SettingsCard.Description>
                &copy; {import.meta.env.APP_AUTHOR_NAME}. {t("cards.app.description")}
              </SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <SettingsCard.Value as="code">{import.meta.env.APP_VERSION}</SettingsCard.Value>
            <SettingsExpander.Indicator />
          </SettingsExpander.Trigger>
          <SettingsExpander.Content>
            <SettingsCard variant="hover" as={A} href={import.meta.env.APP_BUGS_URL} target="_blank">
              <Icon icon="heroicons:flag-16-solid" class="size-4" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header>{t("cards.app.feedback.heading")}</SettingsCard.Header>
                <SettingsCard.Description>{import.meta.env.APP_BUGS_URL}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <Icon icon="heroicons:arrow-top-right-on-square-16-solid" class="text-fg-muted size-4" />
            </SettingsCard>
            <Separator orientation="horizontal" />
            <SettingsCard variant="hover" as={A} href={import.meta.env.APP_REPOSITORY_URL} target="_blank">
              <Icon icon="heroicons:code-bracket-16-solid" class="size-4" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header>{t("cards.app.contribute.heading")}</SettingsCard.Header>
                <SettingsCard.Description>{import.meta.env.APP_REPOSITORY_URL}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <Icon icon="heroicons:arrow-top-right-on-square-16-solid" class="text-fg-muted size-4" />
            </SettingsCard>
          </SettingsExpander.Content>
        </SettingsExpander>
      </SettingsGroup>
    </Stack.Vertical>
  );
};
