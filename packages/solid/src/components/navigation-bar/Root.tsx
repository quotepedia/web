import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { useWindowScrollPosition } from "@solid-primitives/scroll";
import { createMemo, mergeProps, splitProps, type ParentProps, type ValidComponent } from "solid-js";
import styles from "./styles";

export type NavigationBarRootOptions = {
  /**
   * Threshold in pixels after which the navigation bar will change its background.
   */
  scrollThreshold?: number;
};

export type NavigationBarRootRenderProps = {
  class?: string;
};

export type NavigationBarRootProps = ParentProps<NavigationBarRootOptions & NavigationBarRootRenderProps>;

export const NavigationBarRoot = <T extends ValidComponent = "nav">(
  props: PolymorphicProps<T, NavigationBarRootProps>,
) => {
  const defaultedProps = mergeProps(
    {
      scrollThreshold: 45,
    },
    props,
  );

  const [styleProps, localProps, otherProps] = splitProps(defaultedProps, ["class"], ["scrollThreshold"]);

  const scroll = useWindowScrollPosition();
  const scrolled = createMemo(() => scroll.y >= localProps.scrollThreshold);

  return <Polymorphic as="nav" class={styles().root({ scrolled: scrolled(), ...styleProps })} {...otherProps} />;
};

export default NavigationBarRoot;
