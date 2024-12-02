import type { RouteDefinition } from "@solidjs/router";
import { UserLoginForm } from "~/features/login";
import { useI18n } from "~/shared/i18n";

export const route = {
  info: {
    title: () => useI18n().t.routes.login.title(),
  },
} satisfies RouteDefinition;

export default () => {
  return <UserLoginForm />;
};
