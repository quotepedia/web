import { A, type RouteDefinition } from "@solidjs/router";
import { LocaleSwitcher } from "~/features/change-locale";
import { Button, Container, Heading, Lottie, Stack, Text } from "~/shared/components";
import { useI18n } from "~/shared/i18n";

const useTranslator = () => useI18n().t.routes[404];

export const route = {
  info: {
    title: () => useTranslator().title(),
  },
} satisfies RouteDefinition;

export default function Page() {
  const t = useTranslator();

  return (
    <Container class="self-center">
      <Stack.Vertical class="gap-6">
        <Lottie path="/tgs/eyes.json" class="size-24" />
        <Stack.Vertical class="text-center">
          <Heading>{t.heading()}</Heading>
          <Text variant="muted">{t.description()}</Text>
        </Stack.Vertical>
        <Stack.Horizontal>
          <LocaleSwitcher />
          <Button as={A} href="/" color="primary">
            {t.home()}
          </Button>
        </Stack.Horizontal>
      </Stack.Vertical>
    </Container>
  );
}
