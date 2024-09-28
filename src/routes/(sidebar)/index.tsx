import { Button, Heading, Title } from "~/components";
import Dialog from "~/components/ui/dialog";

export default function Index() {
  return (
    <>
      <Title>Home</Title>

      <Heading>Home</Heading>

      <Dialog>
        <Dialog.Trigger as={Button}>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>About Kobalte</Dialog.Title>
            <Dialog.Dismiss />
          </Dialog.Header>
          <Dialog.Description>
            Kobalte is a UI toolkit for building accessible web apps and design systems with SolidJS. It provides a set
            of low-level UI components and primitives which can be the foundation for your design system implementation.
          </Dialog.Description>
          <Dialog.Footer>
            <Dialog.Close as={Button}>
              Close
            </Dialog.Close>
            <Dialog.Close as={Button} color="primary">
              Done
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
}
