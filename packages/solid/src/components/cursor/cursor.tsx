import { type ValidComponent, splitProps } from "solid-js";

import { type PolymorphicProps, Polymorphic } from "@kobalte/core";

import type { CursorRootProps } from "./cursor.props";
import { styles } from "./cursor.styles";

export const CursorRoot = <T extends ValidComponent = "span">(props: PolymorphicProps<T, CursorRootProps>) => {
  const [styleProps, otherProps] = splitProps(props, ["class", "flash"]);
  return <Polymorphic as="span" class={styles(styleProps)} {...otherProps} />;
};
