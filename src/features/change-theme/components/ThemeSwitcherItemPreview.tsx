import { Repeat } from "@solid-primitives/range";
import { Theme } from "~/shared/theme";
import { cn } from "~/shared/utils/css";

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
      <div class="flex h-18 w-28 bg-bg-body" data-theme={props.value}>
        <div class="flex w-2/5 flex-col gap-1.5 bg-bg-default p-2 border-r border-r-bg-secondary">
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
