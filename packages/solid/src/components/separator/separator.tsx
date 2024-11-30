import { type ValidComponent, splitProps } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { Root } from "@kobalte/core/separator";

import type { SeparatorRootProps } from "./separator.props";
import { styles } from "./separator.styles";

export const SeparatorRoot = <T extends ValidComponent = "hr">(props: PolymorphicProps<T, SeparatorRootProps<T>>) => {
  const [styleProps, otherProps] = splitProps(props as SeparatorRootProps, ["class", "orientation"]);
  return <Root orientation={styleProps.orientation} class={styles(styleProps)} {...otherProps} />;
};
