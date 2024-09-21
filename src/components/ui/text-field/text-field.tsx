import { splitProps, type ValidComponent } from "solid-js";

import { Polymorphic, PolymorphicProps } from "@kobalte/core";
import * as TextFieldPrimitive from "@kobalte/core/text-field";

import { merge } from "~/lib/utils/css/merge";

import {
  TextFieldDescriptionProps,
  TextFieldErrorMessageProps,
  TextFieldInputProps,
  TextFieldLabelProps,
  TextFieldTextAreaProps,
  TextFieldWrapperProps,
} from "./text-field.props";
import { styles } from "./text-field.styles";

const TextFieldRoot = TextFieldPrimitive.Root;

export const TextFieldInputWrapper = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldWrapperProps<T>>,
) => {
  const [local, others] = splitProps(props as TextFieldWrapperProps, ["class"]);
  return <Polymorphic as="div" class={merge(styles().wrapper(), local.class)} {...others} />;
};

export const TextFieldInput = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, TextFieldPrimitive.TextFieldInputProps<T>>,
) => {
  const [local, others] = splitProps(props as TextFieldInputProps, ["class"]);
  return <TextFieldPrimitive.Input class={merge(styles().input(), local.class)} {...others} />;
};

const TextFieldTextArea = <T extends ValidComponent = "textarea">(
  props: PolymorphicProps<T, TextFieldTextAreaProps<T>>,
) => {
  const [local, others] = splitProps(props as TextFieldTextAreaProps, ["class"]);
  return <TextFieldPrimitive.TextArea class={merge(styles().textarea(), local.class)} {...others} />;
};

const TextFieldLabel = <T extends ValidComponent = "label">(props: PolymorphicProps<T, TextFieldLabelProps<T>>) => {
  const [local, others] = splitProps(props as TextFieldLabelProps, ["class"]);
  return <TextFieldPrimitive.Label class={merge(styles().label(), local.class)} {...others} />;
};

const TextFieldDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldDescriptionProps<T>>,
) => {
  const [local, others] = splitProps(props as TextFieldDescriptionProps, ["class"]);
  return <TextFieldPrimitive.Description class={merge(styles().description(), local.class)} {...others} />;
};

const TextFieldErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldErrorMessageProps<T>>,
) => {
  const [local, others] = splitProps(props as TextFieldErrorMessageProps, ["class"]);
  return <TextFieldPrimitive.ErrorMessage class={merge(styles().error(), local.class)} {...others} />;
};

export const TextField = Object.assign(TextFieldRoot, {
  Description: TextFieldDescription,
  ErrorMessage: TextFieldErrorMessage,
  InputWrapper: TextFieldInputWrapper,
  Input: TextFieldInput,
  Label: TextFieldLabel,
  TextArea: TextFieldTextArea,
});
