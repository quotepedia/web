import { usePrefersDark } from "@solid-primitives/media";
import { createEffect, createSignal } from "solid-js";
import type { Theme } from "~/lib/theme";

export type ThemeRadioGroupItemPreviewProps = {
  value: Theme;
};

export const ThemeRadioGroupItemPreview = (props: ThemeRadioGroupItemPreviewProps) => {
  const [theme, setTheme] = createSignal<Theme>(props.value);

  createEffect(() => {
    if (props.value === "system") {
      const prefersDark = usePrefersDark();

      setTheme(prefersDark() ? "dark" : "light");
    }
  });

  return (
    <div class="ring-bg-tertiary size-6 overflow-clip rounded-full ring-1 transition-shadow">
      <div class="bg-bg-body size-full transition-colors" data-theme={theme()} />
    </div>
  );
};
