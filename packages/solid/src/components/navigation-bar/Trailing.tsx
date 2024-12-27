import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import styles from "./styles";

export type NavigationBarTrailingRenderProps = {
  class?: string;
};

export type NavigationBarTrailingProps = ParentProps<NavigationBarTrailingRenderProps>;

export const NavigationBarTrailing = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NavigationBarTrailingProps>,
) => {
  const [styleProps, otherProps] = splitProps(props, ["class"]);

  return <Polymorphic as={"div"} class={styles().trailing(styleProps)} {...otherProps} />;
};

export default NavigationBarTrailing;
