import { callEventHandler } from "@corvu/utils/dom";
import { mergeRefs } from "@corvu/utils/reactivity";
import { Button } from "@kobalte/core/button";
import { createAutofocus } from "@src/utils/autofocus";
import { Icon } from "@src/index";
import { createEffect, createSignal, mergeProps, Show, splitProps, type JSX } from "solid-js";
import { TextField } from "../text-field";
import { Collapse, Fade } from "../transition";
import type { TextFieldProps } from "./form-control.props";
import { styles } from "./form-control.styles";

export function FormControl(props: TextFieldProps) {
  const defaultedProps = mergeProps({ type: "text" } satisfies Partial<TextFieldProps>, props);

  const [localProps, rootProps, inputProps] = splitProps(
    defaultedProps,
    ["ref", "onInput"],
    ["name", "value", "required", "disabled"],
    ["placeholder", "onChange", "onBlur", "type"],
  );

  const [ref, setRef] = createSignal<HTMLInputElement | HTMLTextAreaElement>();
  const [value, setValue] = createSignal(defaultedProps.value);

  const onInput: JSX.EventHandlerUnion<HTMLInputElement | HTMLTextAreaElement, InputEvent> = (event) => {
    !callEventHandler(localProps.onInput, event) && setValue(event.currentTarget.value);
  };

  const clear = () => {
    setValue("");
    ref()?.dispatchEvent(new Event("input", { bubbles: true }));
    ref()?.dispatchEvent(new Event("change", { bubbles: true }));
    ref()?.focus();
  };

  createEffect(() => {
    if (defaultedProps.autofocus) {
      createAutofocus(ref);
    }
  });

  return (
    <TextField {...rootProps} validationState={defaultedProps.error ? "invalid" : "valid"}>
      <Show when={defaultedProps.label}>
        <TextField.Label class={styles().label({ required: defaultedProps.required })}>
          {defaultedProps.label}
        </TextField.Label>
      </Show>
      <TextField.Wrapper>
        <Show
          when={defaultedProps.multiline}
          fallback={
            <TextField.Input
              ref={mergeRefs(setRef, localProps.ref)}
              value={value()}
              onInput={onInput}
              {...inputProps}
            />
          }
        >
          <TextField.TextArea
            ref={mergeRefs(setRef, localProps.ref)}
            value={value()}
            onInput={onInput}
            autoResize
            {...inputProps}
          />
        </Show>
        <Fade>
          <Show when={!defaultedProps.disabled && value()}>
            <div class="flex">
              <Show when={defaultedProps.clearable}>
                <Button onClick={clear} class={styles().button()}>
                  <Icon icon="f7:xmark-circle-fill" class="size-4" />
                </Button>
              </Show>
            </div>
          </Show>
        </Fade>
      </TextField.Wrapper>
      <Show when={defaultedProps.description}>
        {(description) => <TextField.Description>{description()}</TextField.Description>}
      </Show>
      <Collapse>
        <TextField.ErrorMessage>{defaultedProps.error}</TextField.ErrorMessage>
      </Collapse>
    </TextField>
  );
}
