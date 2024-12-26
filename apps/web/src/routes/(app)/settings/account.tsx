import { type RouteDefinition, type RouteSectionProps } from "@solidjs/router";
import { useMessage } from "~/shared/i18n";
import { protect } from "~/shared/router";

export const route = {
  info: {
    title: () => useMessage("settings.account.heading"),
  },
} satisfies RouteDefinition;

export default protect((props: RouteSectionProps) => {
  return props.children;
});
