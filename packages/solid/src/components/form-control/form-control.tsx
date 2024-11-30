import { Show, splitProps } from "solid-js";

import { TextField } from "../text-field";

import type { TextFieldProps } from "./form-control.props";
import { Collapse } from "../transition";

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
      <TextField.Wrapper>
        <Show when={props.multiline} fallback={<TextField.Input {...inputProps} type={props.type} />}>
          <TextField.TextArea {...inputProps} autoResize />
        </Show>
      </TextField.Wrapper>
      <Show when={props.description}>
        {(description) => <TextField.Description>{description()}</TextField.Description>}
      </Show>
      <Collapse>
        <TextField.ErrorMessage>{props.error}</TextField.ErrorMessage>
      </Collapse>
    </TextField>
  );
}
