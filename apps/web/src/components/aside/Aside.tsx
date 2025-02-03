import { Avatar, Button, Dropdown, Icon } from "@quotepedia/solid";
import { createAsync, createAsyncStore, useNavigate } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import { formatStorageObject } from "~/lib/api";
import { getRecentUserCollections } from "~/lib/api/collections";
import { getCurrentUser } from "~/lib/api/users/me";
import { useTranslator } from "~/lib/i18n";
import { CollectionSidebarItemList } from "../collections";
import { Sidebar } from "./sidebar";

export const Aside = () => {
  const t = useTranslator();
  const navigate = useNavigate();
  const currentUser = createAsync(() => getCurrentUser());
  const collections = createAsyncStore(() => getRecentUserCollections());

  return (
    <Sidebar>
      <Sidebar.Group class="-mb-6 flex-row items-end overflow-y-hidden max-lg:hidden">
        <Dropdown placement="bottom">
          <Dropdown.Trigger as={Button} style="ghost" trailingIcon="f7:plus-circle" />
          <Dropdown.Content>
            <Dropdown.Item onSelect={() => navigate("/library/quotes/new")}>
              <Icon icon="f7:square-pencil" class="size-6" />
              <Dropdown.ItemLabel>{t("newQuote")}</Dropdown.ItemLabel>
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => navigate("/library/collections/new")}>
              <Icon icon="f7:folder-badge-plus" class="size-6" />
              <Dropdown.ItemLabel>{t("newCollection")}</Dropdown.ItemLabel>
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </Sidebar.Group>

      <Sidebar.Group class="max-lg:basis-2/3">
        <Sidebar.GroupLabel class="text-fg-body text-3xl font-bold">{t("quotepedia")}</Sidebar.GroupLabel>
        <Sidebar.Item href="/" end>
          <Sidebar.ItemIcon icon="ion:telescope" />
          <Sidebar.ItemLabel>{t("routes.explore.title")}</Sidebar.ItemLabel>
        </Sidebar.Item>
        <Sidebar.Item href="/library" end>
          <Sidebar.ItemIcon icon="ion:library" />
          <Sidebar.ItemLabel>{t("routes.library.title")}</Sidebar.ItemLabel>
        </Sidebar.Item>
      </Sidebar.Group>

      <Suspense>
        <Show when={currentUser()}>
          <Show when={collections()}>
            {(collections) => (
              <Sidebar.Group class="overflow-y-hidden max-lg:hidden">
                <Sidebar.GroupLabel class="text-fg-body text-xl font-bold">
                  {t("components.aside.collections")}
                </Sidebar.GroupLabel>
                <CollectionSidebarItemList collections={collections()} />
              </Sidebar.Group>
            )}
          </Show>
        </Show>
      </Suspense>

      <Sidebar.Group class="max-lg:basis-1/3 lg:mt-auto">
        <Sidebar.Item href="/settings" class="group">
          <Suspense fallback={<Sidebar.ItemIcon icon="f7:gear" />}>
            <Show when={currentUser()} fallback={<Sidebar.ItemIcon icon="f7:gear" />}>
              {(user) => (
                <Sidebar.ItemIcon as={Avatar}>
                  <Show when={user().avatar_url} fallback={<Avatar.Img src={undefined} alt={user().email} />}>
                    {(avatar_url) => <Avatar.Img src={formatStorageObject(avatar_url())} alt={user().email} />}
                  </Show>
                </Sidebar.ItemIcon>
              )}
            </Show>
          </Suspense>
          <Sidebar.ItemLabel>{t("settings.title")}</Sidebar.ItemLabel>
        </Sidebar.Item>
      </Sidebar.Group>
    </Sidebar>
  );
};
