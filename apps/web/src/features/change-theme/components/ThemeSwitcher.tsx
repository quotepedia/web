import { RadioGroup } from "@kobalte/core/radio-group";
import { Icon } from "@quotepedia/solid";
import { For, JSX } from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import { useScopedTranslator } from "~/shared/i18n";
import { THEMES, Theme, useTheme } from "~/shared/theme";
import { ThemeSwitcherItemPreview } from "./ThemeSwitcherItemPreview";

export type ThemeSwitcherProps = JSX.StylableSVGAttributes;

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const context = useTheme();
  const t = useScopedTranslator("routes.settings.sections.appearance.cards.theme.options");

  return (
    <RadioGroup value={context.theme()} onChange={(value) => context.setTheme(value as Theme)} class={props.class}>
      <div role="presentation" class="flex gap-3 overflow-x-auto py-1">
        <For each={THEMES}>
          {(theme) => (
            <RadioGroup.Item value={theme}>
              <RadioGroup.ItemInput class="peer" />
              <RadioGroup.ItemLabel class="group cursor-pointer space-y-1 peer-checked:cursor-default">
                <ThemeSwitcherItemPreview value={theme} />
                <div class="peer-checked:group-[]:text-fg-accent flex gap-0.5">
                  <TransitionGroup
                    moveClass="transition-[transform,opacity]"
                    enterClass="scale-0 opacity-0 -translate-x-full"
                    enterActiveClass="transition-[transform,opacity]"
                    exitToClass="scale-0 opacity-0 -translate-x-full"
                    exitActiveClass="absolute transition-[transform,opacity]"
                  >
                    <RadioGroup.ItemIndicator as={Icon} icon="heroicons:check-20-solid" class="size-3 stroke-current" />
                    <span class="select-none text-xs font-semibold leading-none">{t(theme)}</span>
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
