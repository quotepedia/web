import { createEffect, createSignal, splitProps, type JSX, type ValidComponent } from "solid-js";

import { callEventHandler } from "@corvu/utils/dom";
import { mergeRefs } from "@corvu/utils/reactivity";
import { Polymorphic, type PolymorphicProps } from "@kobalte/core";
import { Description, ErrorMessage, Input, Label, Root, TextArea } from "@kobalte/core/text-field";

import { TextFieldContext, useTextFieldContext, type TextFieldContextValue } from "./text-field-context";
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
  const [inputRef, setInputRef] = createSignal<HTMLInputElement | HTMLTextAreaElement | undefined>();
  const [variants, otherProps] = splitProps(props as TextFieldRootProps, ["align", "plain"]);

  const context: TextFieldContextValue = {
    inputRef,
    setInputRef,
    variants,
  };

  return (
    <TextFieldContext.Provider value={context}>
      <Root {...otherProps} />
    </TextFieldContext.Provider>
  );
};

export const TextFieldWrapper = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldWrapperProps<T>>,
) => {
  const [styleProps, localProps, otherProps] = splitProps(props as TextFieldWrapperProps, ["class"], ["onClick"]);
  const context = useTextFieldContext();

  const onClick: JSX.EventHandlerUnion<HTMLInputElement | HTMLTextAreaElement, MouseEvent> = (event) => {
    !callEventHandler(localProps.onClick, event) && context.inputRef()?.focus();
  };

  return (
    <Polymorphic
      as="div"
      onClick={onClick}
      class={styles().wrapper({ ...context.variants, ...styleProps })}
      {...otherProps}
    />
  );
};

export const TextFieldInput = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, TextFieldInputProps<T>>,
) => {
  const [styleProps, localProps, otherProps] = splitProps(props as TextFieldInputProps, ["class"], ["ref"]);
  const [ref, setRef] = createSignal<HTMLInputElement | HTMLTextAreaElement | undefined>();
  const context = useTextFieldContext();

  createEffect(() => {
    context.setInputRef(ref);
  });

  return (
    <Input
      ref={mergeRefs(setRef, localProps.ref)}
      class={styles().input({ ...context.variants, ...styleProps })}
      {...otherProps}
    />
  );
};

export const TextFieldTextArea = <T extends ValidComponent = "textarea">(
  props: PolymorphicProps<T, TextFieldTextAreaProps<T>>,
) => {
  const [styleProps, otherProps] = splitProps(props as TextFieldTextAreaProps, ["class"]);
  const context = useTextFieldContext();
  return <TextArea class={styles().textarea({ ...context.variants, ...styleProps })} {...otherProps} />;
};

export const TextFieldLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, TextFieldLabelProps<T>>,
) => {
  const [styleProps, otherProps] = splitProps(props as TextFieldLabelProps, ["class"]);
  const context = useTextFieldContext();
  return <Label class={styles().label({ ...context.variants, ...styleProps })} {...otherProps} />;
};

export const TextFieldDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldDescriptionProps<T>>,
) => {
  const [styleProps, otherProps] = splitProps(props as TextFieldDescriptionProps, ["class"]);
  const context = useTextFieldContext();
  return <Description class={styles().description({ ...context.variants, ...styleProps })} {...otherProps} />;
};

export const TextFieldErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldErrorMessageProps<T>>,
) => {
  const [localProps, styleProps, otherProps] = splitProps(props as TextFieldErrorMessageProps, ["children"], ["class"]);
  const context = useTextFieldContext();

  return (
    <ErrorMessage {...otherProps}>
      <p class={styles().error({ ...context.variants, ...styleProps })} {...localProps} />
    </ErrorMessage>
  );
};
