import { RadioGroup as RadioGroupBase } from "@kobalte/core/radio-group";
import { Fade, Icon, SettingsCard, SettingsGroup } from "@quotepedia/solid";
import { access, type MaybeAccessor } from "@solid-primitives/utils";
import { For, Show, type JSX } from "solid-js";

export const RadioGroup = (props: {
  label?: MaybeAccessor<JSX.Element>;
  description?: MaybeAccessor<JSX.Element>;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  items: {
    value: string;
    icon?: MaybeAccessor<JSX.Element>;
    label: MaybeAccessor<JSX.Element>;
    description?: MaybeAccessor<JSX.Element>;
  }[];
}) => {
  return (
    <RadioGroupBase
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
      orientation="vertical"
      class="space-y-1.5"
    >
      <Show when={props.label}>
        {(label) => (
          <RadioGroupBase.Label class="text-fg-muted select-none px-3 text-sm uppercase">
            {access(label())}
          </RadioGroupBase.Label>
        )}
      </Show>
      <SettingsGroup>
        <For each={props.items}>
          {(item) => (
            <RadioGroupBase.Item value={item.value} class="transition">
              <RadioGroupBase.ItemInput />
              <SettingsCard as={RadioGroupBase.ItemControl} variant="hover">
                <Show when={item.icon}>
                  {(icon) => (
                    <Show when={typeof access(icon()) === "string"} fallback={access(icon())}>
                      <Icon icon={access(icon()) as string} class="text-fg-accent size-6" />
                    </Show>
                  )}
                </Show>
                <SettingsCard.HeaderGroup>
                  <RadioGroupBase.ItemLabel as={SettingsCard.Header} class="capitalize">
                    {item.label}
                  </RadioGroupBase.ItemLabel>
                  <Show when={item.description}>
                    {(description) => (
                      <RadioGroupBase.ItemDescription as={SettingsCard.Description} class="capitalize">
                        {access(description())}
                      </RadioGroupBase.ItemDescription>
                    )}
                  </Show>
                </SettingsCard.HeaderGroup>
                <Fade>
                  <RadioGroupBase.ItemIndicator
                    as={Icon}
                    icon="f7:checkmark"
                    class="text-fg-accent size-5 stroke-current"
                  />
                </Fade>
              </SettingsCard>
            </RadioGroupBase.Item>
          )}
        </For>
      </SettingsGroup>
      <Show when={props.description}>
        {(description) => (
          <RadioGroupBase.Description class="text-fg-muted select-none px-3 text-sm">
            {access(description())}
          </RadioGroupBase.Description>
        )}
      </Show>
    </RadioGroupBase>
  );
};
