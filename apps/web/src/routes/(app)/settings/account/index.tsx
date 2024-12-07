import { protect } from "~/shared/router";
import { AccountInfoSection, AccountSecuritySection } from "~/widgets/settings";

export default protect(() => {
  return (
    <div class="space-y-6">
      <AccountInfoSection />
      <AccountSecuritySection />
    </div>
  );
});
