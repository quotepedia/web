import { Container, Heading } from "@quotepedia/solid";
import { useTranslator } from "~/shared/i18n";
import { protect } from "~/shared/router";

export default protect(() => {
  const t = useTranslator();

  return (
    <Container size="wide" class="grow pt-safe-offset-12">
      <Heading>{t("routes.library.title")}</Heading>
    </Container>
  );
});
