import type { RouteSectionProps } from "@solidjs/router";
import { guest } from "~/shared/utils/router";

export default guest((props: RouteSectionProps) => {
  return props.children;
});
