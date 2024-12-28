import { Container, Heading } from "@quotepedia/solid";
import { useScopedTranslator } from "~/shared/i18n";
import { SettingsAboutSection, SettingsAccountSection, SettingsAppearanceSection } from "~/widgets/settings";

export default () => {
  const t = useScopedTranslator("settings");

  // TODO: move to component
  return (
    <Container size="wide" class="flex flex-col space-y-4 max-lg:grow">
      <Heading>{t("title")}</Heading>

      <SettingsAccountSection />
      <SettingsAppearanceSection />
      <SettingsAboutSection />
    </Container>
  );
};
