import type { RouteDefinition } from "@solidjs/router";
import { ResetPasswordStepper } from "~/features/reset-password";
import { useMessage } from "~/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("routes.resetPassword.title"),
  },
} satisfies RouteDefinition;

export default () => {
  return <ResetPasswordStepper />;
};
