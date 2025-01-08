import { Container, Heading, Stack } from "@quotepedia/solid";
import {
  SettingsAboutSection,
  SettingsAccessibilitySection,
  SettingsAccountSection,
  SettingsAppearanceSection,
} from "~/components/settings";
import { useScopedTranslator } from "~/lib/i18n";

export default () => {
  const t = useScopedTranslator("settings");

  return (
    <Container size="wide" class="pt-safe-offset-12 flex flex-col gap-4 pb-12 max-lg:grow">
      <Heading>{t("title")}</Heading>

      <Stack.Vertical class="gap-6">
        <SettingsAccountSection />
        <SettingsAppearanceSection />
        <SettingsAccessibilitySection />
        <SettingsAboutSection />
      </Stack.Vertical>
    </Container>
  );
};
