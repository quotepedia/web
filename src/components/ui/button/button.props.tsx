import type { JSX, ParentProps, ValidComponent } from "solid-js";

import * as ButtonPrimitive from "@kobalte/core/button";
import type { VariantProps } from "tailwind-variants";

import { styles } from "./button.styles";

export type ButtonVariantProps = VariantProps<typeof styles>;

export type ButtonProps<T extends ValidComponent = "button"> = ParentProps<ButtonPrimitive.ButtonRootProps<T>> &
  ButtonVariantProps &
  JSX.StylableSVGAttributes;
