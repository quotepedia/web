import {
  DialogClose as Close,
  DialogContent as Body,
  DialogDescription as Description,
  DialogDismiss as Dismiss,
  DialogFooter as Footer,
  DialogHeader as Header,
  DialogRoot as Root,
  DialogTitle as Title,
  DialogTrigger as Trigger,
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

export { Close, Body, Description, Dismiss, Footer, Header, Root, Title, Trigger };

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
