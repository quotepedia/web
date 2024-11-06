import type { RouteDefinition } from "@solidjs/router";
import { UserLoginForm } from "~/features/login";
import { createEnsureLoggedOut } from "~/shared/http";
import { useI18n } from "~/shared/i18n";

export const route = {
  preload: ({ location }) => {
    createEnsureLoggedOut(location.pathname);
  },
  info: {
    title: () => useI18n().t.routes.login.title(),
  },
} satisfies RouteDefinition;

export default function LoginRoute() {
  return <UserLoginForm />;
}
