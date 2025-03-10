import { Lottie, Placeholder, Search } from "@quotepedia/solid";
import { Repeat } from "@solid-primitives/range";
import { useNavigate } from "@solidjs/router";
import { batch, createSelector, createSignal, Match, Show, Switch, type JSX } from "solid-js";
import { createList } from "solid-list";
import { WindowVirtualizer, type WindowVirtualizerHandle } from "virtua/solid";
import { CollectionCard, CollectionCardSkeleton } from "~/components/collections";
import { getCurrentUserCollections } from "~/lib/api/collections";
import { useTranslator } from "~/lib/i18n";
import { createInfinitePaginator } from "~/utils/pagination";
import { useSearchQuery } from "~/utils/router";

const SEARCH_WAIT = 300;
const SCROLL_TRIGGER_THRESHOLD = 1.0;
const SCROLL_TRIGGER_ROOT_MARGIN = "25%";
const COLLECTIONS_VIRTUALIZER_OVERSCAN = 5;
const COLLECTIONS_PER_PAGE = 20;

export const CollectionsInfinitePaginator = () => {
  const t = useTranslator();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useSearchQuery();

  const [virtualizer, setVirtualizer] = createSignal<WindowVirtualizerHandle>();

  const [collections, setTriggerRef, paginator] = createInfinitePaginator(
    (page) =>
      getCurrentUserCollections({
        q: searchQuery() || null,
        limit: COLLECTIONS_PER_PAGE,
        offset: COLLECTIONS_PER_PAGE * page,
      }),
    {
      threshold: SCROLL_TRIGGER_THRESHOLD,
      rootMargin: SCROLL_TRIGGER_ROOT_MARGIN,
    },
  );

  const { active, setActive, onKeyDown } = createList({
    loop: false,
    items: collections,
    onActiveChange: (collection) => {
      if (collection) {
        const index = collections().indexOf(collection);
        virtualizer()?.scrollToIndex(index, { align: "center" });
      }
    },
  });

  const isActive = createSelector(active);

  const onSearchBlur: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, FocusEvent> = () => {
    setActive(null);
  };

  const onSearchFocus: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, FocusEvent> = () => {
    setActive(null);
  };

  const onSearchChange = (value: string) => {
    batch(() => {
      setActive(null);
      setSearchQuery(value);
      paginator.reset();
    });
  };

  const onSearchKeyDown: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, KeyboardEvent> = (event) => {
    const collection = active();

    if (event.key === "Enter" && collection !== null) {
      return navigate(`/library/collections/${collection.id}`);
    }

    onKeyDown(event);
  };

  return (
    <>
      <Search
        value={searchQuery()}
        onBlur={onSearchBlur}
        onFocus={onSearchFocus}
        onChange={onSearchChange}
        onKeyDown={onSearchKeyDown}
        placeholder={t("search")}
        wait={SEARCH_WAIT}
        autofocus
      />

      <Switch>
        <Match when={collections().length > 0}>
          <WindowVirtualizer ref={setVirtualizer} data={collections()} overscan={COLLECTIONS_VIRTUALIZER_OVERSCAN}>
            {(collection) => <CollectionCard class="mt-4" collection={collection} active={isActive(collection)} />}
          </WindowVirtualizer>

          <Show when={!paginator.end()}>
            <div ref={setTriggerRef} />
          </Show>
        </Match>

        <Match when={paginator.loading() === true && collections().length <= 0}>
          <Repeat times={COLLECTIONS_PER_PAGE}>
            <CollectionCardSkeleton class="mt-4" />
          </Repeat>
        </Match>

        <Match when={paginator.loading() === false && collections().length <= 0 && searchQuery() !== ""}>
          <Placeholder
            icon={<Lottie path="/tgs/search.json" class="size-24" />}
            heading={t("noResults")}
            description={t("noResultsFor", { value: searchQuery() })}
          />
        </Match>

        <Match when={paginator.loading() === false && collections().length <= 0 && searchQuery() === ""}>
          <Placeholder
            icon={<Lottie path="/tgs/spiderweb.json" class="size-24" />}
            heading={t("empty")}
            description={t("noCollections")}
          />
        </Match>
      </Switch>
    </>
  );
};
