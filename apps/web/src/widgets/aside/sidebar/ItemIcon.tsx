import { Polymorphic, type PolymorphicProps } from "@kobalte/core";
import { Icon } from "solid-heroicons";
import { splitProps, type JSX, type ValidComponent } from "solid-js";
import { cn } from "@quotepedia/solid";

export type IconProps = {
  path?: {
    path?: JSX.Element;
    outline?: boolean;
    mini?: boolean;
  };
};

export type SidebarIconProps = IconProps & JSX.StylableSVGAttributes;

export const SidebarItemIcon = <T extends ValidComponent>(props: PolymorphicProps<T, SidebarIconProps>) => {
  const [scopedProps, otherProps] = splitProps(props, ["class"]);
  return <Polymorphic as={Icon} class={cn("size-6 lg:size-4", scopedProps.class)} {...otherProps} />;
};

export default SidebarItemIcon;
