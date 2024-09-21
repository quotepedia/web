import { type ValidComponent, splitProps } from "solid-js";

import * as LinkPrimitive from "@kobalte/core/link";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { merge } from "~/lib/utils/css/merge";

import type { LinkProps } from "./link.props";
import { styles } from "./link.styles";

export const Link = <T extends ValidComponent = "a">(props: PolymorphicProps<T, LinkProps<T>>) => {
  const [local, others] = splitProps(props as LinkProps, ["class"]);

  return (
    <LinkPrimitive.Root class={merge(styles(), local.class)} {...others}>
      {props.children}
    </LinkPrimitive.Root>
  );
};
