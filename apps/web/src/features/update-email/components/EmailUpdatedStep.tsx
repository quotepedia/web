import { Button, Heading, Lottie, Stack, Stepper, Text, Icon } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { useScopedTranslator } from "~/shared/i18n";
import { useUpdateEmail } from "../context";

export const EmailUpdatedStep = () => {
  const t = useScopedTranslator("components.changeEmail.steps.done");

  const context = useUpdateEmail();

  return (
    <Stepper.Step>
      <Stack.Vertical class="gap-6 text-center">
        <Lottie path="/tgs/boomstick.json" class="size-24" />

        <Stack.Vertical>
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>

          <Stack.Horizontal>
            <Text size="sm" variant="danger">
              {context.store.previousEmail}
            </Text>
            <Icon icon="heroicons:arrow-right-16-solid" class="text-fg-muted size-3.5" />
            <Text size="sm" variant="success">
              {context.store.email}
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
