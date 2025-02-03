import { Button, Container, Heading, Icon, NavigationBar } from "@quotepedia/solid";
import { Repeat } from "@solid-primitives/range";
import { A, createAsyncStore } from "@solidjs/router";
import { For, Show, Suspense } from "solid-js";
import { CollectionCard, CollectionCardSkeleton } from "~/components/collections";
import { protect } from "~/hoc/session";
import { getRecentUserCollections } from "~/lib/api/collections";
import { RECENT_COLLECTIONS_COUNT } from "~/lib/api/collections/constants";
import { useTranslator } from "~/lib/i18n";

export default protect(() => {
  const t = useTranslator();
  const collections = createAsyncStore(() => getRecentUserCollections());

  return (
    <div class="flex h-full w-full grow flex-col">
      <NavigationBar>
        <NavigationBar.Leading>
          <Button as={A} href="/library/collections/new" style="ghost" leadingIcon="f7:folder-badge-plus" />
        </NavigationBar.Leading>
        <NavigationBar.Center>
          <p class="font-semibold">{t("routes.library.title")}</p>
        </NavigationBar.Center>
        <NavigationBar.Trailing />
      </NavigationBar>
      <Container size="wide" class="flex flex-col gap-10 py-6">
        <Heading>{t("routes.library.title")}</Heading>
        <Suspense
          fallback={
            <Repeat times={RECENT_COLLECTIONS_COUNT}>
              <CollectionCardSkeleton />
            </Repeat>
          }
        >
          <Show when={collections()}>
            {(collections) => (
              <section>
                <A
                  href="/library/collections"
                  class="flex items-center gap-1 transition-opacity hover:opacity-75 active:opacity-50 active:duration-0"
                >
                  <Heading size="subheading" class="leading-none">
                    {t("collections")}
                  </Heading>
                  <Icon icon="f7:chevron-right" class="text-fg-muted size-6 stroke-current stroke-2" />
                </A>
                <div class="flex gap-4 overflow-x-auto px-0.5 py-6">
                  <For each={collections()}>{(collection) => <CollectionCard collection={collection} />}</For>
                </div>
              </section>
            )}
          </Show>
        </Suspense>
      </Container>
    </div>
  );
});
