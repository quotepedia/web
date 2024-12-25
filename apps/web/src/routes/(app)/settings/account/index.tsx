import { AccountInfoSection, AccountSecuritySection } from "~/widgets/settings";

export default () => {
  return (
    <div class="space-y-6">
      <AccountInfoSection />
      <AccountSecuritySection />
    </div>
  );
};
