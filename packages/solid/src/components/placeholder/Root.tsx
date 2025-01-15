import Heading from "@src/components/heading";
import Stack from "@src/components/stack";
import Text from "@src/components/text";
import { Show, type JSX } from "solid-js";

export type PlaceholderRootProps = {
  icon?: JSX.Element;
  heading: JSX.Element;
  description?: JSX.Element;
  footer?: JSX.Element;
};

export const PlaceholderRoot = (props: PlaceholderRootProps) => {
  return (
    <div role="status" class="mt-6 flex grow flex-col items-center space-y-6">
      <Show when={props.icon}>{(icon) => icon()}</Show>
      <hgroup class="space-y-4 text-center">
        <Heading size="subheading">{props.heading}</Heading>
        <Show when={props.description}>{(description) => <Text variant="muted">{description()}</Text>}</Show>
        <Show when={props.footer}>{(footer) => <div>{footer()}</div>}</Show>
      </hgroup>
    </div>
  );
};

export default PlaceholderRoot;
