import { CloseButton as Close, Description, Root, Trigger } from "@kobalte/core/dialog";

import {
  DialogContent as Body,
  DialogDismiss as Dismiss,
  DialogFooter as Footer,
  DialogHeader as Header,
  DialogTitle as Title,
} from "./dialog";

import type {
  DialogContentProps as ContentProps,
  DialogDescriptionProps as DescriptionProps,
  DialogFooterProps as FooterProps,
  DialogHeaderProps as HeaderProps,
  DialogOverlayProps as OverlayProps,
  DialogTitleProps as TitleProps,
} from "./dialog.props";

export type { ContentProps, DescriptionProps, FooterProps, HeaderProps, OverlayProps, TitleProps };

export { Body, Close, Description, Dismiss, Footer, Header, Root, Title, Trigger };

export const Dialog = Object.assign(Root, {
  Trigger,
  Body,
  Close,
  Dismiss,
  Header,
  Title,
  Description,
  Footer,
});

export default Dialog;
