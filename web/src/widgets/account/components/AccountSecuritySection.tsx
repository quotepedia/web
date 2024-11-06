import { Heading, SettingsCard, SettingsGroup, Stack } from "@quotepedia/solid";
import { createAsync, useSubmission } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { arrowRightOnRectangle, chevronRight, envelopeOpen, key } from "solid-heroicons/solid-mini";
import { Show } from "solid-js";
import { unauthenticate } from "~/entities/auth";
import { getCurrentUser } from "~/entities/user";
import { UpdateEmailStepper } from "~/features/update-email";
import { UpdatePasswordStepper } from "~/features/update-password";
import { Dialog } from "~/shared/components";
import { useI18n } from "~/shared/i18n";

export const AccountSecuritySection = () => {
  const i18n = useI18n();
  const t = i18n.t.routes.settings.account.sections.security;

  const currentUser = createAsync(() => getCurrentUser());

  const unauthenticating = useSubmission(unauthenticate);

  return (
    <Show when={currentUser()}>
      {(user) => (
        <Stack.Vertical class="items-start gap-3">
          <Heading size="subheading" as="h2">
            {t.heading()}
          </Heading>

          <SettingsGroup>
            <Dialog>
              <SettingsCard as={Dialog.Trigger} variant="hover">
                <Icon path={envelopeOpen} class="size-4" />
                <SettingsCard.HeaderGroup>
                  <SettingsCard.Header>{t.cards.email.heading()}</SettingsCard.Header>
                  <SettingsCard.Description>{t.cards.email.description()}</SettingsCard.Description>
                </SettingsCard.HeaderGroup>
                <SettingsCard.Value>{user().email}</SettingsCard.Value>
                <Icon path={chevronRight} class="text-fg-muted size-4" />
              </SettingsCard>
              <Dialog.Body>
                <Dialog.Header>
                  <Dialog.Title>{t.cards.email.update()}</Dialog.Title>
                  <Dialog.Dismiss />
                </Dialog.Header>
                <UpdateEmailStepper />
              </Dialog.Body>
            </Dialog>

            <Dialog>
              <SettingsCard as={Dialog.Trigger} variant="hover">
                <Icon path={key} class="size-4" />
                <SettingsCard.HeaderGroup>
                  <SettingsCard.Header>{t.cards.password.heading()}</SettingsCard.Header>
                  <SettingsCard.Description>{t.cards.password.description()}</SettingsCard.Description>
                </SettingsCard.HeaderGroup>
                <Icon path={chevronRight} class="text-fg-muted size-4" />
              </SettingsCard>
              <Dialog.Body>
                <Dialog.Header>
                  <Dialog.Title>{t.cards.password.update()}</Dialog.Title>
                  <Dialog.Dismiss />
                </Dialog.Header>
                <UpdatePasswordStepper />
              </Dialog.Body>
            </Dialog>
          </SettingsGroup>

          <SettingsGroup as="form" action={unauthenticate} method="post">
            <SettingsCard
              as={"button"}
              type="submit"
              disabled={unauthenticating.pending}
              aria-busy={unauthenticating.pending}
              variant="hover"
            >
              <Icon path={arrowRightOnRectangle} class="size-4 text-red-600" />
              <SettingsCard.HeaderGroup>
                <SettingsCard.Header class="text-red-600">{t.cards.signout.heading()}</SettingsCard.Header>
                <SettingsCard.Description>{t.cards.signout.description()}</SettingsCard.Description>
              </SettingsCard.HeaderGroup>
              <Icon path={chevronRight} class="text-fg-muted size-4" />
            </SettingsCard>
          </SettingsGroup>
        </Stack.Vertical>
      )}
    </Show>
  );
};
