import type { RouteDefinition } from "@solidjs/router";
import { ResetPasswordStepper } from "@src/features/reset-password";
import { useMessage } from "@src/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("routes.resetPassword.title"),
  },
} satisfies RouteDefinition;

export default () => {
  return <ResetPasswordStepper />;
};
