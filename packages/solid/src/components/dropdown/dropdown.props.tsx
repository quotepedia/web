import type { JSX, ParentProps, ValidComponent } from "solid-js";

import type { DropdownMenuContentProps, DropdownMenuItemProps } from "@kobalte/core/dropdown-menu";

export type DropdownContentProps<T extends ValidComponent = "div"> = ParentProps<
  DropdownMenuContentProps<T> & JSX.StylableSVGAttributes
>;

export type DropdownItemProps<T extends ValidComponent = "div"> = DropdownMenuItemProps<T> &
  JSX.StylableSVGAttributes;
