import type { ButtonRootProps } from "@kobalte/core/button";
import type { ParentProps, ValidComponent } from "solid-js";
import type { VariantProps } from "tailwind-variants";
import type { styles } from "./button.styles";

export type ButtonRenderProps = {
  class?: string;
};

export type ButtonVariantProps = VariantProps<typeof styles>;

export type ButtonProps<T extends ValidComponent | HTMLElement = HTMLElement> = ParentProps<
  ButtonRootProps<T> & ButtonVariantProps & ButtonRenderProps
>;
