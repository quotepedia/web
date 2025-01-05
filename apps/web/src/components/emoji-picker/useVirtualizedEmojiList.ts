import type { ReactiveMap } from "@solid-primitives/map";
import type { EmojiWithIndex } from "./types";

export const useVirtualizedEmojiList = (props: {
  rows: number;
  categories: ReactiveMap<number, number>;
  onChange: (emojis: (EmojiWithIndex | number)[][]) => void;
}) => {
  const createVirtualizedEmojiList = (emojis: EmojiWithIndex[]) => {
    let categoryIndex = -1;
    let rowIndex = 0;

    let tempVirtualizedEmojis: (EmojiWithIndex | number)[][] = [];
    let tempCategories: number[] = [];

    for (let index = 0; index < emojis.length; index++) {
      const emoji = emojis[index];

      if (emoji === undefined || emoji.group === undefined) {
        continue;
      }

      let tempCategoryIndex = tempCategories.indexOf(emoji.group);

      if (tempCategoryIndex < 0) {
        tempCategories.push(emoji.group);
        tempCategoryIndex = tempCategories.length - 1;
      }

      if (!tempVirtualizedEmojis[rowIndex]) {
        tempVirtualizedEmojis[rowIndex] = [];
      }

      if (categoryIndex !== tempCategoryIndex) {
        categoryIndex = tempCategoryIndex;
        if (index !== 0) {
          if (tempVirtualizedEmojis[rowIndex]?.length) {
            rowIndex++;
          }
          tempVirtualizedEmojis[rowIndex] = [];
        }

        tempVirtualizedEmojis[rowIndex]!.push(emoji.group);
        props.categories.set(emoji.group, rowIndex);

        rowIndex++;

        tempVirtualizedEmojis[rowIndex] = [];
      }

      tempVirtualizedEmojis[rowIndex]!.push(emoji);
      if (tempVirtualizedEmojis[rowIndex]?.length! >= props.rows) {
        rowIndex++;
      }
    }

    props.onChange(tempVirtualizedEmojis);
  };

  return createVirtualizedEmojiList;
};
