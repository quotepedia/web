import type { components } from "~/lib/api";
import { Sidebar } from "../aside/sidebar";
import EmojiImg from "../Emoji";

export const CollectionSidebarItem = (props: { collection: components["schemas"]["CollectionResponse"] }) => {
  return (
    <Sidebar.Item href={`/library/collections/${props.collection.id}`} class="group">
      <Sidebar.ItemIcon as={EmojiImg} emoji={props.collection.emote} />
      <Sidebar.ItemLabel>{props.collection.name}</Sidebar.ItemLabel>
      <span class="text-fg-muted ms-auto text-base leading-none">{props.collection.quotes_count}</span>
    </Sidebar.Item>
  );
};
