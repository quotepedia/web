import type { ButtonRootProps as RootProps } from "@kobalte/core/button";
import type { ParentProps, ValidComponent } from "solid-js";
import type { VariantProps } from "tailwind-variants";
import type { styles } from "./button.styles";

export type ButtonRootOptions = {
  loading?: boolean;
  leadingIcon?: string;
  trailingIcon?: string;
};

export type ButtonRootRenderProps = {
  class?: string;
};

export type ButtonRootVariantProps = VariantProps<typeof styles>;

export type ButtonRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ParentProps<
  RootProps<T> & ButtonRootOptions & ButtonRootRenderProps & ButtonRootVariantProps
>;
