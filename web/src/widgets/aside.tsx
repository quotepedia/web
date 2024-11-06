import { Avatar } from "@quotepedia/solid";
import { createAsync } from "@solidjs/router";
import { cog, folder, home } from "solid-heroicons/solid-mini";
import { Show } from "solid-js";
import { getCurrentUser } from "~/entities/user";
import { formatStorageObject } from "~/shared/api";
import { Sidebar } from "~/shared/components";
import { useI18n } from "~/shared/i18n";

export const Aside = () => {
  const i18n = useI18n();
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <Sidebar>
      <Sidebar.Item href="/" end>
        <Sidebar.ItemIcon path={home} />
        <Sidebar.ItemLabel>Home</Sidebar.ItemLabel>
      </Sidebar.Item>
      <Sidebar.Item href="/library">
        <Sidebar.ItemIcon path={folder} />
        <Sidebar.ItemLabel>Library</Sidebar.ItemLabel>
      </Sidebar.Item>
      <Sidebar.Item href="/settings" class="group xl:mt-auto">
        <Show when={currentUser()} fallback={<Sidebar.ItemIcon path={cog} />}>
          {(user) => (
            <Sidebar.ItemIcon as={Avatar}>
              <Avatar.Img src={user().avatar_url && formatStorageObject(user().avatar_url!)} alt={user().email} />
            </Sidebar.ItemIcon>
          )}
        </Show>
        <Sidebar.ItemLabel>{i18n.t.routes.settings.heading()}</Sidebar.ItemLabel>
      </Sidebar.Item>
    </Sidebar>
  );
};
