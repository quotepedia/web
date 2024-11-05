import { ParentProps, type ValidComponent } from "solid-js";

import * as SelectPrimitive from "@kobalte/core/select";

export type DropdownMenuContentProps<T extends ValidComponent = "div"> = SelectPrimitive.SelectContentProps<T> &
  ParentProps & {
    class?: string | undefined;
  };

export type DropdownMenuItemProps<T extends ValidComponent = "div"> = SelectPrimitive.SelectItemProps<T> & {
  class?: string | undefined;
};
