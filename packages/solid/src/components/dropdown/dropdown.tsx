import { splitProps, type ValidComponent } from "solid-js";

import * as DropdownPrimitive from "@kobalte/core/dropdown-menu";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "@src/utils/css";
import type { DropdownCheckboxItemProps, DropdownContentProps, DropdownItemProps } from "./dropdown.props";
import { styles } from "./dropdown.styles";

// TODO: Re-map more dropdown primitives.
const DropdownRoot = DropdownPrimitive.Root;
const DropdownSub = DropdownPrimitive.Sub;
const DropdownSubTrigger = DropdownPrimitive.SubTrigger;
const DropdownTrigger = DropdownPrimitive.Trigger;
const DropdownArrow = DropdownPrimitive.Arrow;
const DropdownItemLabel = DropdownPrimitive.ItemLabel;
const DropdownItemIndicator = DropdownPrimitive.ItemIndicator;
const DropdownIcon = DropdownPrimitive.Icon;

const DropdownContent = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DropdownContentProps<T>>) => {
  const [, rest] = splitProps(props as DropdownContentProps, ["class"]);
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content class={cn(styles().content(), props.class)} {...rest}>
        <DropdownPrimitive.Arrow size={36} />
        {props.children}
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Portal>
  );
};

const DropdownSubContent = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DropdownContentProps<T>>) => {
  const [, rest] = splitProps(props as DropdownContentProps, ["class"]);
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.SubContent class={cn(styles().content(), props.class)} {...rest}>
        {props.children}
      </DropdownPrimitive.SubContent>
    </DropdownPrimitive.Portal>
  );
};

const DropdownItem = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DropdownItemProps<T>>) => {
  const [, rest] = splitProps(props as DropdownItemProps, ["class"]);
  return <DropdownPrimitive.Item class={cn(styles().item(), props.class)} {...rest} />;
};

const DropdownCheckboxItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownCheckboxItemProps<T>>,
) => {
  const [, rest] = splitProps(props as DropdownCheckboxItemProps, ["class"]);
  return <DropdownPrimitive.CheckboxItem class={cn(styles().item(), props.class)} {...rest} />;
};

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Sub: DropdownSub,
  SubTrigger: DropdownSubTrigger,
  SubContent: DropdownSubContent,
  CheckboxItem: DropdownCheckboxItem,
  Item: DropdownItem,
  Arrow: DropdownArrow,
  ItemLabel: DropdownItemLabel,
  ItemIndicator: DropdownItemIndicator,
  Icon: DropdownIcon,
});
