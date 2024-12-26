import { Button, Container, Heading, Lottie, Stack, Text } from "@quotepedia/solid";
import { A, type RouteDefinition } from "@solidjs/router";
import { useMessage, useScopedTranslator } from "@src/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("routes.404.title"),
  },
} satisfies RouteDefinition;

export default function () {
  const t = useScopedTranslator("routes.404");

  return (
    <Container class="self-center">
      <Stack.Vertical class="gap-6">
        <Lottie path="/tgs/eyes.json" class="size-24" />
        <Stack.Vertical class="text-center">
          <Heading>{t("heading")}</Heading>
          <Text variant="muted">{t("description")}</Text>
        </Stack.Vertical>
        <Stack.Horizontal>
          <Button as={A} href="/" color="primary">
            {t("home")}
          </Button>
        </Stack.Horizontal>
      </Stack.Vertical>
    </Container>
  );
}
