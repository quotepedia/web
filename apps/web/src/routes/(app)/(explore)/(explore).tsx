import { Container, Heading } from "@quotepedia/solid";
import { useTranslator } from "~/lib/i18n";

export default () => {
  const t = useTranslator();

  return (
    <Container size="wide" class="grow pt-safe-offset-12">
      <Heading>{t("routes.explore.title")}</Heading>
    </Container>
  );
};
