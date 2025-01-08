import { Avatar, Group } from "@quotepedia/solid";
import { A, createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { formatStorageObject } from "~/lib/api";
import { getCurrentUser } from "~/lib/api/users/me";
import { useScopedTranslator } from "~/lib/i18n";

export const SettingsAccountSection = () => {
  const t = useScopedTranslator("settings.account");
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <Group>
      <Group.Content>
        <Group.Item as={A} href="/settings/account" hoverable>
          <Show when={currentUser()} fallback={<Group.ItemIcon icon="f7:person-crop-circle-fill" />}>
            {(user) => (
              <Avatar class="size-6">
                <Avatar.Img src={user().avatar_url && formatStorageObject(user().avatar_url!)} alt={user().email} />
              </Avatar>
            )}
          </Show>
          <Group.ItemGroup>
            <Group.ItemLabel>{t("heading")}</Group.ItemLabel>
            <Group.ItemDescription>{t("description")}</Group.ItemDescription>
          </Group.ItemGroup>
          <Group.ItemChevron />
        </Group.Item>
      </Group.Content>
    </Group>
  );
};
