import { A } from "@solidjs/router";
import { splitProps, type ComponentProps } from "solid-js";
import { tv } from "tailwind-variants";
import type { Collection } from "~/lib/api/collections";
import { usePlurarized } from "~/lib/i18n";
import EmojiImg from "../Emoji";

export const styles = tv({
  slots: {
    root: [
      "group relative flex divide-x divide-bg-secondary rounded-xl !shadow-sm",
      "ring-1 ring-bg-secondary transition-all duration-300",
      "before:absolute before:inset-0 before:-z-10 before:-translate-y-1 before:scale-95 before:rounded-xl",
      "before:bg-bg-default before:ring-1 before:ring-bg-secondary before:transition-transform before:duration-300",
      "hover:divide-bg-tertiary hover:ring-bg-tertiary",
      "before:hover:-translate-y-1 hover:before:scale-95 hover:before:ring-bg-tertiary active:opacity-50",
    ],
    emoji: "ease-spring size-6 transition-transform duration-300 group-hover:scale-125",
    thumb: "bg-bg-default flex items-center rounded-s-xl p-3",
    hgroup: "bg-bg-body w-full grow space-y-1.5 rounded-e-xl p-4 ps-3",
    h3: "text-nowrap font-medium leading-none",
    p: "text-fg-muted text-nowrap text-sm leading-none",
  },
  variants: {
    active: {
      true: {
        root: [
          "divide-bg-tertiary opacity-75 outline outline-4",
          "outline-ring-accent ring-bg-tertiary before:scale-95 before:ring-bg-tertiary",
        ],
        emoji: "scale-125",
      },
    },
  },
});

export type CollectionCardOptions = {
  collection: Collection;
  active?: boolean;
  class?: string;
};

export type CollectionCardProps = CollectionCardOptions & Omit<ComponentProps<typeof A>, "href">;

export const CollectionCard = (props: CollectionCardProps) => {
  const [variantProps, localProps, otherProps] = splitProps(props, ["active"], ["collection", "class"]);
  return (
    <A
      href={`/library/collections/${props.collection.id}`}
      class={styles().root({ ...variantProps, class: localProps.class })}
      {...otherProps}
    >
      <span class={styles().thumb(variantProps)}>
        <EmojiImg emoji={localProps.collection.emote} class={styles().emoji(variantProps)} />
      </span>
      <hgroup class={styles().hgroup(variantProps)}>
        <h3 class={styles().h3(variantProps)}>{localProps.collection.name}</h3>
        <p class={styles().p(variantProps)}>{usePlurarized("quotes", localProps.collection.quotes_count)}</p>
      </hgroup>
    </A>
  );
};
