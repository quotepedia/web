import { splitProps, type ValidComponent } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as SelectPrimitive from "@kobalte/core/select";

import { cn } from "@src/utils/css";
import type { DropdownMenuContentProps, DropdownMenuItemProps } from "./select.props";
import { styles } from "./select.styles";

// TODO: Re-map more select primitives.
const SelectRoot = SelectPrimitive.Root;
const SelectTrigger = SelectPrimitive.Trigger;
const SelectArrow = SelectPrimitive.Arrow;
const SelectValue = SelectPrimitive.Value;
const SelectItemLabel = SelectPrimitive.ItemLabel;
const SelectItemIndicator = SelectPrimitive.ItemIndicator;
const SelectListbox = SelectPrimitive.Listbox;
const SelectIcon = SelectPrimitive.Icon;

const SelectContent = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DropdownMenuContentProps<T>>) => {
  const [, rest] = splitProps(props as DropdownMenuContentProps, ["class"]);
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content class={cn(styles().content(), props.class)} {...rest}>
        <SelectPrimitive.Arrow />
        {props.children}
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

const SelectItem = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DropdownMenuItemProps<T>>) => {
  const [, rest] = splitProps(props as DropdownMenuItemProps, ["class"]);
  return <SelectPrimitive.Item class={cn(styles().item(), props.class)} {...rest} />;
};

export const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Value: SelectValue,
  Arrow: SelectArrow,
  ItemLabel: SelectItemLabel,
  ItemIndicator: SelectItemIndicator,
  ListBox: SelectListbox,
  Icon: SelectIcon,
});
