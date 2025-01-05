import type { Emoji } from "emojibase";
import { createEffect, createSignal, For, Match, Switch } from "solid-js";
import { VList, type VirtualizerHandle } from "virtua/solid";
import { useEmojiPickerContext } from "./context";
import { EmojisRadioGroupEmoji } from "./EmojisRadioGroupEmoji";
import { EmojisRadioGroupTitle } from "./EmojisRadioGroupTitle";
import type { EmojiWithIndex } from "./types";

export type EmojisRadioGroupProps = {
  value: Emoji | undefined;
  onChange?: (value: EmojiWithIndex) => void;
};

export const EmojisRadioGroup = (props: EmojisRadioGroupProps) => {
  const context = useEmojiPickerContext();
  const [virtualizerHandle, setVirtualizerHandle] = createSignal<VirtualizerHandle>();

  const onScroll = (offset: number): void => {
    context.setCategory(context.currentCategory(offset));
  };

  createEffect(() => {
    context.setVirtualizerHandle(virtualizerHandle);
  });

  return (
    <VList ref={setVirtualizerHandle} data={context.emojis} onScroll={onScroll} overscan={context.overscan}>
      {(items, index) => (
        <div role="row" aria-rowindex={index} class="flex w-full gap-1 rounded-b-xl px-1 pb-1">
          <For each={items}>
            {(item) => (
              <Switch>
                <Match when={typeof item === "number"}>
                  <EmojisRadioGroupTitle group={item as number} />
                </Match>
                <Match when={typeof item !== "number"}>
                  <EmojisRadioGroupEmoji
                    emoji={item as Emoji}
                    active={props.value === item}
                    onClick={() => props.onChange?.(item as Emoji & EmojiWithIndex)}
                  />
                </Match>
              </Switch>
            )}
          </For>
        </div>
      )}
    </VList>
  );
};
