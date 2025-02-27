import type { JSX } from "solid-js";
import type { RootVariantProps } from "../text-field";

export type TextFieldProps = {
  name: string;
  icon?: string;
  type?: string | undefined;
  label?: string | undefined;
  description?: string | JSX.Element | undefined;
  placeholder?: string | undefined;
  value?: string | undefined;
  error?: string | undefined;
  class?: string | undefined;
  title?: string | undefined;
  loading?: boolean | undefined;
  readonly?: boolean | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  autofocus?: boolean | undefined;
  clearable?: boolean | undefined;
  multiline?: boolean | undefined;
  ref?: (element: HTMLInputElement | HTMLTextAreaElement) => void;
  onInput?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, InputEvent>;
  onChange?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, Event>;
  onBlur?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, FocusEvent>;
  onFocus?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, FocusEvent>;
  onKeyDown?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, KeyboardEvent>;
} & RootVariantProps;
