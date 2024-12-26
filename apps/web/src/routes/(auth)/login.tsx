import type { RouteDefinition } from "@solidjs/router";
import { UserLoginForm } from "~/features/login";
import { useMessage } from "~/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("routes.login.title"),
  },
} satisfies RouteDefinition;

export default () => {
  return <UserLoginForm />;
};
