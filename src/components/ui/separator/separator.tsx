import { type ValidComponent, splitProps } from "solid-js";

import { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as SeparatorPrimitive from "@kobalte/core/separator";

import { merge } from "~/lib/utils/css/merge";

import { SeparatorProps } from "./separator.props";
import { styles } from "./separator.styles";

export const Separator = <T extends ValidComponent = "hr">(props: PolymorphicProps<T, SeparatorProps<T>>) => {
  const [variants, local, others] = splitProps(props as SeparatorProps, ["orientation"], ["class"]);
  return (
    <SeparatorPrimitive.Root
      orientation={variants.orientation}
      class={merge(styles({ ...variants }), local.class)}
      {...others}
    />
  );
};
