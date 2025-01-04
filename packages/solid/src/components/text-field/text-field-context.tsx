import { type Accessor, createContext, type Setter, useContext } from "solid-js";

export type TextFieldContextValue = {
  inputRef: Accessor<HTMLInputElement | HTMLTextAreaElement | undefined>;
  setInputRef: Setter<HTMLInputElement | HTMLTextAreaElement | undefined>;
};

export const TextFieldContext = createContext<TextFieldContextValue>();

export function useTextFieldContext() {
  const context = useContext(TextFieldContext);

  if (context === undefined) {
    throw new Error(`The 'useTextFieldContext' must be used within a <TextField> component.`);
  }

  return context;
}
