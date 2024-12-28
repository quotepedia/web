import type { RouteSectionProps } from "@solidjs/router";
import { children } from "solid-js";
import { Aside } from "~/widgets/aside";

export default (props: RouteSectionProps) => {
  const c = children(() => props.children);

  return (
    <main class="relative flex w-full max-lg:flex-col-reverse">
      <Aside />
      {props.children}
    </main>
  );
};
