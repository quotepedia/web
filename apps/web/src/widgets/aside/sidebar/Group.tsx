import { Polymorphic, type PolymorphicProps } from "@kobalte/core";
import { cn } from "@quotepedia/solid";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";

export type SidebarGroupProps = ParentProps<{
  class?: string;
}>;

export const SidebarGroup = <T extends ValidComponent = "div">(props: PolymorphicProps<T, SidebarGroupProps>) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <Polymorphic
      as="div"
      class={cn("flex w-full max-xl:flex-row xl:flex xl:flex-col xl:gap-1", local.class)}
      {...others}
    />
  );
};

export default SidebarGroup;
