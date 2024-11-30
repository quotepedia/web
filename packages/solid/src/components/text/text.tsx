import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ValidComponent } from "solid-js";
import type { TextRootProps } from "./text.props";
import { styles } from "./text.styles";

export const TextRoot = <T extends ValidComponent = "p">(props: PolymorphicProps<T, TextRootProps>) => {
  const [styleProps, otherProps] = splitProps(props, ["class", "variant", "size"]);
  return <Polymorphic as="p" class={styles(styleProps)} {...otherProps} />;
};
