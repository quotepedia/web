import { Avatar } from "@quotepedia/solid";
import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { getCurrentUser } from "~/entities/user";
import { formatStorageObject } from "~/shared/api";
import { useI18n } from "~/shared/i18n";

import { DEFAULT_APP_TITLE } from "../app-title";
import { library, cog, telescope } from "./icons";
import { Sidebar } from "./sidebar";

export const Aside = () => {
  const i18n = useI18n();
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <Sidebar>
      <Sidebar.Group class="max-xl:basis-2/3">
        <Sidebar.GroupLabel>{DEFAULT_APP_TITLE}</Sidebar.GroupLabel>
        <Sidebar.Item href="/" end>
          <Sidebar.ItemIcon path={telescope} />
          <Sidebar.ItemLabel>Explore</Sidebar.ItemLabel>
        </Sidebar.Item>
        <Sidebar.Item href="/library">
          <Sidebar.ItemIcon path={library} />
          <Sidebar.ItemLabel>Library</Sidebar.ItemLabel>
        </Sidebar.Item>
      </Sidebar.Group>

      <Sidebar.Group class="max-xl:hidden">
        <Sidebar.GroupLabel>Collections</Sidebar.GroupLabel>
      </Sidebar.Group>

      <Sidebar.Group class="max-xl:basis-1/3 xl:mt-auto">
        <Sidebar.Item href="/settings" class="group">
          <Show when={currentUser()} fallback={<Sidebar.ItemIcon path={cog} />}>
            {(user) => (
              <Sidebar.ItemIcon as={Avatar}>
                <Avatar.Img src={user().avatar_url && formatStorageObject(user().avatar_url!)} alt={user().email} />
              </Sidebar.ItemIcon>
            )}
          </Show>
          <Sidebar.ItemLabel>{i18n.t.routes.settings.heading()}</Sidebar.ItemLabel>
        </Sidebar.Item>
      </Sidebar.Group>
    </Sidebar>
  );
};
