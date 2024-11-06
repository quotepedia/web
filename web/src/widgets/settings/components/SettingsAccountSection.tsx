import { Avatar, Heading, SettingsCard, SettingsGroup, Stack } from "@quotepedia/solid";
import { A, createAsync } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { chevronRight, userCircle } from "solid-heroicons/solid-mini";
import { Show } from "solid-js";
import { getCurrentUser } from "~/entities/user";
import { formatStorageObject } from "~/shared/api";
import { useI18n } from "~/shared/i18n";

export const SettingsAccountSection = () => {
  const i18n = useI18n();
  const t = i18n.t.routes.settings.sections.account;

  const currentUser = createAsync(() => getCurrentUser());

  return (
    <Stack.Vertical class="items-start gap-3">
      <Heading as="h2" size="subheading">
        {t.heading()}
      </Heading>

      <SettingsGroup>
        <SettingsCard variant="hover" as={A} href={"/settings/account"}>
          <Show when={currentUser()} fallback={<Icon path={userCircle} class="size-4" />}>
            {(user) => (
              <Avatar class="size-4">
                <Avatar.Img src={user().avatar_url && formatStorageObject(user().avatar_url!)} alt={user().email} />
              </Avatar>
            )}
          </Show>
          <SettingsCard.HeaderGroup>
            <SettingsCard.Header>{t.cards.account.heading()}</SettingsCard.Header>
            <SettingsCard.Description>{t.cards.account.description()}</SettingsCard.Description>
          </SettingsCard.HeaderGroup>
          <Icon path={chevronRight} class="text-fg-muted size-4" />
        </SettingsCard>
      </SettingsGroup>
    </Stack.Vertical>
  );
};
