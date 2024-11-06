import { splitProps, type ValidComponent } from "solid-js";

import * as DropdownPrimitive from "@kobalte/core/dropdown-menu";
import { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "@quotepedia/solid";
import { DropdownMenuContentProps, DropdownMenuItemProps } from "./dropdown.props";
import { styles } from "./dropdown.styles";
import { Icon } from "solid-heroicons";

// TODO: Re-map more dropdown primitives.
const DropdownRoot = DropdownPrimitive.Root;
const DropdownTrigger = DropdownPrimitive.Trigger;
const DropdownArrow = DropdownPrimitive.Arrow;
const DropdownItemIcon = Icon;
const DropdownItemLabel = DropdownPrimitive.ItemLabel;
const DropdownItemIndicator = DropdownPrimitive.ItemIndicator;
const DropdownIcon = DropdownPrimitive.Icon;

const DropdownContent = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DropdownMenuContentProps<T>>) => {
  const [, rest] = splitProps(props as DropdownMenuContentProps, ["class"]);
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content class={cn(styles().content(), props.class)} {...rest}>
        <DropdownPrimitive.Arrow />
        {props.children}
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Portal>
  );
};

const DropdownItem = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DropdownMenuItemProps<T>>) => {
  const [, rest] = splitProps(props as DropdownMenuItemProps, ["class"]);
  return <DropdownPrimitive.Item class={cn(styles().item(), props.class)} {...rest} />;
};

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
  Arrow: DropdownArrow,
  ItemIcon: DropdownItemIcon,
  ItemLabel: DropdownItemLabel,
  ItemIndicator: DropdownItemIndicator,
  Icon: DropdownIcon,
});
