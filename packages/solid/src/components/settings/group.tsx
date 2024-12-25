import { Polymorphic, type PolymorphicProps } from "@kobalte/core";
import { cn } from "@src/utils/css";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";

export type SettingsGroupRenderProps = {
  class?: string;
};

export type SettingsGroupProps = ParentProps<SettingsGroupRenderProps>;

export const SettingsGroup = <T extends ValidComponent = "div">(props: PolymorphicProps<T, SettingsGroupProps>) => {
  const [localProps, otherProps] = splitProps(props, ["class"]);

  return (
    <Polymorphic
      as="div"
      class={cn(
        "group/group divide-bg-secondary bg-bg-default ring-bg-secondary w-full divide-y overflow-hidden rounded-lg ring-1 transition-[background-color,box-shadow]",
        localProps.class,
      )}
      {...otherProps}
    />
  );
};
