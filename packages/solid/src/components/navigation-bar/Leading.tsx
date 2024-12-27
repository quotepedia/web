import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import styles from "./styles";

export type NavigationBarLeadingRenderProps = {
  class?: string;
};

export type NavigationBarLeadingProps = ParentProps<NavigationBarLeadingRenderProps>;

export const NavigationBarLeading = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NavigationBarLeadingProps>,
) => {
  const [styleProps, otherProps] = splitProps(props, ["class"]);

  return <Polymorphic as={"div"} class={styles().leading(styleProps)} {...otherProps} />;
};

export default NavigationBarLeading;
