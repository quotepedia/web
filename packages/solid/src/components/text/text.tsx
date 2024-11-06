import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ValidComponent } from "solid-js";
import type { TextProps } from "./text.props";
import { styles } from "./text.styles";

export const Text = <T extends ValidComponent = "p">(props: PolymorphicProps<T, TextProps>) => {
  const [variantProps, otherProps] = splitProps(props, ["variant", "size"]);
  return <Polymorphic as="p" class={styles(variantProps)} {...otherProps} />;
};
