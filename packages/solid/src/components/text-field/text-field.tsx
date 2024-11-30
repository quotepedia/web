import { splitProps, type ValidComponent } from "solid-js";

import { Polymorphic, type PolymorphicProps } from "@kobalte/core";
import { Description, ErrorMessage, Input, Label, Root, TextArea } from "@kobalte/core/text-field";

import type {
  TextFieldDescriptionProps,
  TextFieldErrorMessageProps,
  TextFieldInputProps,
  TextFieldLabelProps,
  TextFieldRootProps,
  TextFieldTextAreaProps,
  TextFieldWrapperProps,
} from "./text-field.props";
import { styles } from "./text-field.styles";

export const TextFieldRoot = <T extends ValidComponent = "div">(props: PolymorphicProps<T, TextFieldRootProps<T>>) => {
  return <Root {...props} />;
};

export const TextFieldWrapper = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldWrapperProps<T>>,
) => {
  const [styleProps, otherProps] = splitProps(props as TextFieldWrapperProps, ["class"]);
  return <Polymorphic as="div" class={styles().wrapper(styleProps)} {...otherProps} />;
};

export const TextFieldInput = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, TextFieldInputProps<T>>,
) => {
  const [styleProps, otherProps] = splitProps(props as TextFieldInputProps, ["class"]);
  return <Input class={styles().input(styleProps)} {...otherProps} />;
};

export const TextFieldTextArea = <T extends ValidComponent = "textarea">(
  props: PolymorphicProps<T, TextFieldTextAreaProps<T>>,
) => {
  const [styleProps, otherProps] = splitProps(props as TextFieldTextAreaProps, ["class"]);
  return <TextArea class={styles().textarea(styleProps)} {...otherProps} />;
};

export const TextFieldLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, TextFieldLabelProps<T>>,
) => {
  const [styleProps, otherProps] = splitProps(props as TextFieldLabelProps, ["class"]);
  return <Label class={styles().label(styleProps)} {...otherProps} />;
};

export const TextFieldDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldDescriptionProps<T>>,
) => {
  const [styleProps, otherProps] = splitProps(props as TextFieldDescriptionProps, ["class"]);
  return <Description class={styles().description(styleProps)} {...otherProps} />;
};

export const TextFieldErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldErrorMessageProps<T>>,
) => {
  const [styleProps, otherProps] = splitProps(props as TextFieldErrorMessageProps, ["class"]);
  return <ErrorMessage class={styles().error(styleProps)} {...otherProps} />;
};
