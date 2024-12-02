import type { RouteDefinition } from "@solidjs/router";
import { ResetPasswordStepper } from "~/features/reset-password";
import { useI18n } from "~/shared/i18n";

export const route = {
  info: {
    title: () => useI18n().t.routes.resetPassword.title(),
  },
} satisfies RouteDefinition;

export default () => {
  return <ResetPasswordStepper />;
};
