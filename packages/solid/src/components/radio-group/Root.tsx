import { access, type MaybeAccessor } from "@corvu/utils/reactivity";
import {
  Description,
  Item,
  ItemControl,
  ItemDescription,
  ItemIndicator,
  ItemInput,
  ItemLabel,
  Label,
  Root,
} from "@kobalte/core/radio-group";
import { For, Show, type JSX } from "solid-js";
import Group from "../group";
import Icon from "../icon";
import { Fade } from "../transition";

export type RadioGroupRootItemProps = {
  value: string;
  icon?: MaybeAccessor<JSX.Element>;
  label: MaybeAccessor<JSX.Element>;
  description?: MaybeAccessor<JSX.Element>;
};

export type RadioGroupRootProps<T extends string> = {
  label?: MaybeAccessor<JSX.Element>;
  description?: MaybeAccessor<JSX.Element>;
  disabled?: boolean;
  value?: T;
  onChange?: (value: T) => void;
  items: RadioGroupRootItemProps[];
};

export const RadioGroup = <T extends string>(props: RadioGroupRootProps<T>) => {
  return (
    <Root
      as={Group}
      value={props.value}
      onChange={(value) => props.onChange?.(value as T)}
      disabled={props.disabled}
      orientation="vertical"
    >
      <Show when={props.label}>
        {(label) => (
          <Label as={Group.Label} class="text-fg-muted select-none px-3 text-sm uppercase">
            {access(label())}
          </Label>
        )}
      </Show>
      <Group.Content>
        <For each={props.items}>
          {(item) => (
            <Item value={item.value} class="transition">
              <ItemInput />
              <Group.Item as={ItemControl} hoverable>
                <Show when={item.icon}>
                  {(icon) => (
                    <Show when={typeof access(icon()) === "string"} fallback={access(icon())}>
                      <Group.ItemIcon icon={access(icon()) as string} />
                    </Show>
                  )}
                </Show>
                <Group.ItemGroup>
                  <ItemLabel as={Group.ItemLabel} class="capitalize">
                    {item.label}
                  </ItemLabel>
                  <Show when={item.description}>
                    {(description) => (
                      <ItemDescription as={Group.ItemDescription} class="capitalize">
                        {access(description())}
                      </ItemDescription>
                    )}
                  </Show>
                </Group.ItemGroup>
                <Fade>
                  <ItemIndicator as={Icon} icon="f7:checkmark" class="text-fg-accent size-5 stroke-current" />
                </Fade>
              </Group.Item>
            </Item>
          )}
        </For>
      </Group.Content>
      <Show when={props.description}>
        {(description) => <Description as={Group.Description}>{access(description())}</Description>}
      </Show>
    </Root>
  );
};

export default RadioGroup;
