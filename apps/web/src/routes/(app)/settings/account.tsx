import { type RouteDefinition, type RouteSectionProps } from "@solidjs/router";
import { useMessage } from "@src/shared/i18n";
import { protect } from "@src/shared/router";

export const route = {
  info: {
    title: () => useMessage("settings.account.heading"),
  },
} satisfies RouteDefinition;

export default protect((props: RouteSectionProps) => {
  return props.children;
});
