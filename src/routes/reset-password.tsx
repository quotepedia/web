import type { RouteDefinition } from "@solidjs/router";
import { ResetPasswordStepper } from "~/components/reset-password/stepper";
import { createEnsureLoggedOut } from "~/lib/http";
import { useI18n } from "~/lib/i18n";

export const route = {
  preload: ({ location }) => {
    createEnsureLoggedOut(location.pathname);
  },
  info: {
    title: () => useI18n().t.routes.resetPassword.title(),
  },
} satisfies RouteDefinition;

export default function ResetPasswordRoute() {
  return <ResetPasswordStepper />;
}
