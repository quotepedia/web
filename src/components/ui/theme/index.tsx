import { RadioGroup } from "@kobalte/core/radio-group";
import { Repeat } from "@solid-primitives/range";
import { Icon } from "solid-heroicons";
import { check } from "solid-heroicons/solid-mini";
import { For, JSX } from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import { useI18n } from "~/lib/i18n";
import { SUPPORTED_THEMES, Theme, useTheme } from "~/lib/theme";
import { cn } from "~/lib/utils/css";

export type ThemeSwitcherItemPreviewProps = {
  value: Theme;
};

export const ThemeSwitcherItemPreview = (props: ThemeSwitcherItemPreviewProps) => {
  return (
    <div
      class={cn(
        "relative overflow-clip rounded-lg transition-[transform]",
        "group-active:scale-95 group-active:duration-0",
        "after:absolute after:inset-0 after:rounded-[inherit] after:transition-[color,box-shadow]",
        "after:ring-1 after:ring-inset after:ring-bg-secondary",
        "group-hover:after:ring-bg-tertiary",
        "peer-checked:group-[]:after:ring-2 peer-checked:group-[]:after:ring-ring-accent",
      )}
    >
      <div class="h-16 flex w-24 bg-bg-body" data-theme={props.value}>
        <div class="flex w-2/5 flex-col gap-1.5 bg-bg-default p-2">
          <Repeat times={3}>
            <div class="flex gap-0.5">
              <div class="size-1 rounded-sm bg-bg-tertiary" />
              <div class="h-1 grow rounded-sm bg-bg-tertiary" />
            </div>
          </Repeat>
          <div class="mt-auto flex gap-0.5">
            <div class="size-1 rounded-sm bg-bg-tertiary" />
            <div class="h-1 grow rounded-sm bg-bg-tertiary" />
          </div>
        </div>
        <div class="grow space-y-0.5 p-2">
          <div class="mb-1.5 h-1 w-2/3 rounded-sm bg-bg-tertiary" />
          <Repeat times={3}>
            <div class="flex gap-0.5 rounded bg-bg-default p-1">
              <div class="h-1 grow rounded-sm bg-bg-tertiary" />
              <div class="size-1 rounded-sm bg-bg-tertiary" />
            </div>
          </Repeat>
        </div>
      </div>
    </div>
  );
};

export type ThemeSwitcherProps = JSX.StylableSVGAttributes;

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const i18n = useI18n();
  const t = i18n.t.routes.settings.sections.appearance.cards.theme;
  const context = useTheme();

  return (
    <RadioGroup value={context.theme()} onChange={(value) => context.setTheme(value as Theme)} class={props.class}>
      <div role="presentation" class="flex gap-3 overflow-x-auto py-1">
        <For each={SUPPORTED_THEMES}>
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
