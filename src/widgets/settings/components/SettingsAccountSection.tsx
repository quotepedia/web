import { A, createAsync } from "@solidjs/router";
import { chevronRight, userCircle } from "solid-heroicons/solid-mini";
import { Show } from "solid-js";
import { getCurrentUser } from "~/shared/api/users/me";
import { Avatar, Heading, SettingsCard, SettingsGroup } from "~/shared/components";
import { useI18n } from "~/shared/i18n";

export const SettingsAccountSection = () => {
  const i18n = useI18n();
  const t = i18n.t.routes.settings.sections.account;

  const currentUser = createAsync(() => getCurrentUser());

  return (
    <section class="space-y-3">
      <Heading as="h2" size="subheading">
        {t.heading()}
      </Heading>

      <SettingsGroup>
        <SettingsCard variant="hover" as={A} href={"/settings/account"}>
          <Show when={currentUser()?.avatar_url} fallback={<SettingsCard.Icon path={userCircle} class="size-4" />}>
            {(avatar_url) => (
              <Avatar class="size-4">
                <Avatar.Img src={avatar_url()} alt="" />
              </Avatar>
            )}
          </Show>
          <SettingsCard.HeaderGroup>
            <SettingsCard.Header>{t.cards.account.heading()}</SettingsCard.Header>
            <SettingsCard.Description>{t.cards.account.description()}</SettingsCard.Description>
          </SettingsCard.HeaderGroup>
          <SettingsCard.Icon path={chevronRight} class="size-4 text-fg-muted" />
        </SettingsCard>
      </SettingsGroup>
    </section>
  );
};
