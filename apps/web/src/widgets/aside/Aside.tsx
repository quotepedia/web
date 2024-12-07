import { Avatar } from "@quotepedia/solid";
import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { getCurrentUser } from "~/entities/user";
import { formatStorageObject } from "~/shared/api";
import { useTranslator } from "~/shared/i18n";

import { DEFAULT_APP_TITLE } from "../title";
import { cog, library, telescope } from "./icons";
import { Sidebar } from "./sidebar";

export const Aside = () => {
  const t = useTranslator();
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <Sidebar>
      <Sidebar.Group class="max-lg:basis-2/3">
        <Sidebar.GroupLabel>{DEFAULT_APP_TITLE}</Sidebar.GroupLabel>
        <Sidebar.Item href="/" end>
          <Sidebar.ItemIcon path={telescope} />
          <Sidebar.ItemLabel>{t("routes.explore.title")}</Sidebar.ItemLabel>
        </Sidebar.Item>
        <Sidebar.Item href="/library">
          <Sidebar.ItemIcon path={library} />
          <Sidebar.ItemLabel>{t("routes.library.title")}</Sidebar.ItemLabel>
        </Sidebar.Item>
      </Sidebar.Group>

      <Sidebar.Group class="max-lg:hidden">
        <Sidebar.GroupLabel>{t("components.aside.collections")}</Sidebar.GroupLabel>
      </Sidebar.Group>

      <Sidebar.Group class="max-lg:basis-1/3 lg:mt-auto">
        <Sidebar.Item href="/settings" class="group">
          <Show when={currentUser()} fallback={<Sidebar.ItemIcon path={cog} />}>
            {(user) => (
              <Sidebar.ItemIcon as={Avatar}>
                <Avatar.Img src={user().avatar_url && formatStorageObject(user().avatar_url!)} alt={user().email} />
              </Sidebar.ItemIcon>
            )}
          </Show>
          <Sidebar.ItemLabel>{t("routes.settings.heading")}</Sidebar.ItemLabel>
        </Sidebar.Item>
      </Sidebar.Group>
    </Sidebar>
  );
};
