import { ReactiveMap } from "@solid-primitives/map";
import type { Emoji } from "emojibase";
import { createEffect, createSignal, on, type Accessor } from "solid-js";
import type { EmojiWithIndex } from "./types";
import { useVirtualizedEmojiList } from "./useVirtualizedEmojiList";
import { useVirtualizedEmojiSearchList } from "./useVirtualizedEmojiSearchList";

export const createEmojisList = (props: {
  rows: number;
  searchValue: Accessor<string | undefined>;
  emojis: Emoji[];
}) => {
  const [virtualizedEmojis, setVirtualizedEmojis] = createSignal<(EmojiWithIndex | number)[][]>([]);
  const categories = new ReactiveMap<number, number>();

  const emojisWithIndex: EmojiWithIndex[] = props.emojis?.map((emoji, index) => ({ ...emoji, index }));

  const generateList = useVirtualizedEmojiList({
    categories: categories,
    rows: props.rows,
    onChange: (emojis) => {
      setVirtualizedEmojis([...virtualizedEmojis(), ...emojis]);
    },
  });

  const generateSearchList = useVirtualizedEmojiSearchList({
    rows: props.rows,
    onChange: (emojis) => {
      setVirtualizedEmojis(emojis);
    },
  });

  createEffect(
    on([() => props.rows, () => props.searchValue()], () => {
      if (props.searchValue()) {
        return generateSearchList(emojisWithIndex || [], props.searchValue()!);
      }

      setVirtualizedEmojis([]);

      emojisWithIndex?.length && generateList(emojisWithIndex!);
    }),
  );

  return [virtualizedEmojis, categories] as const;
};
