import { type ValidComponent, splitProps } from "solid-js";

import * as LinkPrimitive from "@kobalte/core/link";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "~/lib/utils/css";

import type { LinkProps } from "./link.props";
import { styles } from "./link.styles";

export const Link = <T extends ValidComponent = "a">(props: PolymorphicProps<T, LinkProps<T>>) => {
  const [local, others] = splitProps(props as LinkProps, ["class"]);

  return (
    <LinkPrimitive.Root class={cn(styles(), local.class)} {...others}>
      {props.children}
    </LinkPrimitive.Root>
  );
};
