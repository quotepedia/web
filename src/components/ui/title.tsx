import * as Meta from "@solidjs/meta";
import { type ParentComponent, Show } from "solid-js";

export const Title: ParentComponent = (props) => {
  return (
    <Show when={props.children} fallback={<Meta.Title>Quotepedia</Meta.Title>}>
      <Meta.Title>{props.children}</Meta.Title>
    </Show>
  );
};
