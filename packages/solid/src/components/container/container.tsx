import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ValidComponent } from "solid-js";
import type { ContainerProps } from "./container.props";
import { styles } from "./container.styles";

export const Container = <T extends ValidComponent = "div">(props: PolymorphicProps<T, ContainerProps>) => {
  const [variantProps, otherProps] = splitProps(props, ["size", "padding", "class"]);

  return <Polymorphic as="div" class={styles(variantProps)} {...otherProps} />;
};
