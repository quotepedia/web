import type { FormStore } from "@modular-forms/solid";
import { Collapse, Text } from "@quotepedia/solid";
import { Show } from "solid-js";

export type FormResponseProps = {
  of: FormStore<any, any>;
};

export const FormResponse = (props: FormResponseProps) => {
  return (
    <Collapse>
      <Show when={props.of.response.status === "error" && props.of.response.message}>
        {(message) => (
          <Text size="sm" variant="danger">
            {message()}
          </Text>
        )}
      </Show>
    </Collapse>
  );
};
