import { Repeat } from "@solid-primitives/range";
import { For, Show, Suspense, type Component } from "solid-js";
import { CollectionCardSkeleton } from "./CollectionCardSkeleton";
import { CollectionCard } from "./CollectionCard";
import { RECENT_COLLECTIONS_COUNT } from "~/lib/api/collections/constants";
import type { components } from "~/lib/api";
import type { AccessorWithLatest } from "@solidjs/router";

export type CollectionsRecentListProps = {
  collections: AccessorWithLatest<components["schemas"]["CollectionResponse"][] | undefined>;
};

export const CollectionsRecentList: Component<CollectionsRecentListProps> = (props) => {
  return (
    <div class="flex gap-4 overflow-x-auto px-0.5 py-6">
      <Suspense
        fallback={
          <Repeat times={RECENT_COLLECTIONS_COUNT}>
            <CollectionCardSkeleton />
          </Repeat>
        }
      >
        <Show when={props.collections()}>
          {(collections) => (
            <For each={collections()}>{(collection) => <CollectionCard collection={collection} />}</For>
          )}
        </Show>
      </Suspense>
    </div>
  );
};
