import { Button, Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { arrowRight } from "solid-heroicons/solid-mini";
import { useScopedTranslator } from "~/shared/i18n";

export const PasswordUpdatedStep = () => {
  const t = useScopedTranslator("components.changePassword.steps.done");

  return (
    <Stepper.Step>
      <Stack.Vertical class="gap-6 text-center">
        <Lottie path="/tgs/boomstick.json" class="size-24" />

        <Stack.Vertical>
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>

          <Stack.Horizontal>
            <Text size="lg" variant="danger">
              ••••••••
            </Text>
            <Icon class="text-fg-muted size-4" path={arrowRight} />
            <Text size="lg" variant="success">
              ••••••••
            </Text>
          </Stack.Horizontal>

          <Text size="sm">{t("purpose")}</Text>

          <Text size="sm" variant="muted">
            {t("editable")}
          </Text>
        </Stack.Vertical>

        <Button as={A} href="/settings/account" color="primary" class="w-full">
          {t("close")}
        </Button>
      </Stack.Vertical>
    </Stepper.Step>
  );
};
