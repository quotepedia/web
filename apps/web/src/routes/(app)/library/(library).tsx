import { Container, Heading } from "@quotepedia/solid";
import { useTranslator } from "~/lib/i18n";
import { protect } from "~/utils/router";

export default protect(() => {
  const t = useTranslator();

  return (
    <Container size="wide" class="grow pt-safe-offset-12">
      <Heading>{t("routes.library.title")}</Heading>
    </Container>
  );
});
