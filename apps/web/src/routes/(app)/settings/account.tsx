import type { RouteDefinition } from "@solidjs/router";
import { useI18n } from "~/shared/i18n";
import { protect } from "~/shared/router";
import { AccountInfoSection, AccountSecuritySection } from "~/widgets/account";

export const route = {
  info: {
    title: () => useI18n().t.routes.settings.account.heading(),
  },
} satisfies RouteDefinition;

export default protect(() => {
  return (
    <div class="space-y-6">
      <AccountInfoSection />
      <AccountSecuritySection />
    </div>
  );
});
