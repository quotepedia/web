import { Avatar, Icon, SettingsCard, SettingsGroup } from "@quotepedia/solid";
import { A, createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { getCurrentUser } from "~/lib/api/users/me";
import { formatStorageObject } from "~/lib/api";
import { useScopedTranslator } from "~/lib/i18n";

export const SettingsAccountSection = () => {
  const t = useScopedTranslator("settings.account");
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <SettingsGroup>
      <SettingsCard variant="hover" as={A} href="/settings/account">
        <Show when={currentUser()} fallback={<Icon icon="f7:person-crop-circle-fill" class="text-fg-accent size-6" />}>
          {(user) => (
            <Avatar class="size-6">
              <Avatar.Img src={user().avatar_url && formatStorageObject(user().avatar_url!)} alt={user().email} />
            </Avatar>
          )}
        </Show>
        <SettingsCard.HeaderGroup>
          <SettingsCard.Header>{t("heading")}</SettingsCard.Header>
          <SettingsCard.Description>{t("description")}</SettingsCard.Description>
        </SettingsCard.HeaderGroup>
        <Icon icon="f7:chevron-right" class="text-fg-muted size-4" />
      </SettingsCard>
    </SettingsGroup>
  );
};
