import type { RouteSectionProps } from "@solidjs/router";
import { children } from "solid-js";
import { Transition } from "solid-transition-group";
import { Aside } from "~/widgets/aside";

export default (props: RouteSectionProps) => {
  const c = children(() => props.children);

  return (
    <main class="relative flex w-full max-lg:flex-col-reverse">
      <Aside />

      <div class="relative flex grow flex-col items-center">
        <Transition
          enterClass="opacity-0"
          enterToClass="opacity-1 scale-100"
          enterActiveClass="transition absolute duration-300"
          exitClass="opacity-1 scale-100"
          exitToClass="opacity-0"
          exitActiveClass="transition absolute duration-300"
        >
          {c()}
        </Transition>
      </div>
    </main>
  );
};
