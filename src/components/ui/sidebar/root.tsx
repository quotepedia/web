import { createAsync } from "@solidjs/router";
import { Component, Show, splitProps } from "solid-js";

import { cog, folder, home } from "solid-heroicons/solid-mini";

import { getCurrentUser } from "~/lib/api/users/me";
import { useI18n } from "~/lib/i18n";

import { cn } from "~/lib/utils/css";
import { Avatar } from "../avatar";
import { SidebarItem } from "./item";

export const Sidebar: Component = () => {
  const i18n = useI18n();
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <nav class="flex w-full gap-1 border-bg-tertiary bg-bg-default/75 py-2 backdrop-blur-xl transition-colors max-md:justify-between max-md:border-t md:flex-col md:px-4 md:py-6">
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
                  <Avatar class={cn("group-aria-[current='page']:max-md:ring-fg-accent", local.class)} {...rest}>
                    <Avatar.Img src={user().avatar_url} alt={user().email} />
                  </Avatar>
                );
              }}
            />
          )}
        </Show>

        <SidebarItem.Label>{i18n.t.routes.settings.heading()}</SidebarItem.Label>
      </SidebarItem>
    </nav>
  );
};
