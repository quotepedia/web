import { SettingsAboutSection, SettingsAccountSection, SettingsAppearanceSection } from "~/widgets/settings";

export default () => {
  return (
    <div class="space-y-6">
      <SettingsAccountSection />
      <SettingsAppearanceSection />
      <SettingsAboutSection />
    </div>
  );
};
