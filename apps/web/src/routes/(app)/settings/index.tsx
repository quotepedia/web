import { Stack } from "@quotepedia/solid";
import { SettingsAboutSection, SettingsAccountSection, SettingsAppearanceSection } from "~/widgets/settings";

export default function () {
  return (
    <Stack.Vertical class="gap-6">
      <SettingsAccountSection />
      <SettingsAppearanceSection />
      <SettingsAboutSection />
    </Stack.Vertical>
  );
}
