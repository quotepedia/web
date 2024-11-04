import * as ButtonPrimitive from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { type ValidComponent, splitProps } from "solid-js";
import { cn } from "~/shared/utils/css";
import type { ButtonProps } from "./button.props";
import { styles } from "./button.styles";

export const Button = <T extends ValidComponent = "button">(props: PolymorphicProps<T, ButtonProps<T>>) => {
  const [local, variants, others] = splitProps(props as ButtonProps, ["class"], ["color", "size"]);

  return (
    <ButtonPrimitive.Root class={cn(styles({ ...variants }), local.class)} {...others}>
      {props.children}
    </ButtonPrimitive.Root>
  );
};
