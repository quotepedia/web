import { makeEventListener } from "@solid-primitives/event-listener";
import { Repeat } from "@solid-primitives/range";
import { createEffect, createSignal } from "solid-js";
import { Theme } from "~/shared/theme";
import { cn } from "~/shared/utils/css";

export type ThemeSwitcherItemPreviewProps = {
  value: Theme;
};

export const ThemeSwitcherItemPreview = (props: ThemeSwitcherItemPreviewProps) => {
  const [theme, setTheme] = createSignal<Theme>(props.value);
  const updateTheme = (media: MediaQueryListEvent | MediaQueryList) => setTheme(media.matches ? "dark" : "light");

  createEffect(() => {
    if (props.value !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    updateTheme(media);
    makeEventListener(media, "change", updateTheme);
  });

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
      <div class="h-18 flex w-28 bg-bg-body transition-colors" data-theme={theme()}>
        <div class="flex w-2/5 flex-col gap-1.5 border-r border-r-bg-secondary bg-bg-default p-2 transition-colors">
          <Repeat times={3}>
            <div class="flex gap-0.5">
              <div class="size-1 rounded-sm bg-bg-tertiary transition-colors" />
              <div class="h-1 grow rounded-sm bg-bg-tertiary transition-colors" />
            </div>
          </Repeat>
          <div class="mt-auto flex gap-0.5">
            <div class="size-1 rounded-sm bg-bg-tertiary transition-colors" />
            <div class="h-1 grow rounded-sm bg-bg-tertiary transition-colors" />
          </div>
        </div>
        <div class="grow space-y-0.5 p-2">
          <div class="mb-1.5 h-1 w-2/3 rounded-sm bg-bg-tertiary transition-colors" />
          <Repeat times={3}>
            <div class="flex gap-0.5 rounded bg-bg-default p-1 transition-colors">
              <div class="h-1 grow rounded-sm bg-bg-tertiary transition-colors" />
              <div class="size-1 rounded-sm bg-bg-tertiary transition-colors" />
            </div>
          </Repeat>
        </div>
      </div>
    </div>
  );
};
