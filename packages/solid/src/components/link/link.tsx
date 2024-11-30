import { type ValidComponent, splitProps } from "solid-js";

import { Root } from "@kobalte/core/link";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import type { LinkRootProps } from "./link.props";
import { styles } from "./link.styles";

export const LinkRoot = <T extends ValidComponent = "a">(props: PolymorphicProps<T, LinkRootProps<T>>) => {
  const [styleProps, otherProps] = splitProps(props as LinkRootProps, ["class"]);
  return <Root class={styles(styleProps)} {...otherProps} />;
};
