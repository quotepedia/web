import { createAsync } from "@solidjs/router";
import { Show, splitProps } from "solid-js";

import { cog, folder, home } from "solid-heroicons/solid-mini";

import { getCurrentUser } from "~/shared/api/users/me";
import { useI18n } from "~/shared/i18n";

import { Avatar } from "~/shared/components";
import { SidebarRoot } from "~/shared/components/sidebar";
import { SidebarItem } from "~/shared/components/sidebar/item";
import { cn } from "~/shared/utils/css";

export const Sidebar = () => {
  const i18n = useI18n();
  const currentUser = createAsync(() => getCurrentUser());
  return (
    <SidebarRoot>
      <SidebarItem href="/" end>
        <SidebarItem.Icon path={home} />
        <SidebarItem.Label>Home</SidebarItem.Label>
      </SidebarItem>
      <SidebarItem href="/library">
        <SidebarItem.Icon path={folder} />
        <SidebarItem.Label>Library</SidebarItem.Label>
      </SidebarItem>
      <SidebarItem href="/settings" class="group md:mt-auto">
        <Show when={currentUser()} fallback={<SidebarItem.Icon path={cog} />}>
          {(user) => (
            <SidebarItem.Icon
              as={(props) => {
                const [local, rest] = splitProps(props, ["class"]);
                return (
                  <Avatar class={cn(local.class)} {...rest}>
                    <Avatar.Img src={user().avatar_url} alt={user().email} />
                  </Avatar>
                );
              }}
            />
          )}
        </Show>

        <SidebarItem.Label>{i18n.t.routes.settings.heading()}</SidebarItem.Label>
      </SidebarItem>
    </SidebarRoot>
  );
};
