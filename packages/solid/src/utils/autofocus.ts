import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { createEffect, type Accessor } from "solid-js";

export function createAutofocus(el: Accessor<HTMLElement | undefined>) {
  const visible = createVisibilityObserver()(el);

  createEffect(() => {
    visible() && el()?.focus();
  });
}
