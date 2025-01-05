import { FormControl } from "@quotepedia/solid";
import { type JSX } from "solid-js";
import { useTranslator } from "~/lib/i18n";
import { useEmojiPickerContext } from "./context";
import { useVirtualizedEmojisKeyDownEvent } from "./useVirtualizedEmojisKeyDownEvent";

export const SearchBar = () => {
  const t = useTranslator();
  const context = useEmojiPickerContext();

  const onInput: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, InputEvent> = (event) => {
    context.setSearchValue(event.currentTarget.value);
    context.setCategory(0);
    context.virtualizerHandle()?.scrollToIndex(0);
  };

  const onKeyDown = useVirtualizedEmojisKeyDownEvent({
    value: context.emoji,
    virtualizedEmojis: () => context.emojis,
    onChange: (emoji) => {
      context.setEmoji(emoji);
      context.scrollToEmoji(emoji);
    },
  });

  return (
    <FormControl
      name="search"
      type="search"
      value={context.searchValue()}
      onInput={onInput}
      onKeyDown={onKeyDown}
      placeholder={t("search")}
      class="m-1.5"
    />
  );
};
