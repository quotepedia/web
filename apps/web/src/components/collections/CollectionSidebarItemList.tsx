import { For } from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import type { components } from "~/lib/api";
import { CollectionSidebarItem } from "./CollectionSidebarItem";

export const CollectionSidebarItemList = (props: { collections: components["schemas"]["CollectionResponse"][] }) => {
  return (
    <div class="relative flex grow flex-col space-y-1 overflow-y-scroll">
      <TransitionGroup
        moveClass="!transition-all !duration-500"
        enterActiveClass="!transition-all !duration-500"
        exitActiveClass="!transition-all !duration-500 !absolute"
        enterClass="!opacity-0"
        exitToClass="!opacity-0"
      >
        <For each={props.collections}>{(collection) => <CollectionSidebarItem collection={collection} />}</For>
      </TransitionGroup>
    </div>
  );
};
