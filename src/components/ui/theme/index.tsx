import { RadioGroup } from "@kobalte/core/radio-group";
import { Icon } from "solid-heroicons";
import { check } from "solid-heroicons/solid-mini";
import { For, JSX } from "solid-js";
import { useI18n } from "~/lib/i18n";
import { SUPPORTED_THEMES, Theme, useTheme } from "~/lib/theme";
import { cn } from "~/lib/utils/css";

export type ThemeCardProps = {
  name: string;
  key: Theme;
};

export const ThemeSwitcherOptionPreview = (props: { key: Theme }) => {
  return (
    <div
      data-theme={props.key}
      class={cn(
        "relative flex h-20 w-32 overflow-clip rounded-lg bg-bg-body shadow transition-[color,transform]",
        "group-active:scale-95 group-active:duration-0",
        "after:absolute after:inset-0 after:rounded-lg after:transition-[box-shadow,color]",
        "after:ring-1 after:ring-inset after:ring-bg-secondary",
        "hover:after:ring-bg-tertiary",
        "peer-checked:group-[]:after:ring-2 peer-checked:group-[]:after:ring-ring-accent",
      )}
    >
      <div data-tailwind-bundle class="hidden w-4 w-6 w-7 w-8"></div>
      <div class="flex w-14 flex-col gap-1 border-r border-bg-secondary bg-bg-default p-2">
        <For each={["7", "4", "6"]}>
          {(size) => (
            <div class="flex w-full items-center gap-1">
              <div class="aspect-square size-1.5 rounded-sm bg-bg-secondary" />
              <div class={`h-1 w-${size} rounded-sm bg-bg-secondary`} />
            </div>
          )}
        </For>
        <div class="mt-auto flex w-full items-center gap-1">
          <div class="aspect-square size-1.5 rounded-sm bg-bg-secondary" />
          <div class="h-1 w-7 rounded-sm bg-bg-secondary" />
        </div>
      </div>
      <div class="flex-grow space-y-0.5 p-2">
        <div class="mb-1.5 h-1.5 w-11 rounded-sm bg-bg-tertiary" />
        <For each={["7", "4", "8", "6"]}>
          {(size) => (
            <div class="flex h-3 w-full items-center justify-between gap-0.5 rounded bg-bg-default p-1">
              <div class={`h-1 w-${size} rounded-sm bg-bg-secondary`} />
              <div class="size-1.5 rounded-sm bg-bg-tertiary" />
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export const ThemeSwitcher = (props: JSX.StylableSVGAttributes) => {
  const i18n = useI18n();
  const colorScheme = useTheme();

  return (
    <RadioGroup
      value={colorScheme.theme()}
      onChange={(value) => colorScheme.setTheme(value as Theme)}
      class={props.class}
    >
      <RadioGroup.Label as={"h3"} class="sr-only">
        {i18n.t.routes.settings.sections.appearance.cards.theme.heading()}
      </RadioGroup.Label>
      <ul class="flex gap-3 overflow-x-auto py-1">
        <For each={SUPPORTED_THEMES}>
          {(theme) => (
            <RadioGroup.Item as={"li"} value={theme}>
              <RadioGroup.ItemInput class="peer" />
              <RadioGroup.ItemLabel class="group cursor-pointer space-y-1 peer-checked:cursor-default">
                <ThemeSwitcherOptionPreview key={theme} />
                <p class="flex items-center text-xs font-semibold leading-none peer-checked:group-[]:text-fg-accent">
                  <Icon
                    path={check}
                    stroke="currentColor"
                    stroke-width={1}
                    class={cn(
                      "me-0.5 size-3 select-none transition-[transform,opacity]",
                      "-translate-x-3 scale-0 opacity-0",
                      "group-data-[checked]:translate-x-0 group-data-[checked]:scale-100 group-data-[checked]:opacity-100",
                    )}
                  />
                  <span class="-translate-x-3 select-none transition-[transform,opacity] group-data-[checked]:translate-x-0">
                    {i18n.t.routes.settings.sections.appearance.cards.theme.options[theme]()}
                  </span>
                </p>
              </RadioGroup.ItemLabel>
            </RadioGroup.Item>
          )}
        </For>
      </ul>
    </RadioGroup>
  );
};
