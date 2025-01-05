import type { Emoji, MessagesDataset } from "emojibase";
import { Component, createEffect, createSignal, mergeProps, Show } from "solid-js";
import type { VirtualizerHandle } from "virtua/solid";
import { CategoriesRadioGroup } from "./CategoriesRadioGroup";
import { GAP, SIZE } from "./constants";
import { EmojiPickerContext } from "./context";
import { EmojisRadioGroup } from "./EmojisRadioGroup";
import { SearchBar } from "./SearchBar";
import { type EmojiWithIndex } from "./types";
import { createEmojisList } from "./useEmojisList";

export type EmojiPickerProps = {
  value?: Emoji;
  onChange?: (emoji: Emoji | undefined) => void;
  rows?: number;
  overscan?: number;
  emojis: Emoji[];
  messages: MessagesDataset;
};

const DEFAULT_PROPS = {
  rows: 8,
  overscan: 3,
} satisfies Partial<EmojiPickerProps>;

export const EmojiPickerRoot: Component<EmojiPickerProps> = (props) => {
  const defaultedProps = mergeProps(DEFAULT_PROPS, props);

  const [emoji, setEmoji] = createSignal<Emoji | undefined>(props.value);
  const [category, setCategory] = createSignal<number | undefined>();
  const [searchValue, setSearchValue] = createSignal<string>("");
  const [virtualizerHandle, setVirtualizerHandle] = createSignal<VirtualizerHandle | undefined>();

  const [emojis, categories] = createEmojisList({
    rows: defaultedProps.rows,
    emojis: props.emojis,
    searchValue: searchValue,
  });

  const currentCategory = (offset: number): number | undefined => {
    return Array.from(categories.entries())
      .reverse()
      .find(([_group, index]) => offset >= (virtualizerHandle()?.getItemOffset(index) || 0))?.[0];
  };

  const getGroupName = (group: number): string | undefined => {
    return props.messages.groups.find((message) => message.order === group)?.message;
  };

  const onEmojiChange = (emoji: EmojiWithIndex) => {
    setEmoji(emoji);
  };

  const findEmojiRowIndex = (emoji: Emoji) => {
    for (let rowIndex = 0; rowIndex < emojis().length; rowIndex++) {
      const row = emojis()[rowIndex];
      const emojiIndex = row?.findIndex((e) => typeof e !== "number" && e === emoji);
      if (emojiIndex !== -1) {
        return rowIndex;
      }
    }
    return -1;
  };

  const scrollToEmoji = (emoji: Emoji) => {
    const index = findEmojiRowIndex(emoji);

    virtualizerHandle()?.scrollToIndex(index, { align: "center" });
  };

  createEffect(() => {
    props.onChange?.(emoji());
  });

  return (
    <EmojiPickerContext.Provider
      value={{
        emoji,
        setEmoji,
        category,
        setCategory,
        searchValue,
        setSearchValue,
        virtualizerHandle,
        setVirtualizerHandle,
        scrollToEmoji,
        getGroupName,
        currentCategory,
        get emojis() {
          return emojis();
        },
        categories,
        overscan: defaultedProps.overscan,
        rows: defaultedProps.rows,
      }}
    >
      <div
        class="flex flex-col"
        style={{
          height: `${SIZE * defaultedProps.rows}px`,
          width: `${(SIZE + GAP) * defaultedProps.rows + GAP}px`,
        }}
      >
        <SearchBar />
        <EmojisRadioGroup value={emoji()} onChange={onEmojiChange} />
        <Show when={!searchValue()}>
          <CategoriesRadioGroup value={category()} />
        </Show>
      </div>
    </EmojiPickerContext.Provider>
  );
};

export default EmojiPickerRoot;
