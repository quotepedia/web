import { splitProps } from "solid-js";

import { Collapsible } from "@kobalte/core/collapsible";
import { Icon } from "@src/components/icon";

import { cn } from "@src/utils/css";
import { SettingsCard } from "../card";

import type {
  SettingsExpanderContentProps,
  SettingsExpanderRootProps,
  SettingsExpanderTriggerProps,
} from "./expander.props";

export const SettingsExpanderRoot = (props: SettingsExpanderRootProps) => {
  const [local, others] = splitProps(props, ["class"]);
  return <Collapsible class={cn("group/collapsible", local.class)} {...others} />;
};

export const SettingsExpanderTrigger = (props: SettingsExpanderTriggerProps) => {
  return (
    <Collapsible.Trigger
      as={(props) => <SettingsCard as={"button"} type="button" {...props} />}
      variant="hover"
      {...props}
    />
  );
};

export const SettingsExpanderIndicator = () => (
  <Icon
    icon="f7:chevron-right"
    class={cn(
      "text-fg-muted size-4 transition-[transform,color]",
      "group-data-[expanded]/collapsible:[transform:rotate(-90deg)]",
    )}
  />
);

export const SettingsExpanderContent = (props: SettingsExpanderContentProps) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <Collapsible.Content
      class={cn("data-[closed]:animate-collapse data-[expanded]:animate-expand overflow-hidden", local.class)}
      {...others}
    />
  );
};
