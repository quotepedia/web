import { RadioGroup } from "@kobalte/core/radio-group";
import { Fade, Icon, SettingsCard } from "@quotepedia/solid";
import type { EmojiStyle } from "~/lib/emoji";
import EmojiImg from "../Emoji";

export const EmojiStyleRadioGroupItem = (props: { style: EmojiStyle }) => {
  return (
    <RadioGroup.Item value={props.style} class="transition">
      <RadioGroup.ItemInput />
      <RadioGroup.ItemControl as={SettingsCard} variant="hover">
        <EmojiImg emoji="😀" style={props.style} class="size-6" />
        <SettingsCard.HeaderGroup>
          <RadioGroup.ItemLabel as={SettingsCard.Header} class="capitalize">
            {props.style}
          </RadioGroup.ItemLabel>
        </SettingsCard.HeaderGroup>
        <Fade>
          <RadioGroup.ItemIndicator as={Icon} icon="f7:checkmark" class="text-fg-accent size-5" />
        </Fade>
      </RadioGroup.ItemControl>
    </RadioGroup.Item>
  );
};
