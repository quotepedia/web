import { RadioGroup } from "@kobalte/core/radio-group";
import { Icon } from "solid-heroicons";
import { check } from "solid-heroicons/solid-mini";
import { For, JSX } from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import { useI18n } from "~/shared/i18n";
import { THEMES, Theme, useTheme } from "~/shared/theme";
import { ThemeSwitcherItemPreview } from "./ThemeSwitcherItemPreview";

export type ThemeSwitcherProps = JSX.StylableSVGAttributes;

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const i18n = useI18n();
  const t = i18n.t.routes.settings.sections.appearance.cards.theme;
  const context = useTheme();

  return (
    <RadioGroup value={context.theme()} onChange={(value) => context.setTheme(value as Theme)} class={props.class}>
      <div role="presentation" class="flex gap-3 overflow-x-auto py-1">
        <For each={THEMES}>
          {(theme) => (
            <RadioGroup.Item value={theme}>
              <RadioGroup.ItemInput class="peer" />
              <RadioGroup.ItemLabel class="group cursor-pointer space-y-1 peer-checked:cursor-default">
                <ThemeSwitcherItemPreview value={theme} />
                <div class="flex gap-0.5 peer-checked:group-[]:text-fg-accent">
                  <TransitionGroup
                    moveClass="transition-[transform,opacity]"
                    enterClass="scale-0 opacity-0 -translate-x-full"
                    enterActiveClass="transition-[transform,opacity]"
                    exitToClass="scale-0 opacity-0 -translate-x-full"
                    exitActiveClass="absolute transition-[transform,opacity]"
                  >
                    <RadioGroup.ItemIndicator as={Icon} path={check} class="size-3 stroke-current" />
                    <span class="select-none text-xs font-semibold leading-none">{t.options[theme]()}</span>
                  </TransitionGroup>
                </div>
              </RadioGroup.ItemLabel>
            </RadioGroup.Item>
          )}
        </For>
      </div>
    </RadioGroup>
  );
};