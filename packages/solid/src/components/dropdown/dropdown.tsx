import { splitProps, type ValidComponent } from "solid-js";

import * as DropdownPrimitive from "@kobalte/core/dropdown-menu";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "@src/utils/css";
import type { DropdownContentProps, DropdownItemProps } from "./dropdown.props";
import { styles } from "./dropdown.styles";

// TODO: Re-map more dropdown primitives.
const DropdownRoot = DropdownPrimitive.Root;
const DropdownTrigger = DropdownPrimitive.Trigger;
const DropdownArrow = DropdownPrimitive.Arrow;
const DropdownItemLabel = DropdownPrimitive.ItemLabel;
const DropdownItemIndicator = DropdownPrimitive.ItemIndicator;
const DropdownIcon = DropdownPrimitive.Icon;

const DropdownContent = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DropdownContentProps<T>>) => {
  const [, rest] = splitProps(props as DropdownContentProps, ["class"]);
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content class={cn(styles().content(), props.class)} {...rest} >
        <DropdownPrimitive.Arrow class="my-px" size={36} />
        {props.children}
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Portal>
  );
};

const DropdownItem = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DropdownItemProps<T>>) => {
  const [, rest] = splitProps(props as DropdownItemProps, ["class"]);
  return <DropdownPrimitive.Item class={cn(styles().item(), props.class)} {...rest} />;
};

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
  Arrow: DropdownArrow,
  ItemLabel: DropdownItemLabel,
  ItemIndicator: DropdownItemIndicator,
  Icon: DropdownIcon,
});
