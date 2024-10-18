import type { RouteDefinition } from "@solidjs/router";
import { getCurrentUser } from "~/shared/api/users/me";
import { createEnsureLoggedIn } from "~/shared/http";
import { useI18n } from "~/shared/i18n";
import { AccountInfoSection, AccountSecuritySection } from "~/widgets/account";

export const route = {
  preload: ({ location }) => {
    createEnsureLoggedIn(location.pathname);
    getCurrentUser();
  },
  info: {
    title: () => useI18n().t.routes.settings.account.heading(),
  },
} satisfies RouteDefinition;

export default function AccountRoute() {
  return (
    <div class="space-y-6">
      <AccountInfoSection />
      <AccountSecuritySection />
    </div>
  );
}
