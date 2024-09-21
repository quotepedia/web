import { splitProps, type ValidComponent } from "solid-js";

import { Polymorphic, type PolymorphicProps } from "@kobalte/core";

import { merge } from "~/lib/utils/css/merge";

import type {
  SettingsCardDescriptionProps,
  SettingsCardHeaderGroupProps,
  SettingsCardHeaderProps,
  SettingsCardProps,
  SettingsCardValueProps,
} from "./card.props";

import { styles } from "./card.styles";

export const SettingsCardRoot = <T extends ValidComponent = "div">(props: PolymorphicProps<T, SettingsCardProps>) => {
  const [local, variants, others] = splitProps(props, ["class"], ["variant"]);
  return <Polymorphic as={"div"} class={merge(styles({ ...variants }), local.class)} {...others} />;
};

export const SettingsCardHeaderGroup = <T extends ValidComponent = "hgroup">(
  props: PolymorphicProps<T, SettingsCardHeaderGroupProps>,
) => {
  const [local, others] = splitProps(props, ["class"]);
  return <Polymorphic as="hgroup" class={merge("flex-1 space-y-1.5 text-start", local.class)} {...others} />;
};

export const SettingsCardHeader = <T extends ValidComponent = "h3">(
  props: PolymorphicProps<T, SettingsCardHeaderProps>,
) => {
  const [local, others] = splitProps(props, ["class"]);
  return <Polymorphic as="h3" class={merge("font-semibold leading-none", local.class)} {...others} />;
};

export const SettingsCardDescription = <T extends ValidComponent = "p">(
  props: PolymorphicProps<T, SettingsCardDescriptionProps>,
) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <Polymorphic
      as="p"
      class={merge("text-xs text-fg-muted max-md:hidden max-md:leading-none", local.class)}
      {...others}
    />
  );
};

export const SettingsCardValue = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, SettingsCardValueProps>,
) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <Polymorphic
      as="span"
      class={merge(
        "text-xs text-fg-muted max-md:leading-none",
        "transition-[opacity,color] group-data-[expanded]/collapsible:opacity-0",
        local.class,
      )}
      {...others}
    />
  );
};
