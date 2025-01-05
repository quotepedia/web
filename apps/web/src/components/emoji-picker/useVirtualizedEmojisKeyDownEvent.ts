import type { Emoji } from "emojibase";
import type { Accessor, JSX } from "solid-js";
import type { EmojiWithIndex } from "./types";

export const useVirtualizedEmojisKeyDownEvent = (props: {
  virtualizedEmojis: Accessor<(EmojiWithIndex | number)[][]>;
  value: Accessor<Emoji | undefined>;
  onChange?: (emoji: Emoji) => void;
}) => {
  const onKeyDown: JSX.EventHandler<HTMLElement, KeyboardEvent> = (event) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const emojis = props.virtualizedEmojis();

    let currentRowIndex = 0;
    let currentColIndex = 0;

    for (let rowIndex = 0; rowIndex < emojis.length; rowIndex++) {
      const row = emojis[rowIndex];
      if (row === undefined) {
        continue;
      }

      const colIndex = row.findIndex((e) => typeof e !== "number" && e.emoji === props.value()?.emoji);
      if (colIndex !== -1) {
        currentRowIndex = rowIndex;
        currentColIndex = colIndex;
        break;
      }
    }

    let newRowIndex = currentRowIndex;
    let newColIndex = currentColIndex;

    switch (event.key) {
      case "ArrowLeft":
        newColIndex = currentColIndex - 1;
        if (newColIndex < 0) {
          newRowIndex = Math.max(0, currentRowIndex - 1);
          newColIndex = (emojis[newRowIndex]?.length || -1) - 1;
        }
        break;
      case "ArrowRight":
        newColIndex = currentColIndex + 1;
        if (newColIndex >= (emojis[currentRowIndex]?.length || -1)) {
          newRowIndex = Math.min(emojis.length - 1, currentRowIndex + 1);
          newColIndex = 0;
        }
        break;
      case "ArrowUp":
        newRowIndex = Math.max(0, currentRowIndex - 1);
        newColIndex = currentColIndex;
        break;
      case "ArrowDown":
        newRowIndex = Math.min(emojis.length - 1, currentRowIndex + 1);
        newColIndex = currentColIndex;
        break;
      default:
        return;
    }

    while (typeof emojis[newRowIndex]?.[newColIndex] === "number" || !emojis[newRowIndex]?.[newColIndex]) {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        newColIndex += event.key === "ArrowLeft" ? -1 : 1;
        if (newColIndex < 0 || newColIndex >= (emojis[newRowIndex]?.length || -1)) {
          break;
        }
      } else {
        newRowIndex += event.key === "ArrowUp" ? -1 : 1;
        if (newRowIndex < 0 || newRowIndex >= emojis.length) {
          break;
        }
        newColIndex = currentColIndex;
      }
    }

    const nextEmoji = emojis[newRowIndex]?.[newColIndex];
    if (nextEmoji && typeof nextEmoji !== "number" && nextEmoji !== props.value()) {
      props.onChange?.(nextEmoji);
    }
  };

  return onKeyDown;
};
