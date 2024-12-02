import type { ComponentProps, JSX, ParentProps, ValidComponent } from "solid-js";

import type { ElementOf } from "@kobalte/core";
import type {
  TextFieldDescriptionProps as DescriptionProps,
  TextFieldErrorMessageProps as ErrorMessageProps,
  TextFieldInputProps as InputProps,
  TextFieldLabelProps as LabelProps,
  TextFieldRootProps as RootProps,
  TextFieldTextAreaProps as TextAreaProps,
} from "@kobalte/core/text-field";

export type TextFieldRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = RootProps<T>;

export type TextFieldWrapperProps<T extends ValidComponent | HTMLElement = HTMLElement> = ComponentProps<ElementOf<T>> &
  JSX.StylableSVGAttributes;

export type TextFieldInputProps<T extends ValidComponent | HTMLElement = HTMLElement> = InputProps<T> &
  JSX.StylableSVGAttributes;

export type TextFieldTextAreaProps<T extends ValidComponent | HTMLElement = HTMLElement> = TextAreaProps<T> &
  JSX.StylableSVGAttributes;

export type TextFieldLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = LabelProps<T> &
  JSX.StylableSVGAttributes;

export type TextFieldDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = DescriptionProps<T> &
  JSX.StylableSVGAttributes;

export type TextFieldErrorMessageProps<T extends ValidComponent | HTMLElement = HTMLElement> = ErrorMessageProps<T> &
  ParentProps<JSX.StylableSVGAttributes>;
