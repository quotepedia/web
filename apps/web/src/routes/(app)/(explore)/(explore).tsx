import { Container, Heading } from "@quotepedia/solid";
import { useTranslator } from "~/shared/i18n";

export default () => {
  const t = useTranslator();

  return (
    <Container size="wide" class="grow">
      <Heading>{t("routes.explore.title")}</Heading>
    </Container>
  );
};
