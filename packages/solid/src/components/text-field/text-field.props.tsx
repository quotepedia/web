import type { JSX, ValidComponent, ParentProps } from "solid-js";

import * as TextFieldPrimitive from "@kobalte/core/text-field";

export type TextFieldWrapperProps<T extends ValidComponent = "div"> = TextFieldPrimitive.TextFieldErrorMessageProps<T> &
  JSX.StylableSVGAttributes &
  ParentProps;

export type TextFieldInputProps<T extends ValidComponent = "input"> = TextFieldPrimitive.TextFieldInputProps<T> &
  JSX.StylableSVGAttributes;

export type TextFieldTextAreaProps<T extends ValidComponent = "textarea"> =
  TextFieldPrimitive.TextFieldTextAreaProps<T> & JSX.StylableSVGAttributes;

export type TextFieldLabelProps<T extends ValidComponent = "label"> = TextFieldPrimitive.TextFieldLabelProps<T> &
  JSX.StylableSVGAttributes;

export type TextFieldDescriptionProps<T extends ValidComponent = "div"> =
  TextFieldPrimitive.TextFieldDescriptionProps<T> & JSX.StylableSVGAttributes;

export type TextFieldErrorMessageProps<T extends ValidComponent = "div"> =
  TextFieldPrimitive.TextFieldErrorMessageProps<T> & JSX.StylableSVGAttributes;
