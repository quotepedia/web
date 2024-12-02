import type { RouteSectionProps } from "@solidjs/router";
import { Transition } from "solid-transition-group";
import { guest } from "~/shared/router";

export default guest((props: RouteSectionProps) => {
  return (
    <Transition
      enterActiveClass="transition-opacity duration-150 absolute left-0 right-0 top-auto bottom-auto"
      enterClass="opacity-0"
      exitActiveClass="transition-opacity duration-150 absolute left-0 right-0 top-auto bottom-auto"
      exitToClass="opacity-0"
    >
      {props.children}
    </Transition>
  );
});
