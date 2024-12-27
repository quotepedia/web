import { Root } from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { Show, type ValidComponent, mergeProps, splitProps } from "solid-js";

import Icon from "@src/components/icon";

import type { ButtonRootProps } from "./button.props";
import { styles } from "./button.styles";

export const ButtonRoot = <T extends ValidComponent = "button">(props: PolymorphicProps<T, ButtonRootProps<T>>) => {
  const defaultedProps = mergeProps(
    {
      loadingIcon: "svg-spinners:90-ring-with-bg",
    },
    props,
  );

  const [styleProps, localProps, otherProps] = splitProps(
    defaultedProps,
    ["size", "shape", "spacing", "color", "style"],
    ["class", "children", "disabled", "loading", "leadingIcon", "trailingIcon"],
  );

  return (
    <Root
      class={styles().root({ class: localProps.class, ...styleProps })}
      disabled={localProps.loading || localProps.disabled}
      data-loading={localProps.loading}
      {...otherProps}
    >
      <Show when={localProps.leadingIcon}>
        {(leadingIcon) => <Icon icon={leadingIcon()} class={styles().icon(styleProps)} />}
      </Show>
      {localProps.children}
      <Show when={localProps.trailingIcon}>
        {(trailingIcon) => <Icon icon={trailingIcon()} class={styles().icon(styleProps)} />}
      </Show>
    </Root>
  );
};
