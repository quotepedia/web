import { matchSorter } from "match-sorter";
import type { EmojiWithIndex } from "./types";

export const useVirtualizedEmojiSearchList = (props: {
  rows: number;
  onChange?: (emojis: EmojiWithIndex[][]) => void;
}) => {
  const createVirtualizedEmojiSearchList = (emojis: EmojiWithIndex[], search: string) => {
    const searchedEmojis = matchSorter(emojis, search, {
      keys: ["tags.*", "text", "label"],
    });

    let rowIndex = 0;
    let tempVirtualizedEmojis: EmojiWithIndex[][] = [];

    for (let i = 0; i < searchedEmojis.length; i++) {
      const emoji = searchedEmojis[i];

      if (!tempVirtualizedEmojis[rowIndex]) {
        tempVirtualizedEmojis[rowIndex] = [];
      }

      tempVirtualizedEmojis[rowIndex]!.push(emoji!);
      if (tempVirtualizedEmojis[rowIndex]?.length! >= props.rows) {
        rowIndex++;
      }
    }
    props.onChange?.(tempVirtualizedEmojis);
  };

  return createVirtualizedEmojiSearchList;
};
