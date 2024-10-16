import { createAsync, useSubmission, type RouteDefinition } from "@solidjs/router";
import { arrowRightOnRectangle, chevronRight, envelopeOpen, key } from "solid-heroicons/solid-mini";
import { Show } from "solid-js";
import { AvatarEdit, Heading, SettingsCard, SettingsGroup } from "~/components";
import { ChangeEmailStepper } from "~/components/change-email/stepper";
import { ChangePasswordStepper } from "~/components/change-password/stepper";
import Dialog from "~/components/ui/dialog";
import { unauthenticate } from "~/lib/api/auth";
import { getCurrentUser } from "~/lib/api/users/me";
import { createEnsureLoggedIn } from "~/lib/http";
import { useI18n } from "~/lib/i18n";

export const route = {
  preload: ({ location }) => {
    createEnsureLoggedIn(location.pathname);
    getCurrentUser();
  },
  info: {
    title: () => useI18n().t.routes.settings.account.heading(),
  },
} satisfies RouteDefinition;

export default function AccountRoute() {
  const i18n = useI18n();
  const t = i18n.t.routes.settings;

  const currentUser = createAsync(() => getCurrentUser());

  const unauthenticating = useSubmission(unauthenticate);

  return (
    <Show when={currentUser()}>
      {(user) => (
        <div class="space-y-6">
          <section class="flex flex-col items-center justify-center gap-3 px-2 py-1 text-center">
            <AvatarEdit user={user()} />
            <hgroup>
              <Heading as="h3" size="subheading">
                {user().email}
              </Heading>
              <p class="text-base text-fg-muted">ID: {user().id}</p>
            </hgroup>
          </section>

          <section class="space-y-4">
            <Heading size="subheading" as="h2">
              {t.account.sections.security.heading()}
            </Heading>

            <SettingsGroup>
              <Dialog>
                <SettingsCard as={Dialog.Trigger} variant="hover">
                  <SettingsCard.Icon path={envelopeOpen} class="size-4" />
                  <SettingsCard.HeaderGroup>
                    <SettingsCard.Header>{t.account.sections.security.cards.email.heading()}</SettingsCard.Header>
                    <SettingsCard.Description>
                      {t.account.sections.security.cards.email.description()}
                    </SettingsCard.Description>
                  </SettingsCard.HeaderGroup>
                  <SettingsCard.Value>{user().email}</SettingsCard.Value>
                  <SettingsCard.Icon path={chevronRight} class="size-4 text-fg-muted" />
                </SettingsCard>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>{t.account.sections.security.cards.email.update()}</Dialog.Title>
                    <Dialog.Dismiss />
                  </Dialog.Header>
                  <ChangeEmailStepper />
                </Dialog.Content>
              </Dialog>

              <Dialog>
                <SettingsCard as={Dialog.Trigger} variant="hover">
                  <SettingsCard.Icon path={key} class="size-4" />
                  <SettingsCard.HeaderGroup>
                    <SettingsCard.Header>{t.account.sections.security.cards.password.heading()}</SettingsCard.Header>
                    <SettingsCard.Description>
                      {t.account.sections.security.cards.password.description()}
                    </SettingsCard.Description>
                  </SettingsCard.HeaderGroup>
                  <SettingsCard.Icon path={chevronRight} class="size-4 text-fg-muted" />
                </SettingsCard>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>{t.account.sections.security.cards.password.update()}</Dialog.Title>
                    <Dialog.Dismiss />
                  </Dialog.Header>
                  <ChangePasswordStepper />
                </Dialog.Content>
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
                <SettingsCard.Icon path={arrowRightOnRectangle} class="size-4 text-red-600" />
                <SettingsCard.HeaderGroup>
                  <SettingsCard.Header class="text-red-600">
                    {t.sections.account.cards.signout.heading()}
                  </SettingsCard.Header>
                  <SettingsCard.Description>{t.sections.account.cards.signout.description()}</SettingsCard.Description>
                </SettingsCard.HeaderGroup>
                <SettingsCard.Icon path={chevronRight} class="size-4 text-fg-muted" />
              </SettingsCard>
            </SettingsGroup>
          </section>
        </div>
      )}
    </Show>
  );
}
