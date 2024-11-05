import type { RouteDefinition } from "@solidjs/router";
import { ResetPasswordStepper } from "~/features/reset-password";
import { createEnsureLoggedOut } from "~/shared/http";
import { useI18n } from "~/shared/i18n";

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
