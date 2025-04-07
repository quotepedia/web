import { Button, Container, Fade, Heading, Icon, NavigationBar, Skeleton } from "@quotepedia/solid";
import { A, createAsync, createAsyncStore, type RouteDefinition, type RouteSectionProps } from "@solidjs/router";
import { createMemo, Show, Suspense } from "solid-js";
import { Transition, TransitionGroup } from "solid-transition-group";
import CollectionDropdown from "~/components/collections/CollectionDropdown";
import EmojiImg from "~/components/Emoji";
import { QuoteList } from "~/components/quotes/QuoteList";
import { CollectionVisibility, getCollection } from "~/lib/api/collections";
import { getCollectionQuotes } from "~/lib/api/quotes";
import { usePlurarized, useTranslator } from "~/lib/i18n";

export const route: RouteDefinition = {
  preload: (props) => {
    getCollection(Number(props.params.id));
  },
};

export default (props: RouteSectionProps) => {
  const t = useTranslator();
  const collection = createAsyncStore(() => getCollection(Number(props.params.id)), { deferStream: true });

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
              <NavigationBar.Center class="gap-0 !overflow-visible">
                <hgroup class="relative flex flex-row items-center justify-center gap-1">
                  <TransitionGroup
                    enterClass="scale-0 opacity-0"
                    enterActiveClass="transition duration-500 ease-spring"
                    exitActiveClass="transition duration-300 ease-out absolute right-0 translate-x-1"
                    exitToClass="scale-50 opacity-0"
                    moveClass="transition duration-300 ease-in-out"
                  >
                    <h2 class="font-semibold">{collection().name}</h2>
                    <Show when={collection().visibility === CollectionVisibility.Private}>
                      <Icon icon="f7:lock-fill" class="text-fg-muted size-4" />
                    </Show>
                  </TransitionGroup>
                </hgroup>
                <span class="text-fg-muted text-sm leading-none">
                  {usePlurarized("quotes", collection().quotes_count)}
                </span>
              </NavigationBar.Center>
              <NavigationBar.Trailing>
                <CollectionDropdown collection={collection()} />
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
};
