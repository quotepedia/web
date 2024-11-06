import { type ValidComponent, splitProps } from "solid-js";

import { type PolymorphicProps, Polymorphic } from "@kobalte/core";

import { cn } from "@src/utils/css";

import { type CursorProps } from "./cursor.props";
import { styles } from "./cursor.styles";

export const Cursor = <T extends ValidComponent = "span">(props: PolymorphicProps<T, CursorProps>) => {
  const [local, others] = splitProps(props, ["class", "flash"]);

  return (
    <Polymorphic as="span" class={cn(styles().root(), { [styles().flash()]: local.flash }, local.class)} {...others} />
  );
};
