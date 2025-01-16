import type { RouteSectionProps } from "@solidjs/router";
import { guest } from "~/hoc/session";

export default guest((props: RouteSectionProps) => {
  return props.children;
});
