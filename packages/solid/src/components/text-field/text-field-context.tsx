import { type Accessor, createContext, type Setter, useContext } from "solid-js";
import type { TextFieldRootVariantProps } from "./text-field.props";

export type TextFieldContextValue = {
  inputRef: Accessor<HTMLInputElement | HTMLTextAreaElement | undefined>;
  setInputRef: Setter<HTMLInputElement | HTMLTextAreaElement | undefined>;
  variants: TextFieldRootVariantProps;
};

export const TextFieldContext = createContext<TextFieldContextValue>();

export function useTextFieldContext() {
  const context = useContext(TextFieldContext);

  if (context === undefined) {
    throw new Error(`The 'useTextFieldContext' must be used within a <TextField> component.`);
  }

  return context;
}
