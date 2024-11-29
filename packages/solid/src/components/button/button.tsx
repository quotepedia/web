import { Root } from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { type ValidComponent, splitProps } from "solid-js";

import type { ButtonProps } from "./button.props";
import { styles } from "./button.styles";

export const Button = <T extends ValidComponent = "button">(props: PolymorphicProps<T, ButtonProps<T>>) => {
  const [localProps, styleProps, otherProps] = splitProps(props as ButtonProps, ["class"], ["color", "size"]);

  return <Root class={styles({ ...styleProps, class: localProps.class })} {...otherProps} />;
};
