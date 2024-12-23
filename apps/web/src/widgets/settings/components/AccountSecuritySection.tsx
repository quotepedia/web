import { Icon, Heading, SettingsCard, SettingsGroup, Stack } from "@quotepedia/solid";
import { A, createAsync, useSubmission } from "@solidjs/router";
import { Show } from "solid-js";
import { unauthenticate } from "~/entities/auth";
import { getCurrentUser } from "~/entities/user";
import { useScopedTranslator } from "~/shared/i18n";

export const AccountSecuritySection = () => {
  const t = useScopedTranslator("routes.settings.account.sections.security");

  const currentUser = createAsync(() => getCurrentUser());

  const unauthenticating = useSubmission(unauthenticate);

  return (
    <Show when={currentUser()}>
      {(user) => (
        <Stack.Vertical class="items-start gap-3">
          <Heading size="subheading" as="h2">
            {t("heading")}
          </Heading>

          <SettingsGroup>
            <SettingsCard variant="hover" as={A} href="/settings/account/update-email">
              <Icon icon="heroicons:envelope-open-16-solid" class="size-4" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header>{t("cards.email.heading")}</SettingsCard.Header>
                <SettingsCard.Description>{t("cards.email.description")}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <SettingsCard.Value>{user().email}</SettingsCard.Value>
              <Icon icon="heroicons:chevron-right-16-solid" class="text-fg-muted size-4" />
            </SettingsCard>

            <SettingsCard variant="hover" as={A} href="/settings/account/update-password">
              <Icon icon="heroicons:key-16-solid" class="size-4" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header>{t("cards.password.heading")}</SettingsCard.Header>
                <SettingsCard.Description>{t("cards.password.description")}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <Icon icon="heroicons:chevron-right-16-solid" class="text-fg-muted size-4" />
            </SettingsCard>
          </SettingsGroup>

          <SettingsGroup as="form" action={unauthenticate} method="post">
            <SettingsCard
              as={"button"}
              type="submit"
              disabled={unauthenticating.pending}
              aria-busy={unauthenticating.pending}
              variant="hover"
            >
              <Icon icon="heroicons:arrow-right-on-rectangle-20-solid" class="size-4 text-red-600" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header class="text-red-600">{t("cards.signout.heading")}</SettingsCard.Header>
                <SettingsCard.Description>{t("cards.signout.description")}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <Icon icon="heroicons:chevron-right-16-solid" class="text-fg-muted size-4" />
            </SettingsCard>
          </SettingsGroup>
        </Stack.Vertical>
      )}
    </Show>
  );
};
