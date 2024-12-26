import type { RouteDefinition } from "@solidjs/router";
import { UserLoginForm } from "@src/features/login";
import { useMessage } from "@src/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("routes.login.title"),
  },
} satisfies RouteDefinition;

export default () => {
  return <UserLoginForm />;
};
