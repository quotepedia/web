import { Icon, SettingsCard, SettingsGroup, Stack } from "@quotepedia/solid";
import { A, createAsync, useSubmission } from "@solidjs/router";
import { unauthenticate } from "@src/entities/auth";
import { getCurrentUser } from "@src/entities/user";
import { useScopedTranslator } from "@src/shared/i18n";
import { Show } from "solid-js";

export const AccountSecuritySection = () => {
  const t = useScopedTranslator("settings.account");

  const currentUser = createAsync(() => getCurrentUser());

  const unauthenticating = useSubmission(unauthenticate);

  return (
    <Show when={currentUser()}>
      {(user) => (
        <Stack.Vertical class="items-start gap-3">
          <SettingsGroup>
            <SettingsCard variant="hover" as={A} href="/settings/account/update-email">
              <Icon icon="f7:envelope" class="text-fg-accent size-6" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header>{t("email.heading")}</SettingsCard.Header>
                <SettingsCard.Description>{t("email.description")}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <SettingsCard.Value>{user().email}</SettingsCard.Value>
              <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
            </SettingsCard>

            <SettingsCard variant="hover" as={A} href="/settings/account/update-password">
              <Icon icon="f7:asterisk-circle" class="text-fg-accent size-6" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header>{t("password.heading")}</SettingsCard.Header>
                <SettingsCard.Description>{t("password.description")}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
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
              <Icon icon="f7:square-arrow-right" class="size-6 text-red-600" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header class="text-red-600">{t("signout.heading")}</SettingsCard.Header>
              </SettingsCard.HeaderGroup>
              <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
            </SettingsCard>
          </SettingsGroup>
        </Stack.Vertical>
      )}
    </Show>
  );
};
