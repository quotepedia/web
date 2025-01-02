import { Avatar } from "@quotepedia/solid";
import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { getCurrentUser } from "~/lib/api/users/me";
import { formatStorageObject } from "~/lib/api";
import { useTranslator } from "~/lib/i18n";
import { Sidebar } from "./sidebar";

export const Aside = () => {
  const t = useTranslator();
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <Sidebar>
      <Sidebar.Group class="max-lg:basis-2/3">
        <Sidebar.GroupLabel>{t("quotepedia")}</Sidebar.GroupLabel>
        <Sidebar.Item href="/" end>
          <Sidebar.ItemIcon icon="ion:telescope" />
          <Sidebar.ItemLabel>{t("routes.explore.title")}</Sidebar.ItemLabel>
        </Sidebar.Item>
        <Sidebar.Item href="/library">
          <Sidebar.ItemIcon icon="ion:library" />
          <Sidebar.ItemLabel>{t("routes.library.title")}</Sidebar.ItemLabel>
        </Sidebar.Item>
      </Sidebar.Group>

      <Sidebar.Group class="max-lg:hidden">
        <Sidebar.GroupLabel>{t("components.aside.collections")}</Sidebar.GroupLabel>
      </Sidebar.Group>

      <Sidebar.Group class="max-lg:basis-1/3 lg:mt-auto">
        <Sidebar.Item href="/settings" class="group">
          <Show when={currentUser()} fallback={<Sidebar.ItemIcon icon="f7:gear" />}>
            {(user) => (
              <Sidebar.ItemIcon as={Avatar}>
                <Avatar.Img src={user().avatar_url && formatStorageObject(user().avatar_url!)} alt={user().email} />
              </Sidebar.ItemIcon>
            )}
          </Show>
          <Sidebar.ItemLabel>{t("settings.title")}</Sidebar.ItemLabel>
        </Sidebar.Item>
      </Sidebar.Group>
    </Sidebar>
  );
};
