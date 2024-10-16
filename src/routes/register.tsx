import type { RouteDefinition } from "@solidjs/router";
import { RegistrationStepper } from "~/components/registration/stepper";
import { createEnsureLoggedOut } from "~/lib/http";
import { useI18n } from "~/lib/i18n";

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
