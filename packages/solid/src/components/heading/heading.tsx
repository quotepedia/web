import { type ValidComponent, splitProps } from "solid-js";

import { type PolymorphicProps, Polymorphic } from "@kobalte/core";

import { type HeadingRootProps } from "./heading.props";
import { styles } from "./heading.styles";

export const HeadingRoot = <T extends ValidComponent = "h1">(props: PolymorphicProps<T, HeadingRootProps>) => {
  const [styleProps, otherProps] = splitProps(props, ["class", "size"]);
  return <Polymorphic as="h1" class={styles(styleProps)} {...otherProps} />;
};
