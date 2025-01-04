import { callEventHandler } from "@corvu/utils/dom";
import { mergeRefs } from "@corvu/utils/reactivity";
import { createAutofocus } from "@src/utils/autofocus";
import { createEffect, createSignal, mergeProps, Show, splitProps, type JSX } from "solid-js";
import { Transition } from "solid-transition-group";
import { Button } from "../button";
import Icon from "../icon";
import { TextField } from "../text-field";
import { Collapse, Fade } from "../transition";
import type { TextFieldProps } from "./form-control.props";
import { styles } from "./form-control.styles";

export function FormControl(props: TextFieldProps) {
  const defaultedProps = mergeProps(
    {
      type: "text",
      icon: props.type === "search" ? "f7:search" : undefined,
      clearable: props.type === "search",
    } satisfies Partial<TextFieldProps>,
    props,
  );

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
    if (defaultedProps.autofocus === true) {
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
        <Show when={defaultedProps.icon || defaultedProps.loading}>
          <div class="text-fg-muted relative -me-1 ms-1.5 inline-flex size-5 items-center justify-center">
            <Transition
              exitActiveClass="transition duration-300 ease-in-out absolute"
              enterActiveClass="transition duration-500 ease-spring absolute"
              exitToClass="scale-50 opacity-0"
              enterClass="scale-0 opacity-0"
            >
              <Show when={defaultedProps.icon && !defaultedProps.loading}>
                <Icon icon={defaultedProps.icon!} />
              </Show>
              <Show when={defaultedProps.loading}>
                <Icon icon="svg-spinners:ring-resize" class="size-5" />
              </Show>
            </Transition>
          </div>
        </Show>
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
          <Show when={defaultedProps.clearable && !defaultedProps.disabled && value()}>
            <Button onClick={clear} style="ghost" color="secondary" class="text-fg-muted">
              <Icon icon="f7:xmark-circle-fill" class="size-5" />
            </Button>
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
