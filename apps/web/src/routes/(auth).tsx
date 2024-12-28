import type { RouteSectionProps } from "@solidjs/router";
import { children } from "solid-js";
import { Transition } from "solid-transition-group";
import { guest } from "~/shared/router";

export default guest((props: RouteSectionProps) => {
  const c = children(() => props.children);

  return (
    <div class="relative flex grow flex-col items-center justify-center">
      <Transition
        enterClass="opacity-0"
        enterToClass="opacity-1"
        enterActiveClass="transition absolute duration-300"
        exitClass="opacity-1"
        exitToClass="opacity-0"
        exitActiveClass="transition absolute duration-300"
      >
        {c()}
      </Transition>
    </div>
  );
});
