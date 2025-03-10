import { Button, Container, Dropdown, Heading, Icon, NavigationBar, Skeleton } from "@quotepedia/solid";
import { A, createAsync, useAction, type RouteDefinition } from "@solidjs/router";
import { Match, Show, Suspense, Switch } from "solid-js";
import { DeleteCollectionDropdownItem } from "~/components/collections";
import EmojiImg from "~/components/Emoji";
import { QuoteList } from "~/components/quotes/QuoteList";
import { protect } from "~/hoc/session";
import type { operations } from "~/lib/api";
import { changeCollectionVisibilityAction, CollectionVisibility, getCollection } from "~/lib/api/collections";
import { getCollectionQuotes } from "~/lib/api/quotes";
import { getCurrentUser } from "~/lib/api/users/me";
import { usePlurarized, useTranslator } from "~/lib/i18n";

export const route: RouteDefinition = {
  preload: (props) => {
    getCollection(Number(props.params.id));
  },
};

export default protect((props) => {
  const t = useTranslator();
  const currentUser = createAsync(() => getCurrentUser());
  const collection = createAsync(() => getCollection(Number(props.params.id)), { deferStream: true });

  const changeCollectionVisibility = useAction(changeCollectionVisibilityAction);

  return (
    <Suspense
      fallback={
        <div class="flex h-full w-full grow flex-col">
          <NavigationBar>
            <NavigationBar.Leading>
              <Button as={A} href="/library/collections" style="ghost" leadingIcon="f7:chevron-left">
                {t("collections")}
              </Button>
            </NavigationBar.Leading>
            <NavigationBar.Center class="grow items-center justify-center">
              <Skeleton opacity={75} class="h-4 w-1/4" />
              <Skeleton opacity={50} class="h-3.5 w-1/3" />
            </NavigationBar.Center>
            <NavigationBar.Trailing>
              <Skeleton opacity={75} class="size-7 rounded-full" />
            </NavigationBar.Trailing>
          </NavigationBar>
          <Container size="wide" class="flex flex-col gap-10 py-6">
            <section class="flex flex-col items-center gap-4">
              <Skeleton opacity={75} class="size-20 rounded-full" />
              <div class="flex w-full flex-col items-center justify-center gap-3">
                <Skeleton opacity={75} class="h-9 w-1/3" />
                <Skeleton opacity={50} class="h-4 w-1/2" />
              </div>
            </section>
          </Container>
        </div>
      }
    >
      <Show when={collection()}>
        {(collection) => (
          <div class="flex h-full w-full grow flex-col">
            <NavigationBar>
              <NavigationBar.Leading>
                <Button as={A} href="/library/collections" style="ghost" leadingIcon="f7:chevron-left">
                  {t("collections")}
                </Button>
              </NavigationBar.Leading>
              <NavigationBar.Center class="gap-0">
                <hgroup class="flex flex-row items-center justify-center gap-1">
                  <h2 class="font-semibold">{collection().name}</h2>
                  <Show when={collection().visibility === CollectionVisibility.Private}>
                    <Icon icon="f7:lock-fill" class="text-fg-muted size-4" />
                  </Show>
                </hgroup>
                <span class="text-fg-muted text-sm leading-none">
                  {usePlurarized("quotes", collection().quotes_count)}
                </span>
              </NavigationBar.Center>
              <NavigationBar.Trailing>
                <Dropdown>
                  <Dropdown.Trigger as={Button} style="ghost" leadingIcon="f7:ellipsis-circle" />
                  <Dropdown.Content>
                    <Show when={currentUser()?.id === collection().created_by_user_id}>
                      <DeleteCollectionDropdownItem id={collection().id} />
                      <Dropdown.Item
                        onSelect={async () =>
                          await changeCollectionVisibility(
                            collection().id,
                            collection().visibility === CollectionVisibility.Private
                              ? CollectionVisibility.Public
                              : CollectionVisibility.Private,
                          )
                        }
                      >
                        <Switch>
                          <Match when={collection().visibility === CollectionVisibility.Private}>
                            <Icon icon="f7:lock-open" class="size-6" />
                            <Dropdown.ItemLabel>Make public</Dropdown.ItemLabel>
                          </Match>
                          <Match when={collection().visibility === CollectionVisibility.Public}>
                            <Icon icon="f7:lock" class="size-6" />
                            <Dropdown.ItemLabel>Make private</Dropdown.ItemLabel>
                          </Match>
                        </Switch>
                      </Dropdown.Item>
                    </Show>
                  </Dropdown.Content>
                </Dropdown>
              </NavigationBar.Trailing>
            </NavigationBar>
            <Container size="wide" class="flex flex-col gap-6 py-6">
              <section class="flex flex-col items-center gap-4">
                <EmojiImg emoji={collection().emote} class="size-20" />
                <hgroup class="space-y-3 text-center">
                  <Heading>{collection().name}</Heading>
                  <p>{collection().description}</p>
                </hgroup>
              </section>
              <Suspense>
                <QuoteList
                  fetcher={(query) => getCollectionQuotes(Number(props.params.id), query)}
                  collection_id={collection().id}
                />
              </Suspense>
            </Container>
          </div>
        )}
      </Show>
    </Suspense>
  );
});
