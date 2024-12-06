import type { RouteDefinition } from "@solidjs/router";
import { useMessage } from "~/shared/i18n";
import { protect } from "~/shared/router";
import { AccountInfoSection, AccountSecuritySection } from "~/widgets/settings";

export const route = {
  info: {
    title: () => useMessage("routes.settings.account.heading"),
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
