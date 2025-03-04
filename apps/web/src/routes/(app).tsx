import type { RouteSectionProps } from "@solidjs/router";
import { Aside } from "~/components/aside";

export default (props: RouteSectionProps) => {
  return (
    <main class="relative flex w-full max-lg:flex-col-reverse">
      <Aside />
      {props.children}
    </main>
  );
};
