import type { SelectContentProps, SelectItemProps } from "@kobalte/core/select";
import type { ParentProps, ValidComponent } from "solid-js";

export type DropdownMenuContentProps<T extends ValidComponent = "div"> = SelectContentProps<T> &
  ParentProps & {
    class?: string | undefined;
  };

export type DropdownMenuItemProps<T extends ValidComponent = "div"> = SelectItemProps<T> & {
  class?: string | undefined;
};
