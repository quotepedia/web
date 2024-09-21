import type { JSX, ParentProps, ValidComponent } from "solid-js";

import type * as DropdownPrimitive from "@kobalte/core/dropdown-menu";

export type DropdownMenuContentProps<T extends ValidComponent = "div"> = ParentProps<
  DropdownPrimitive.DropdownMenuContentProps<T> & JSX.StylableSVGAttributes
>;

export type DropdownMenuItemProps<T extends ValidComponent = "div"> = DropdownPrimitive.DropdownMenuItemProps<T> &
  JSX.StylableSVGAttributes;
