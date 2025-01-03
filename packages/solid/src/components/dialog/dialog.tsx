import type { ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as DialogPrimitive from "@kobalte/core/dialog";
import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "@src/utils/css";

import type {
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogOverlayProps,
  DialogTitleProps,
} from "./dialog.props";
import { styles } from "./dialog.styles";

export const DialogRoot = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.CloseButton;
export const DialogPortal = DialogPrimitive.Portal;

export const DialogOverlay = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DialogOverlayProps<T>>) => {
  const [scopedProps, otherProps] = splitProps(props as DialogOverlayProps, ["class"]);
  return <DialogPrimitive.Overlay class={cn(styles().overlay(), scopedProps.class)} {...otherProps} />;
};

export const DialogContent = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DialogContentProps<T>>) => {
  const [scopedProps, otherProps] = splitProps(props as DialogContentProps, ["class"]);

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content class={cn(styles().content(), scopedProps.class)} {...otherProps} />
    </DialogPortal>
  );
};

export const DialogHeader = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DialogHeaderProps<T>>) => {
  const [scopedProps, otherProps] = splitProps(props as DialogHeaderProps, ["class"]);

  return <Polymorphic as="div" class={cn(styles().header(), scopedProps.class)} {...otherProps} />;
};

export const DialogDismiss = () => {
  return (
    <DialogPrimitive.CloseButton class={cn(styles().dismiss())}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current stroke-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </DialogPrimitive.CloseButton>
  );
};

export const DialogFooter = <T extends ValidComponent = "div">(props: PolymorphicProps<T, DialogFooterProps<T>>) => {
  const [scopedProps, otherProps] = splitProps(props as DialogFooterProps, ["class"]);

  return <Polymorphic as={"div"} class={cn(styles().footer(), scopedProps.class)} {...otherProps} />;
};

export const DialogTitle = <T extends ValidComponent = "h2">(props: PolymorphicProps<T, DialogTitleProps<T>>) => {
  const [scopedProps, otherProps] = splitProps(props as DialogTitleProps, ["class"]);

  return <DialogPrimitive.Title class={cn(styles().title(), scopedProps.class)} {...otherProps} />;
};

export const DialogDescription = <T extends ValidComponent = "p">(
  props: PolymorphicProps<T, DialogDescriptionProps<T>>,
) => {
  const [scopedProps, otherProps] = splitProps(props as DialogDescriptionProps, ["class"]);

  return <DialogPrimitive.Description class={cn(styles().description(), scopedProps.class)} {...otherProps} />;
};
