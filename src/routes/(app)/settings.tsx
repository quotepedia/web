import { type RouteDefinition, type RouteSectionProps } from "@solidjs/router";
import { useI18n } from "~/shared/i18n";

export const route = {
  info: {
    title: () => useI18n().t.routes.settings.heading(),
  },
} satisfies RouteDefinition;

export default function SettingsRouteSection(props: RouteSectionProps) {
  return props.children;
}
