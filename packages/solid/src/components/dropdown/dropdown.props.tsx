import type { JSX, ParentProps, ValidComponent } from "solid-js";

import type {
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
} from "@kobalte/core/dropdown-menu";

export type DropdownContentProps<T extends ValidComponent = "div"> = ParentProps<
  DropdownMenuContentProps<T> & JSX.StylableSVGAttributes
>;

export type DropdownItemProps<T extends ValidComponent = "div"> = DropdownMenuItemProps<T> & JSX.StylableSVGAttributes;

export type DropdownCheckboxItemProps<T extends ValidComponent = "div"> = DropdownMenuCheckboxItemProps<T> &
  JSX.StylableSVGAttributes;
