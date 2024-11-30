import { Root } from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { type ValidComponent, splitProps } from "solid-js";

import type { ButtonRootProps } from "./button.props";
import { styles } from "./button.styles";

export const ButtonRoot = <T extends ValidComponent = "button">(props: PolymorphicProps<T, ButtonRootProps<T>>) => {
  const [styleProps, otherProps] = splitProps(props as ButtonRootProps, ["class", "color", "size"]);
  return <Root class={styles(styleProps)} {...otherProps} />;
};
