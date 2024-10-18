import type { RouteDefinition } from "@solidjs/router";
import { RegistrationStepper } from "~/features/register";
import { createEnsureLoggedOut } from "~/shared/http";
import { useI18n } from "~/shared/i18n";

export const route = {
  preload: ({ location }) => {
    createEnsureLoggedOut(location.pathname);
  },
  info: {
    title: () => useI18n().t.routes.register.title(),
  },
} satisfies RouteDefinition;

export default function RegisterRoute() {
  return <RegistrationStepper />;
}
