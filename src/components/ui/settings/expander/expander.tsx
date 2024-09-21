import { splitProps } from "solid-js";

import { Collapsible } from "@kobalte/core/collapsible";
import { chevronDown } from "solid-heroicons/solid-mini";

import { SettingsCard } from "../card";
import { merge } from "~/lib/utils/css/merge";

import type {
  SettingsExpanderContentProps,
  SettingsExpanderRootProps,
  SettingsExpanderTriggerProps,
} from "./expander.props";
import { Separator } from "../../separator";

export const SettingsExpanderRoot = (props: SettingsExpanderRootProps) => {
  const [local, others] = splitProps(props, ["class"]);
  return <Collapsible class={merge("group/collapsible", local.class)} {...others} />;
};

export const SettingsExpanderTrigger = (props: SettingsExpanderTriggerProps) => {
  return <Collapsible.Trigger as={(props) => <SettingsCard as={"button"} {...props} />} variant="hover" {...props} />;
};

export const SettingsExpanderIndicator = () => (
  <SettingsCard.Icon
    path={chevronDown}
    class={merge(
      "size-4 transition-[transform,color]",
      "group-data-[expanded]/collapsible:[transform:rotateX(180deg)]",
    )}
  />
);

export const SettingsExpanderContent = (props: SettingsExpanderContentProps) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <Collapsible.Content
      class={merge("overflow-hidden data-[closed]:animate-collapse data-[expanded]:animate-expand", local.class)}
      {...others}
    >
      <Separator orientation="horizontal" />
      {local.children}
    </Collapsible.Content>
  );
};
