import { Image } from "@kobalte/core/image";
import { A } from "@solidjs/router";
import { arrowTopRightOnSquare, chatBubbleOvalLeft, codeBracket, informationCircle } from "solid-heroicons/solid-mini";
import { Heading, Separator, SettingsCard, SettingsExpander, SettingsGroup } from "~/shared/components";
import { useI18n } from "~/shared/i18n";

export const SettingsAboutSection = () => {
  const i18n = useI18n();
  const t = i18n.t.routes.settings.sections.about;

  return (
    <section class="space-y-3">
      <Heading as="h2" size="subheading">
        {t.heading()}
      </Heading>

      <SettingsGroup>
        <SettingsExpander>
          <SettingsExpander.Trigger>
            <Image class="size-4">
              <Image.Img src="/favicon.svg" alt={import.meta.env.APP_NAME} />
              <Image.Fallback as={SettingsCard.Icon} path={informationCircle} />
            </Image>
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header class="capitalize">{import.meta.env.APP_NAME}</SettingsCard.Header>
              <SettingsCard.Description>
                &copy; {import.meta.env.APP_AUTHOR_NAME}. {t.cards.app.description()}
              </SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <SettingsCard.Value as="code">{import.meta.env.APP_VERSION}</SettingsCard.Value>
            <SettingsExpander.Indicator />
          </SettingsExpander.Trigger>
          <SettingsExpander.Content>
            <SettingsCard variant="hover" as={A} href={import.meta.env.APP_BUGS_URL} target="_blank">
              <SettingsCard.Icon path={chatBubbleOvalLeft} class="size-4" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header>{t.cards.app.feedback.heading()}</SettingsCard.Header>
                <SettingsCard.Description>{t.cards.app.feedback.description()}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <SettingsCard.Icon path={arrowTopRightOnSquare} class="size-4 text-fg-muted" />
            </SettingsCard>
            <Separator orientation="horizontal" />
            <SettingsCard variant="hover" as={A} href={import.meta.env.APP_REPOSITORY_URL} target="_blank">
              <SettingsCard.Icon path={codeBracket} class="size-4" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header>{t.cards.app.contribute.heading()}</SettingsCard.Header>
                <SettingsCard.Description>{t.cards.app.contribute.description()}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <SettingsCard.Icon path={arrowTopRightOnSquare} class="size-4 text-fg-muted" />
            </SettingsCard>
          </SettingsExpander.Content>
        </SettingsExpander>
      </SettingsGroup>
    </section>
  );
};
