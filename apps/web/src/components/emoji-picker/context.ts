import type { ReactiveMap } from "@solid-primitives/map";
import type { Emoji } from "emojibase";
import { createContext, useContext, type Accessor, type Setter } from "solid-js";
import type { VirtualizerHandle } from "virtua/solid";
import type { EmojiWithIndex } from "./types";

export type EmojiPickerContextValue = {
  emoji: Accessor<Emoji | undefined>;
  setEmoji: Setter<Emoji | undefined>;
  category: Accessor<number | undefined>;
  setCategory: Setter<number | undefined>;
  searchValue: Accessor<string>;
  setSearchValue: Setter<string>;
  virtualizerHandle: Accessor<VirtualizerHandle | undefined>;
  setVirtualizerHandle: Setter<VirtualizerHandle | undefined>;
  scrollToEmoji: (emoji: Emoji) => void;
  currentCategory: (scrollTop: number) => number | undefined;
  getGroupName: (group: number) => string | undefined;
  emojis: (EmojiWithIndex | number)[][];
  categories: ReactiveMap<number, number>;
  overscan: number;
  rows: number;
};

export const EmojiPickerContext = createContext<EmojiPickerContextValue>();

export function useEmojiPickerContext() {
  const context = useContext(EmojiPickerContext);

  if (context === undefined) {
    throw new Error(`The 'useEmojiPickerContext' must be used within a <EmojiPicker> component.`);
  }

  return context;
}
