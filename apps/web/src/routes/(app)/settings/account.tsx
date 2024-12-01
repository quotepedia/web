import { Stack } from "@quotepedia/solid";
import type { RouteDefinition } from "@solidjs/router";
import { getCurrentUser } from "~/entities/user";
import { getIsLoggedIn } from "~/shared/http";
import { useI18n } from "~/shared/i18n";
import { protect } from "~/shared/router";
import { AccountInfoSection, AccountSecuritySection } from "~/widgets/account";

export const route = {
  preload: () => {
    getIsLoggedIn();
    getCurrentUser();
  },
  info: {
    title: () => useI18n().t.routes.settings.account.heading(),
  },
} satisfies RouteDefinition;

export default protect(() => {
  return (
    <Stack.Vertical class="gap-6">
      <AccountInfoSection />
      <AccountSecuritySection />
    </Stack.Vertical>
  );
});
