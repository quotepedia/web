import { type JSX, type ValidComponent } from "solid-js";

import * as SeparatorPrimitive from "@kobalte/core/separator";
import { VariantProps } from "tailwind-variants";

import { styles } from "./separator.styles";

export type SeparatorVariantProps = VariantProps<typeof styles>;

export type SeparatorProps<T extends ValidComponent = "hr"> = SeparatorPrimitive.SeparatorRootProps<T> &
  SeparatorVariantProps &
  JSX.StylableSVGAttributes;
