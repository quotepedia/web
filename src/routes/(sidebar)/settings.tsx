import { A } from "@solidjs/router";
import { chevronRight, globeAlt, informationCircle, paintBrush, userCircle } from "solid-heroicons/solid-mini";
import {
  Heading,
  LocaleSwitcher,
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
  const theme = useTheme();

  return (
    <div class="space-y-6">
      <Title>{i18n.t.routes.settings.heading()}</Title>
      <Heading>{i18n.t.routes.settings.heading()}</Heading>

      <section class="space-y-3">
        <Heading as="h2" size="subheading">
          {i18n.t.routes.settings.sections.account.heading()}
        </Heading>

        <SettingsGroup>
          <SettingsCard as={A} href="/settings/account" variant="hover">
            <SettingsCard.Icon path={userCircle} class="size-4" />
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header>
                {i18n.t.routes.settings.sections.account.cards.account.heading()}
              </SettingsCard.Header>
              <SettingsCard.Description>
                {i18n.t.routes.settings.sections.account.cards.account.description()}
              </SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <SettingsCard.Icon path={chevronRight} class="size-4" />
          </SettingsCard>
        </SettingsGroup>
      </section>

      <section class="space-y-3">
        <Heading as="h2" size="subheading">
          {i18n.t.routes.settings.sections.appearance.heading()}
        </Heading>

        <SettingsGroup>
          <SettingsExpander>
            <SettingsExpander.Trigger class="rounded-t-md">
              <SettingsCard.Icon path={paintBrush} class="size-4" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header>
                  {i18n.t.routes.settings.sections.appearance.cards.theme.heading()}
                </SettingsCard.Header>
                <SettingsCard.Description>
                  {i18n.t.routes.settings.sections.appearance.cards.theme.description()}
                </SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <SettingsCard.Value>
                {i18n.t.routes.settings.sections.appearance.cards.theme.options[theme.theme()]()}
              </SettingsCard.Value>
              <SettingsExpander.Indicator />
            </SettingsExpander.Trigger>
            <SettingsExpander.Content>
              <ThemeSwitcher class="px-6 py-3" />
            </SettingsExpander.Content>
          </SettingsExpander>
          <SettingsCard>
            <SettingsCard.Icon path={globeAlt} class="size-4" />
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header>
                {i18n.t.routes.settings.sections.appearance.cards.locale.heading()}
              </SettingsCard.Header>
              <SettingsCard.Description>
                {i18n.t.routes.settings.sections.appearance.cards.locale.description()}
              </SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <LocaleSwitcher />
          </SettingsCard>
        </SettingsGroup>
      </section>

      <section class="space-y-3">
        <Heading as="h2" size="subheading">
          {i18n.t.routes.settings.sections.about.heading()}
        </Heading>

        <SettingsGroup>
          <SettingsCard>
            <SettingsCard.Icon path={informationCircle} class="size-4" />
            <SettingsCard.HeaderGroup>
              <SettingsCard.Header class="capitalize">{import.meta.env.VITE_APP_NAME}</SettingsCard.Header>
              <SettingsCard.Description>
                {i18n.t.routes.settings.sections.about.cards.app.description()}
              </SettingsCard.Description>
            </SettingsCard.HeaderGroup>
            <SettingsCard.Value as="code">{import.meta.env.VITE_APP_VERSION}</SettingsCard.Value>
          </SettingsCard>
        </SettingsGroup>
      </section>
    </div>
  );
}
