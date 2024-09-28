import type * as DialogPrimitive from "@kobalte/core/dialog";
import type { ComponentProps, JSX, ParentProps, ValidComponent } from "solid-js";

export type DialogOverlayProps<T extends ValidComponent = "div"> = DialogPrimitive.DialogOverlayProps<T> &
  JSX.StylableSVGAttributes;

export type DialogContentProps<T extends ValidComponent = "div"> = DialogPrimitive.DialogContentProps<T> &
  ParentProps &
  JSX.StylableSVGAttributes;

export type DialogTitleProps<T extends ValidComponent = "h2"> = DialogPrimitive.DialogTitleProps<T> &
  JSX.StylableSVGAttributes;

export type DialogDescriptionProps<T extends ValidComponent = "p"> = DialogPrimitive.DialogDescriptionProps<T> &
  JSX.StylableSVGAttributes;

export type DialogFooterProps<T extends ValidComponent = "div"> = ComponentProps<T>;

export type DialogHeaderProps<T extends ValidComponent = "div"> = ComponentProps<T>;
