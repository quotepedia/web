import { Show, splitProps } from "solid-js";

import { TextField } from "~/components";

import { TextFieldProps } from "./form-control.props";

export function FormControl(props: TextFieldProps) {
  const [rootProps, inputProps] = splitProps(
    props,
    ["name", "value", "required", "disabled"],
    ["placeholder", "ref", "onInput", "onChange", "onBlur"],
  );

  return (
    <TextField {...rootProps} validationState={props.error ? "invalid" : "valid"}>
      <Show when={props.label}>
        <TextField.Label classList={{ "after:content-['*'] after:text-red-600": props.required }} class="flex gap-1">
          {props.label}
        </TextField.Label>
      </Show>
      <TextField.InputWrapper>
        <Show when={props.multiline} fallback={<TextField.Input {...inputProps} type={props.type} />}>
          <TextField.TextArea {...inputProps} autoResize />
        </Show>
      </TextField.InputWrapper>
      <Show when={props.description}>
        {(description) => <TextField.Description>{description()}</TextField.Description>}
      </Show>
      <TextField.ErrorMessage>{props.error}</TextField.ErrorMessage>
    </TextField>
  );
}
