import { type RouteDefinition, type RouteSectionProps } from "@solidjs/router";
import { useMessage } from "~/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("routes.settings.heading"),
  },
} satisfies RouteDefinition;

export default (props: RouteSectionProps) => {
  return props.children;
};
