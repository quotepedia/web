import { Polymorphic, type PolymorphicProps } from "@kobalte/core";
import type { ParentProps, ValidComponent } from "solid-js";

export const SettingsGroup = <T extends ValidComponent = "div">(props: PolymorphicProps<T, ParentProps>) => {
  return (
    <Polymorphic
      as="div"
      class="w-full group/group overflow-hidden divide-y divide-bg-tertiary rounded-lg bg-bg-default ring-1 ring-bg-tertiary transition-[background-color,box-shadow]"
      {...props}
    />
  );
};
