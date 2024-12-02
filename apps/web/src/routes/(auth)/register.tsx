import type { RouteDefinition } from "@solidjs/router";
import { RegistrationStepper } from "~/features/register";
import { useI18n } from "~/shared/i18n";

export const route = {
  info: {
    title: () => useI18n().t.routes.register.title(),
  },
} satisfies RouteDefinition;

export default () => {
  return <RegistrationStepper />;
};
