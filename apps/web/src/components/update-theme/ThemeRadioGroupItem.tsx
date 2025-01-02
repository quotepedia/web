import { RadioGroup } from "@kobalte/core/radio-group";
import { Fade, Icon, SettingsCard } from "@quotepedia/solid";
import { useScopedTranslator } from "~/lib/i18n";
import type { Theme } from "~/lib/theme";
import { ThemeRadioGroupItemPreview } from "./ThemeRadioGroupItemPreview";

export type ThemeRadioGroupItemProps = {
  value: Theme;
};

export const ThemeRadioGroupItem = (props: ThemeRadioGroupItemProps) => {
  const t = useScopedTranslator("settings.theme.options");

  return (
    <RadioGroup.Item value={props.value} class="transition">
      <RadioGroup.ItemInput />
      <RadioGroup.ItemControl as={SettingsCard} variant="hover">
        <ThemeRadioGroupItemPreview value={props.value} />
        <SettingsCard.HeaderGroup>
          <RadioGroup.ItemLabel as={SettingsCard.Header}>{t(props.value)}</RadioGroup.ItemLabel>
        </SettingsCard.HeaderGroup>
        <Fade>
          <RadioGroup.ItemIndicator as={Icon} icon="f7:checkmark" class="text-fg-accent size-5" />
        </Fade>
      </RadioGroup.ItemControl>
    </RadioGroup.Item>
  );
};
