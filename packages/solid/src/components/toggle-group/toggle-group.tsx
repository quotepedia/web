import { Item, Root } from "@kobalte/core/toggle-group";
import { For, Show } from "solid-js";

import Group from "../group";
import type { ToggleGroupProps } from "./toggle-group.props";

import Icon from "../icon";

export const ToggleGroup = <T extends string>(props: ToggleGroupProps<T>) => {
  return (
    <Root
      as={Group}
      multiple
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={(value) => props.onChange?.(value as T[])}
      disabled={props.disabled}
      orientation="vertical"
      class={props.class}
    >
      <Show when={props.label}>{(label) => <Group.Label>{label()}</Group.Label>}</Show>
      <Group.Content>
        <For each={props.options}>
          {(item) => (
            <Item as={Group.Item} value={item.value} disabled={item.disabled} hoverable class="group">
              <Show when={item.before}>{(before) => before()}</Show>
              <Group.ItemGroup>
                <Group.ItemLabel>{item.label}</Group.ItemLabel>
                <Show when={item.description}>
                  {(description) => <Group.ItemDescription>{description()}</Group.ItemDescription>}
                </Show>
              </Group.ItemGroup>
              <Show when={item.after}>{(after) => after()}</Show>
              <Icon icon="f7:checkmark" class="size-5 text-fg-accent opacity-0 group-data-[pressed]:!opacity-100" />
            </Item>
          )}
        </For>
      </Group.Content>
      <Show when={props.description}>{(description) => <Group.Description>{description()}</Group.Description>}</Show>
    </Root>
  );
};

export default ToggleGroup;
