import { SettingsAboutSection, SettingsAccountSection, SettingsAppearanceSection } from "@src/widgets/settings";

export default () => {
  return (
    <div class="space-y-4 mt-2">
      <SettingsAccountSection />
      <SettingsAppearanceSection />
      <SettingsAboutSection />
    </div>
  );
};
