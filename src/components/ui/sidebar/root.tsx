import { createAsync } from "@solidjs/router";
import { Component, Show, splitProps } from "solid-js";

import { bookmark, cog, folder, home } from "solid-heroicons/solid-mini";

import { getCurrentUser } from "~/lib/api/users/me";
import { useI18n } from "~/lib/i18n";

import { Avatar } from "../avatar";
import { SidebarItem } from "./item";
import { cn } from "~/lib/utils/css";

export const Sidebar: Component = () => {
  const i18n = useI18n();
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <aside class="sticky z-10 flex w-full max-md:bottom-0 md:top-0 md:max-h-dvh md:min-h-dvh md:max-w-64">
      <nav class="flex w-full gap-1 border-bg-tertiary bg-bg-default/75 py-2 backdrop-blur-xl transition-colors max-md:justify-between max-md:border-t md:flex-col md:border-r md:px-4 md:py-6">
        <SidebarItem href="/">
          <SidebarItem.Icon path={home} />
          <SidebarItem.Label>Home</SidebarItem.Label>
        </SidebarItem>
        <SidebarItem href="/saved">
          <SidebarItem.Icon path={bookmark} />
          <SidebarItem.Label>Saved</SidebarItem.Label>
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
    </aside>
  );
};
