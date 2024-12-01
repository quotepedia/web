import type { RouteDefinition } from "@solidjs/router";
import { ResetPasswordStepper } from "~/features/reset-password";
import { getIsLoggedIn } from "~/shared/http";
import { useI18n } from "~/shared/i18n";
import { guest } from "~/shared/router";

export const route = {
  preload: () => {
    getIsLoggedIn();
  },
  info: {
    title: () => useI18n().t.routes.resetPassword.title(),
  },
} satisfies RouteDefinition;

export default guest(() => {
  return <ResetPasswordStepper />;
});
