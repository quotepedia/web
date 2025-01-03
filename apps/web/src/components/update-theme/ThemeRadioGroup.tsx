import { RadioGroup } from "@kobalte/core/radio-group";
import { SettingsGroup } from "@quotepedia/solid";
import { For } from "solid-js";
import { CUSTOM_THEMES, useTheme, type Theme } from "~/lib/theme";
import { ThemeRadioGroupItem } from "./ThemeRadioGroupItem";

export const ThemeRadioGroup = () => {
  const context = useTheme();

  const onChange = (value: string) => {
    context.setTheme(value as Theme);
  };

  return (
    <RadioGroup value={context.theme()} onChange={onChange} orientation="vertical">
      <SettingsGroup class="mb-4">
        <ThemeRadioGroupItem value="system" />
      </SettingsGroup>
      <SettingsGroup>
        <For each={CUSTOM_THEMES}>{(theme) => <ThemeRadioGroupItem value={theme} />}</For>
      </SettingsGroup>
    </RadioGroup>
  );
};
