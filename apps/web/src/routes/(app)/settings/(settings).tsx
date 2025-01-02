import { Container, Heading, Stack } from "@quotepedia/solid";
import { useScopedTranslator } from "~/shared/i18n";
import { SettingsAboutSection, SettingsAccountSection, SettingsAppearanceSection } from "~/widgets/settings";

export default () => {
  const t = useScopedTranslator("settings");

  return (
    <Container size="wide" class="pt-safe-offset-12 flex flex-col gap-4 max-lg:grow">
      <Heading>{t("title")}</Heading>

      <Stack.Vertical class="gap-6">
        <SettingsAccountSection />
        <SettingsAppearanceSection />
        <SettingsAboutSection />
      </Stack.Vertical>
    </Container>
  );
};
