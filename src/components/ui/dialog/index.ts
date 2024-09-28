import {
  DialogClose as Close,
  DialogContent as Content,
  DialogDescription as Description,
  DialogDismiss as Dismiss,
  DialogFooter as Footer,
  DialogHeader as Header,
  DialogRoot as Root,
  DialogTitle as Title,
  DialogTrigger as Trigger,
} from "./dialog";

export * from "./dialog.props";
export * from "./dialog.styles";

export {
  Root,
  Trigger,
  Content,
  Close,
  Dismiss,
  Header,
  Title,
  Description,
  Footer,
};

export const Dialog = Object.assign(Root, {
  Trigger,
  Content,
  Close,
  Dismiss,
  Header,
  Title,
  Description,
  Footer,
});

export default Dialog;
