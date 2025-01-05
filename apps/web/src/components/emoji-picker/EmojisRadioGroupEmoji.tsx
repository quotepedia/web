import { cn } from "@quotepedia/solid";
import type { Emoji } from "emojibase";
import type { JSX } from "solid-js";
import EmojiImg from "../Emoji";

export type EmojisRadioGroupEmojiProps = {
  emoji: Emoji;
  active?: boolean;
  onClick?: JSX.EventHandler<HTMLButtonElement, MouseEvent>;
};

export const EmojisRadioGroupEmoji = (props: EmojisRadioGroupEmojiProps) => {
  return (
    <button
      type="button"
      class={cn(
        "hover:bg-bg-secondary/75 group flex aspect-square size-10 items-center justify-center rounded-lg hover:backdrop-blur-xl",
        props.active && "bg-bg-tertiary/75 backdrop-blur-xl",
      )}
      onClick={props.onClick}
    >
      <EmojiImg
        emoji={props.emoji.emoji}
        title={props.emoji.label}
        class="ease-spring size-8 transition-transform duration-500 group-active:scale-75 group-active:duration-75"
      />
    </button>
  );
};
