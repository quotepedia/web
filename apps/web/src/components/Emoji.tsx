import { Image } from "@kobalte/core/image";
import { Fade } from "@quotepedia/solid";
import type { Emoji } from "emojibase";
import { mergeProps, splitProps, type ComponentProps } from "solid-js";
import type { EmojiStyle } from "~/lib/emoji";
import { useSettings } from "~/lib/settings";

export type EmojiImgProps = Omit<ComponentProps<"img">, "src"> & {
  emoji: Emoji | "😀";
  style?: EmojiStyle;
};

export default function EmojiImg(props: EmojiImgProps) {
  const settings = useSettings();
  const defaultedProps = mergeProps({ style: settings.store.emojiStyle || "apple" }, props);
  const [localProps, otherProps] = splitProps(defaultedProps, ["class"]);

  return (
    <Image class={localProps.class} fallbackDelay={300}>
      <Fade>
        <Image.Img
          src={`https://emojicdn.elk.sh/${typeof props.emoji !== "string" ? props.emoji.emoji : props.emoji}?style=${defaultedProps.style}`}
          alt={typeof props.emoji !== "string" ? props.emoji.emoji : ""}
          title={typeof props.emoji !== "string" ? props.emoji.label : ""}
          draggable="false"
          {...otherProps}
        />
        <Image.Fallback
          class="border-bg-secondary bg-bg-default inline-block size-full rounded-full border"
          title={typeof props.emoji !== "string" ? props.emoji.label : ""}
        />
      </Fade>
    </Image>
  );
}
