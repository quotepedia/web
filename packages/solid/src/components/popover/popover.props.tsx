import type { JSX, ParentProps, ValidComponent } from "solid-js";

import type { PopoverContentProps as ContentProps } from "@kobalte/core/popover";

export type PopoverContentProps<T extends ValidComponent = "div"> = ParentProps<
  ContentProps<T> & JSX.StylableSVGAttributes
>;
