import { type ValidComponent, splitProps } from "solid-js";

import { type PolymorphicProps, Polymorphic } from "@kobalte/core";

import { merge } from "~/lib/utils/css/merge";

import { type HeadingProps } from "./heading.props";
import { styles } from "./heading.styles";

export const Heading = <T extends ValidComponent = "h1">(props: PolymorphicProps<T, HeadingProps>) => {
  const [local, variants, others] = splitProps(props, ["class"], ["size"]);

  return (
    <Polymorphic as="h1" class={merge(styles({ ...variants }), local.class)} {...others} />
  );
};
