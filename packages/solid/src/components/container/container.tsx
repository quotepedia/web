import { splitProps, type ValidComponent } from "solid-js";

import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";

import type { ContainerRootProps } from "./container.props";
import { styles } from "./container.styles";

export const ContainerRoot = <T extends ValidComponent = "div">(props: PolymorphicProps<T, ContainerRootProps>) => {
  const [styleProps, otherProps] = splitProps(props, ["size", "padding", "class"]);
  return <Polymorphic as="div" class={styles(styleProps)} {...otherProps} />;
};
