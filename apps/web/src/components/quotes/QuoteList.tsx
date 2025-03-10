import { createEffect, createSignal, on, Show, Suspense, type Component } from "solid-js";
import { isServer } from "solid-js/web";
import { createMasonryBreakpoints, Mason } from "solid-mason";
import type { components, operations } from "~/lib/api";
import { createInfinitePaginator } from "~/utils/pagination";
import { QuoteCard } from "./QuoteCard";

export type QuoteListProps = {
  fetcher: (
    query: operations["GetQuotes"]["parameters"]["query"],
  ) => Promise<components["schemas"]["QuoteResponse"][] | undefined>;
  collection_id?: number;
};

const SCROLL_TRIGGER_THRESHOLD = 1.0;
const SCROLL_TRIGGER_ROOT_MARGIN = "25%";
const QUOTES_PER_PAGE = 25;

export const QuoteList: Component<QuoteListProps> = (props) => {
  const [prevCollectionId, setPrevCollectionId] = createSignal<number>();

  const breakpoints = createMasonryBreakpoints(
    () => [
      { query: "(min-width: 1024px) and (max-width: 1280px)", columns: 3 },
      { query: "(min-width: 768px) and (max-width: 1024px)", columns: 2 },
      { query: "(max-width: 768px)", columns: 1 },
    ],
    3,
  );

  const [quotes, setTriggerRef, paginator] = createInfinitePaginator(
    (page) =>
      props.fetcher({
        limit: QUOTES_PER_PAGE,
        offset: QUOTES_PER_PAGE * page,
      }),
    {
      threshold: SCROLL_TRIGGER_THRESHOLD,
      rootMargin: SCROLL_TRIGGER_ROOT_MARGIN,
    },
  );

  createEffect(
    on(
      () => props.collection_id,
      () => {
        if (prevCollectionId() !== undefined) {
          paginator.reset();
        }
        setPrevCollectionId(props.collection_id);
      },
    ),
  );

  return (
    <Suspense>
      <Show when={quotes()}>
        {(quotes) => (
          <div class="-m-1 space-y-4 pt-4 transition" classList={{ "opacity-0": isServer }}>
            <Mason items={quotes()} columns={breakpoints()}>
              {(quote) => (
                <QuoteCard
                  quote={quote}
                  class="m-1"
                  onDelete={() => paginator.setPages((prev) => prev.filter((q) => q.id !== quote.id))}
                  onUpdateCollections={(ids) => {
                    if (props.collection_id && !ids.includes(props.collection_id)) {
                      paginator.setPages((prev) => prev.filter((q) => q.id !== quote.id));
                    } else if (
                      props.collection_id &&
                      !quotes().find((q) => q.id === quote.id) &&
                      ids.includes(props.collection_id)
                    ) {
                      paginator.setPages((prev) => [...prev, quote]);
                    }
                  }}
                />
              )}
            </Mason>

            <Show when={!paginator.end()}>
              <div ref={setTriggerRef} />
            </Show>
          </div>
        )}
      </Show>
    </Suspense>
  );
};
