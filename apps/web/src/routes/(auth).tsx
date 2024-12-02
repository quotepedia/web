import type { RouteSectionProps } from "@solidjs/router";
import { guest } from "~/shared/router";

export default guest((props: RouteSectionProps) => {
  return props.children;
});
