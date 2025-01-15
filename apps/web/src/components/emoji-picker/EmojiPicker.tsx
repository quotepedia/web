import { Button, Popover, Stack } from "@quotepedia/solid";
import { createAsync } from "@solidjs/router";
import { fetchEmojis, fetchMessages, type Emoji } from "emojibase";
import { Show, Suspense, createSignal, type ComponentProps } from "solid-js";
import { isServer } from "solid-js/web";
import { Transition } from "solid-transition-group";
import { useI18n } from "~/lib/i18n";
import EmojiImg from "../Emoji";
import EmojiPickerBase from "./Root";

export const Replace = (props: ComponentProps<"div">) => {
  return (
    <div
      style={{
        position: "relative",
      }}
      {...props}
    >
      <Transition
        exitActiveClass="transition duration-300 ease-in-out absolute"
        enterActiveClass="transition duration-500 ease-spring absolute"
        exitToClass="scale-50 opacity-0"
        enterClass="scale-0 opacity-0"
      >
        {props.children}
      </Transition>
    </div>
  );
};

export type EmojiPickerProps = {
  onChange?: (emoji: Emoji | undefined) => void;
};

export function EmojiPicker(props: EmojiPickerProps) {
  const i18n = useI18n();

  const emojis = createAsync(async () => {
    if (!isServer) {
      return await fetchEmojis(i18n.locale());
    }
  });

  const messages = createAsync(async () => {
    if (!isServer) {
      return await fetchMessages(i18n.locale());
    }
  });

  const [emoji, setEmoji] = createSignal<Emoji>();

  return (
    <Stack.Vertical>
      <Replace class="border-bg-secondary bg-bg-default flex size-28 items-center justify-center rounded-full border">
        <Show when={emoji()} keyed>
          {(emoji) => <EmojiImg emoji={emoji.emoji} title={emoji.label} class="size-16" />}
        </Show>
      </Replace>
      <Popover>
        <Popover.Trigger as={Button} style="ghost">
          Set emoji
        </Popover.Trigger>
        <Popover.Content>
          <Suspense>
            <Show when={emojis() && messages()}>
              <EmojiPickerBase
                value={emoji()}
                onChange={(emoji) => {
                  setEmoji(emoji);
                  props.onChange?.(emoji);
                }}
                emojis={emojis()!}
                messages={messages()!}
              />
            </Show>
          </Suspense>
        </Popover.Content>
      </Popover>
    </Stack.Vertical>
  );
}
