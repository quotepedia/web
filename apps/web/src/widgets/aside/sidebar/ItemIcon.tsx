import { Polymorphic, type PolymorphicProps } from "@kobalte/core";
import { cn } from "@quotepedia/solid";
import { Icon, type IconProps } from "@quotepedia/solid/components/icon";
import { splitProps, type ValidComponent } from "solid-js";

export type SidebarItemIconProps = Omit<IconProps, "icon"> & {
  icon?: string;
};

export const SidebarItemIcon = <T extends ValidComponent>(props: PolymorphicProps<T, SidebarItemIconProps>) => {
  const [localProps, otherProps] = splitProps(props, ["class"]);
  return <Polymorphic as={Icon} class={cn("size-6 lg:size-4", localProps.class)} {...otherProps} />;
};

export default SidebarItemIcon;
