import { Stack } from "~/shared/components";
import { SettingsAboutSection, SettingsAccountSection, SettingsAppearanceSection } from "~/widgets/settings";

export default function SettingsRoute() {
  return (
    <Stack.Vertical class="gap-6">
      <SettingsAccountSection />
      <SettingsAppearanceSection />
      <SettingsAboutSection />
    </Stack.Vertical>
  );
}
