import { cn } from "@quotepedia/solid";
import { usePrefersDark } from "@solid-primitives/media";
import { Repeat } from "@solid-primitives/range";
import { createEffect, createSignal } from "solid-js";
import { Theme } from "~/shared/theme";

export type ThemeSwitcherItemPreviewProps = {
  value: Theme;
};

export const ThemeSwitcherItemPreview = (props: ThemeSwitcherItemPreviewProps) => {
  const [theme, setTheme] = createSignal<Theme>(props.value);

  createEffect(() => {
    if (props.value === "system") {
      const prefersDark = usePrefersDark();

      setTheme(prefersDark() ? "dark" : "light");
    }
  });

  return (
    <div
      class={cn(
        "relative overflow-clip rounded-lg transition-[transform]",
        "group-active:scale-95 group-active:duration-0",
        "after:absolute after:inset-0 after:rounded-[inherit] after:transition-[color,box-shadow]",
        "after:ring-bg-secondary after:ring-1 after:ring-inset",
        "group-hover:after:ring-bg-tertiary",
        "peer-checked:group-[]:after:ring-ring-accent peer-checked:group-[]:after:ring-2",
      )}
    >
      <div class="h-18 bg-bg-body flex w-28 transition-colors" data-theme={theme()}>
        <div class="border-r-bg-secondary bg-bg-default flex w-2/5 flex-col gap-1.5 border-r p-2 transition-colors">
          <Repeat times={3}>
            <div class="flex gap-0.5">
              <div class="bg-bg-tertiary size-1 rounded-sm transition-colors" />
              <div class="bg-bg-tertiary h-1 grow rounded-sm transition-colors" />
            </div>
          </Repeat>
          <div class="mt-auto flex gap-0.5">
            <div class="bg-bg-tertiary size-1 rounded-sm transition-colors" />
            <div class="bg-bg-tertiary h-1 grow rounded-sm transition-colors" />
          </div>
        </div>
        <div class="grow space-y-0.5 p-2">
          <div class="bg-bg-tertiary mb-1.5 h-1 w-2/3 rounded-sm transition-colors" />
          <Repeat times={3}>
            <div class="bg-bg-default flex gap-0.5 rounded p-1 transition-colors">
              <div class="bg-bg-tertiary h-1 grow rounded-sm transition-colors" />
              <div class="bg-bg-tertiary size-1 rounded-sm transition-colors" />
            </div>
          </Repeat>
        </div>
      </div>
    </div>
  );
};
