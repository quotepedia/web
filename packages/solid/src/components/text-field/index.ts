import {
  TextFieldDescription as Description,
  TextFieldErrorMessage as ErrorMessage,
  TextFieldInput as Input,
  TextFieldLabel as Label,
  TextFieldRoot as Root,
  TextFieldTextArea as TextArea,
  TextFieldWrapper as Wrapper,
} from "./text-field";

import type {
  TextFieldDescriptionProps as DescriptionProps,
  TextFieldErrorMessageProps as ErrorMessageProps,
  TextFieldInputProps as InputProps,
  TextFieldLabelProps as LabelProps,
  TextFieldRootProps as RootProps,
  TextFieldTextAreaProps as TextAreaProps,
  TextFieldWrapperProps as WrapperProps,
} from "./text-field.props";

export type {
  DescriptionProps,
  ErrorMessageProps,
  InputProps,
  LabelProps,
  RootProps,
  TextAreaProps,
  WrapperProps,
};

export {
  Description,
  ErrorMessage,
  Input,
  Label,
  Root,
  TextArea,
  Wrapper,
};

export const TextField = Object.assign(Root, {
  Description,
  Input,
  ErrorMessage,
  Label,
  TextArea,
  Wrapper,
});

export default TextField;
