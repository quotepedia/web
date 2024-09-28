import { type ValidComponent, splitProps } from "solid-js";

import { type PolymorphicProps, Polymorphic } from "@kobalte/core";

import { cn } from "~/lib/utils/css";

import { type HeadingProps } from "./heading.props";
import { styles } from "./heading.styles";

export const Heading = <T extends ValidComponent = "h1">(props: PolymorphicProps<T, HeadingProps>) => {
  const [local, variants, others] = splitProps(props, ["class"], ["size"]);

  return (
    <Polymorphic as="h1" class={cn(styles({ ...variants }), local.class)} {...others} />
  );
};
