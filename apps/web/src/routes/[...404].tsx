import { Button, Container, Heading, Lottie, Stack, Text } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { useScopedTranslator } from "~/shared/i18n";

export default () => {
  const t = useScopedTranslator("404");

  return (
    <Container class="self-center">
      <Stack.Vertical class="gap-8">
        <Stack.Vertical class="gap-6">
          <Lottie path="/tgs/compass.json" class="size-24" />
          <Stack.Vertical class="gap-4">
            <Heading>{t("heading")}</Heading>
            <Text>{t("description")}</Text>
          </Stack.Vertical>
        </Stack.Vertical>
        <Button as={A} href="/" spacing="lg" style="bezeled" leadingIcon="f7:map-pin-ellipse">
          {t("home")}
        </Button>
      </Stack.Vertical>
    </Container>
  );
};
