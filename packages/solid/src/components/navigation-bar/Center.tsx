import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import styles from "./styles";

export type NavigationBarCenterRenderProps = {
  class?: string;
};

export type NavigationBarCenterProps = ParentProps<NavigationBarCenterRenderProps>;

export const NavigationBarCenter = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NavigationBarCenterProps>,
) => {
  const [styleProps, otherProps] = splitProps(props, ["class"]);

  return <Polymorphic as={"div"} class={styles().center(styleProps)} {...otherProps} />;
};

export default NavigationBarCenter;
