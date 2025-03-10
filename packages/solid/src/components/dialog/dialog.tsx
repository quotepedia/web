import type { ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import { CloseButton, Content, Description, Title, Overlay, Portal } from "@kobalte/core/dialog";

import Icon from "../icon";
import type {
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogOverlayProps,
  DialogTitleProps,
} from "./dialog.props";
import { styles } from "./dialog.styles";

export const DialogOverlay = <T extends ValidComponent = "div">(props: DynamicProps<T, DialogOverlayProps<T>>) => {
  const [variantProps, otherProps] = splitProps(props as DialogOverlayProps, ["class"]);
  return <Overlay class={styles().overlay(variantProps)} {...otherProps} />;
};

export const DialogContent = <T extends ValidComponent = "div">(props: DynamicProps<T, DialogContentProps<T>>) => {
  const [variantProps, otherProps] = splitProps(props as DialogContentProps, ["class"]);

  return (
    <Portal>
      <DialogOverlay />
      <Content class={styles().content(variantProps)} {...otherProps} />
    </Portal>
  );
};

export const DialogHeader = <T extends ValidComponent = "div">(props: DynamicProps<T, DialogHeaderProps<T>>) => {
  const [variantProps, otherProps] = splitProps(props as DialogHeaderProps, ["class"]);
  return <Dynamic as="div" class={styles().header(variantProps)} {...otherProps} />;
};

export const DialogDismiss = () => {
  return (
    <CloseButton class={styles().dismiss()}>
      <Icon icon="f7:xmark" class="size-5" />
    </CloseButton>
  );
};

export const DialogFooter = <T extends ValidComponent = "div">(props: DynamicProps<T, DialogFooterProps<T>>) => {
  const [variantProps, otherProps] = splitProps(props as DialogFooterProps, ["class"]);
  return <Dynamic as="div" class={styles().footer(variantProps)} {...otherProps} />;
};

export const DialogTitle = <T extends ValidComponent = "h2">(props: DynamicProps<T, DialogTitleProps<T>>) => {
  const [variantProps, otherProps] = splitProps(props as DialogTitleProps, ["class"]);
  return <Title class={styles().title(variantProps)} {...otherProps} />;
};

export const DialogDescription = <T extends ValidComponent = "p">(
  props: DynamicProps<T, DialogDescriptionProps<T>>,
) => {
  const [variantProps, otherProps] = splitProps(props as DialogDescriptionProps, ["class"]);
  return <Description class={styles().description(variantProps)} {...otherProps} />;
};
