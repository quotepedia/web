import { splitProps, type ValidComponent } from "solid-js";

import * as PopoverPrimitive from "@kobalte/core/popover";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "@src/utils/css";
import type { PopoverContentProps } from "./popover.props";
import { styles } from "./popover.styles";

const PopoverRoot = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverArrow = PopoverPrimitive.Arrow;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverCloseButton = PopoverPrimitive.CloseButton;
const PopoverDescription = PopoverPrimitive.Description;
const PopoverTitle = PopoverPrimitive.Title;

const PopoverContent = <T extends ValidComponent = "div">(props: PolymorphicProps<T, PopoverContentProps<T>>) => {
  const [, rest] = splitProps(props as PopoverContentProps, ["class"]);
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content class={cn(styles().content(), props.class)} {...rest} >
        <PopoverPrimitive.Arrow class="my-px" size={36} />
        {props.children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
};

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Arrow: PopoverArrow,
  CloseButton: PopoverCloseButton,
  Description: PopoverDescription,
  Title: PopoverTitle,
  Anchor: PopoverAnchor,
});
