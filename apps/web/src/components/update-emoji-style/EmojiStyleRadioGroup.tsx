import { RadioGroup } from "@kobalte/core/radio-group";
import { SettingsGroup } from "@quotepedia/solid";
import { For } from "solid-js";
import { useSettings } from "~/lib/settings";
import { EmojiStyleRadioGroupItem } from "./EmojiStyleRadioGroupItem";
import { EMOJI_STYLES, type EmojiStyle } from "~/lib/emoji";

export const EmojiStyleRadioGroup = () => {
  const settings = useSettings();

  const onChange = (value: string) => {
    settings.set("emojiStyle", value as EmojiStyle);
  };

  return (
    <RadioGroup value={settings.store.emojiStyle} onChange={onChange} orientation="vertical">
      <SettingsGroup>
        <For each={EMOJI_STYLES}>
          {(style) => <EmojiStyleRadioGroupItem style={style} />}
        </For>
      </SettingsGroup>
    </RadioGroup>
  );
};
