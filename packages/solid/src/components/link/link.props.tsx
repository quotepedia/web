import type { ParentProps, ValidComponent } from "solid-js";

import type { LinkRootProps as RootProps } from "@kobalte/core/link";
import type { VariantProps } from "tailwind-variants";

import { styles } from "./link.styles";

export type LinkRootRenderProps = {
  class?: string;
};

export type LinkRootVariantProps = VariantProps<typeof styles>;

export type LinkRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = RootProps<T> &
  ParentProps<LinkRootRenderProps & LinkRootVariantProps>;
