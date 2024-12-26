import { type RouteDefinition, type RouteSectionProps } from "@solidjs/router";
import { useMessage } from "@src/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("settings.title"),
  },
} satisfies RouteDefinition;

export default (props: RouteSectionProps) => {
  return props.children;
};
