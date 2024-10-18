import { type Accessor, type JSX } from "solid-js";

export type TextFieldProps = {
  name: string;
  type?: string | undefined;
  label?: string | undefined;
  description?: string | JSX.Element | undefined;
  placeholder?: string | undefined;
  value?: string | undefined;
  error?: string | undefined;
  multiline?: boolean | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  ref?: (element: HTMLInputElement | HTMLTextAreaElement) => void;
  onInput?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, InputEvent>;
  onChange?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, Event>;
  onBlur?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, FocusEvent>;
};
