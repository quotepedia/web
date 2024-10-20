import { Icon } from "solid-heroicons";
import { arrowRight } from "solid-heroicons/solid-mini";
import { Button, Dialog, Heading, Lottie, Stack, Stepper, Text } from "~/shared/components";
import { useI18n } from "~/shared/i18n";

export const PasswordUpdatedStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.changePassword.steps.done;

  return (
    <Stepper.Step>
      <Stack.Vertical class="gap-6 text-center">
        <Lottie path="/tgs/boomstick.json" class="size-24" />

        <Stack.Vertical>
          <Heading>{t.heading()}</Heading>
          <Text>{t.description()}</Text>

          <Stack.Horizontal>
            <Text size="lg" variant="danger">
              ••••••••
            </Text>
            <Icon class="size-4 text-fg-muted" path={arrowRight} />
            <Text size="lg" variant="success">
              ••••••••
            </Text>
          </Stack.Horizontal>

          <Text size="sm">{t.purpose()}</Text>

          <Text size="sm" variant="muted">
            {t.editable()}
          </Text>
        </Stack.Vertical>

        <Dialog.Close as={Button} color="primary" class="w-full">
          {t.close()}
        </Dialog.Close>
      </Stack.Vertical>
    </Stepper.Step>
  );
};
