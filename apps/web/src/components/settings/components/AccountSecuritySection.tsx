import { Group, Stack } from "@quotepedia/solid";
import { A, createAsync, useSubmission } from "@solidjs/router";
import { Show } from "solid-js";
import { logoutAction } from "~/lib/api/auth";
import { getCurrentUser } from "~/lib/api/users/me";
import { useScopedTranslator } from "~/lib/i18n";

export const AccountSecuritySection = () => {
  const t = useScopedTranslator("settings.account");

  const currentUser = createAsync(() => getCurrentUser());

  const unauthenticating = useSubmission(logoutAction);

  return (
    <Show when={currentUser()}>
      {(user) => (
        <Stack.Vertical class="gap-6">
          <Group>
            <Group.Content>
              <Group.Item as={A} href="/settings/account/update-email" hoverable>
                <Group.ItemIcon icon="f7:envelope" />
                <Group.ItemGroup>
                  <Group.ItemLabel>{t("email.heading")}</Group.ItemLabel>
                  <Group.ItemDescription>{t("email.description")}</Group.ItemDescription>
                </Group.ItemGroup>
                <Group.ItemValue>{user().email}</Group.ItemValue>
                <Group.ItemChevron />
              </Group.Item>

              <Group.Item as={A} href="/settings/account/update-password" hoverable>
                <Group.ItemIcon icon="f7:asterisk-circle" />
                <Group.ItemGroup>
                  <Group.ItemLabel>{t("password.heading")}</Group.ItemLabel>
                  <Group.ItemDescription>{t("password.description")}</Group.ItemDescription>
                </Group.ItemGroup>
                <Group.ItemChevron />
              </Group.Item>
            </Group.Content>
          </Group>

          <Group as="form" action={logoutAction} method="post">
            <Group.Content>
              <Group.Item
                as="button"
                type="submit"
                disabled={unauthenticating.pending}
                aria-busy={unauthenticating.pending}
                hoverable
              >
                <Group.ItemIcon icon="f7:square-arrow-right" class="text-red-600" />
                <Group.ItemGroup>
                  <Group.ItemLabel class="text-red-600">{t("signout.heading")}</Group.ItemLabel>
                </Group.ItemGroup>
                <Group.ItemChevron />
              </Group.Item>
            </Group.Content>
          </Group>
        </Stack.Vertical>
      )}
    </Show>
  );
};
