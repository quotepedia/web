import type { JSX, ParentProps, ValidComponent } from "solid-js";

import * as LinkPrimitive from "@kobalte/core/link";
import type { VariantProps } from "tailwind-variants";

import { styles } from "./link.styles";

export type LinkVariantProps = VariantProps<typeof styles>;

export type LinkProps<T extends ValidComponent = "a"> = ParentProps<LinkPrimitive.LinkRootProps<T>> &
  LinkVariantProps &
  JSX.StylableSVGAttributes;
