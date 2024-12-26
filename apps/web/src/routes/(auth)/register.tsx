import type { RouteDefinition } from "@solidjs/router";
import { RegistrationStepper } from "@src/features/register";
import { useMessage } from "@src/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("routes.register.title"),
  },
} satisfies RouteDefinition;

export default () => {
  return <RegistrationStepper />;
};
