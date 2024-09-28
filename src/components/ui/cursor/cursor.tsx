import { type ValidComponent, splitProps } from "solid-js";

import { type PolymorphicProps, Polymorphic } from "@kobalte/core";

import { cn } from "~/lib/utils/css";

import { type CursorProps } from "./cursor.props";
import { styles } from "./cursor.styles";

export const Cursor = <T extends ValidComponent = "span">(props: PolymorphicProps<T, CursorProps>) => {
  const [local, others] = splitProps(props, ["class", "blink"]);

  return (
    <Polymorphic as="span" class={cn(styles().root(), { [styles().blink()]: local.blink }, local.class)} {...others} />
  );
};
