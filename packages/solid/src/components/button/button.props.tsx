import type { ButtonRootProps as RootProps } from "@kobalte/core/button";
import type { ParentProps, ValidComponent } from "solid-js";
import type { VariantProps } from "tailwind-variants";
import type { styles } from "./button.styles";

export type ButtonRootRenderProps = {
  class?: string;
};

export type ButtonRootVariantProps = VariantProps<typeof styles>;

export type ButtonRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = RootProps<T> &
  ParentProps<ButtonRootVariantProps & ButtonRootRenderProps>;
