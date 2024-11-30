import type { ValidComponent } from "solid-js";

import type { SeparatorRootProps as RootProps } from "@kobalte/core/separator";
import type { VariantProps } from "tailwind-variants";

import type { styles } from "./separator.styles";

export type SeparatorRootRenderProps = {
  class?: string;
};

export type SeparatorRootVariantProps = VariantProps<typeof styles>;

export type SeparatorRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = RootProps<T> &
  SeparatorRootRenderProps &
  SeparatorRootVariantProps;
