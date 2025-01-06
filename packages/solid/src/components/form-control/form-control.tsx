import { mergeRefs } from "@corvu/utils/reactivity";
import { createEffect, createSignal, mergeProps, Show, splitProps } from "solid-js";
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
    ["ref", "readonly", "value"],
    ["name", "required", "disabled", "class", "title"],
    ["placeholder", "onInput", "onChange", "onBlur", "onKeyDown", "type"],
  );

  const [ref, setRef] = createSignal<HTMLInputElement | HTMLTextAreaElement>();
  const [value, setValue] = createSignal(localProps.value);

  const clear = () => {
    setValue("");

    ref()?.dispatchEvent(new Event("input", { bubbles: true }));
    ref()?.dispatchEvent(new Event("change", { bubbles: true }));
  };

  createEffect(() => {
    setValue(localProps.value);
  });

  return (
    <TextField
      value={value()}
      onChange={setValue}
      validationState={defaultedProps.error ? "invalid" : "valid"}
      readOnly={localProps.readonly}
      {...rootProps}
    >
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
          fallback={<TextField.Input ref={mergeRefs(setRef, localProps.ref)} {...inputProps} />}
        >
          <TextField.TextArea ref={mergeRefs(setRef, localProps.ref)} autoResize {...inputProps} />
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
