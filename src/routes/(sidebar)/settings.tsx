import { A } from "@solidjs/router";
import {
  arrowTopRightOnSquare,
  chatBubbleOvalLeft,
  chevronRight,
  codeBracket,
  globeAlt,
  informationCircle,
  paintBrush,
  userCircle,
} from "solid-heroicons/solid-mini";
import {
  Heading,
  LocaleSwitcher,
  Separator,
  SettingsCard,
  SettingsExpander,
  SettingsGroup,
  ThemeSwitcher,
  Title,
} from "~/components";
import { useI18n } from "~/lib/i18n";
import { useTheme } from "~/lib/theme";

export default function Settings() {
  const i18n = useI18n();
  const t = i18n.t.routes.settings;

  const theme = useTheme();

  return (
    <div class="space-y-6">
      <Title>{t.heading()}</Title>
      <Heading>{t.heading()}</Heading>

      <section class="space-y-3">
        <Heading as="h2" size="subheading">
          {t.sections.account.heading()}
        </Heading>

        <SettingsGroup>
          <SettingsCard variant="hover" as={A} href="/settings/account">
            <SettingsCard.Icon path={userCircle} class="size-4" />
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header>{t.sections.account.cards.account.heading()}</SettingsCard.Header>
              <SettingsCard.Description>{t.sections.account.cards.account.description()}</SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <SettingsCard.Icon path={chevronRight} class="size-4 text-fg-muted" />
          </SettingsCard>
        </SettingsGroup>
      </section>

      <section class="space-y-3">
        <Heading as="h2" size="subheading">
          {t.sections.appearance.heading()}
        </Heading>

        <SettingsGroup>
          <SettingsExpander>
            <SettingsExpander.Trigger>
              <SettingsCard.Icon path={paintBrush} class="size-4" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header>{t.sections.appearance.cards.theme.heading()}</SettingsCard.Header>
                <SettingsCard.Description>{t.sections.appearance.cards.theme.description()}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <SettingsCard.Value>{t.sections.appearance.cards.theme.options[theme.theme()]()}</SettingsCard.Value>
              <SettingsExpander.Indicator />
            </SettingsExpander.Trigger>
            <SettingsExpander.Content>
              <ThemeSwitcher class="px-3 py-2" />
            </SettingsExpander.Content>
          </SettingsExpander>
          <SettingsCard>
            <SettingsCard.Icon path={globeAlt} class="size-4" />
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header>{t.sections.appearance.cards.locale.heading()}</SettingsCard.Header>
              <SettingsCard.Description>{t.sections.appearance.cards.locale.description()}</SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <LocaleSwitcher />
          </SettingsCard>
        </SettingsGroup>
      </section>

      <section class="space-y-3">
        <Heading as="h2" size="subheading">
          {t.sections.about.heading()}
        </Heading>

        <SettingsGroup>
          <SettingsExpander>
            <SettingsExpander.Trigger>
              <SettingsCard.Icon path={informationCircle} class="size-4" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header class="capitalize">{import.meta.env.APP_NAME}</SettingsCard.Header>
                <SettingsCard.Description>
                  &copy; {import.meta.env.APP_AUTHOR_NAME}. {t.sections.about.cards.app.description()}
                </SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <SettingsCard.Value as="code">{import.meta.env.APP_VERSION}</SettingsCard.Value>
              <SettingsExpander.Indicator />
            </SettingsExpander.Trigger>
            <SettingsExpander.Content>
              <SettingsCard variant="hover" as={A} href={import.meta.env.APP_BUGS_URL} target="_blank">
                <SettingsCard.Icon path={chatBubbleOvalLeft} class="size-4" />
                <SettingsCard.HeaderGroup>
                  <SettingsCard.Header>{t.sections.about.cards.app.feedback.heading()}</SettingsCard.Header>
                  <SettingsCard.Description>
                    {t.sections.about.cards.app.feedback.description()}
                  </SettingsCard.Description>
                </SettingsCard.HeaderGroup>
                <SettingsCard.Icon path={arrowTopRightOnSquare} class="size-4 text-fg-muted" />
              </SettingsCard>
              <Separator orientation="horizontal" />
              <SettingsCard variant="hover" as={A} href={import.meta.env.APP_REPOSITORY_URL} target="_blank">
                <SettingsCard.Icon path={codeBracket} class="size-4" />
                <SettingsCard.HeaderGroup>
                  <SettingsCard.Header>{t.sections.about.cards.app.contribute.heading()}</SettingsCard.Header>
                  <SettingsCard.Description>
                    {t.sections.about.cards.app.contribute.description()}
                  </SettingsCard.Description>
                </SettingsCard.HeaderGroup>
                <SettingsCard.Icon path={arrowTopRightOnSquare} class="size-4 text-fg-muted" />
              </SettingsCard>
            </SettingsExpander.Content>
          </SettingsExpander>
        </SettingsGroup>
      </section>
    </div>
  );
}
