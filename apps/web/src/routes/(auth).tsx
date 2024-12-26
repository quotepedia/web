import type { RouteSectionProps } from "@solidjs/router";
import { guest } from "@src/shared/router";

export default guest((props: RouteSectionProps) => {
  return props.children;
});
