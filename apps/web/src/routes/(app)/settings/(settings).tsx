import { Container, Heading } from "@quotepedia/solid";
import { useScopedTranslator } from "~/shared/i18n";
import { SettingsAboutSection, SettingsAccountSection, SettingsAppearanceSection } from "~/widgets/settings";

export default () => {
  const t = useScopedTranslator("settings");

  return (
    <Container size="wide" class="flex flex-col space-y-6 max-lg:grow pt-safe-offset-12">
      <Heading>{t("title")}</Heading>

      <SettingsAccountSection />
      <SettingsAppearanceSection />
      <SettingsAboutSection />
    </Container>
  );
};
