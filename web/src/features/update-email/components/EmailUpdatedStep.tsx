import { Button, Dialog, Heading, Stack, Stepper, Text } from "@quotepedia/solid";
import { Icon } from "solid-heroicons";
import { arrowRight } from "solid-heroicons/solid-mini";
import { Lottie } from "@quotepedia/solid";
import { useI18n } from "~/shared/i18n";
import { useUpdateEmail } from "../context";

export const EmailUpdatedStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.changeEmail.steps.done;

  const context = useUpdateEmail();

  return (
    <Stepper.Step>
      <Stack.Vertical class="gap-6 text-center">
        <Lottie path="/tgs/boomstick.json" class="size-24" />

        <Stack.Vertical>
          <Heading>{t.heading()}</Heading>
          <Text>{t.description()}</Text>

          <Stack.Horizontal>
            <Text size="sm" variant="danger">
              {context.store.previousEmail}
            </Text>
            <Icon class="text-fg-muted size-3.5" path={arrowRight} />
            <Text size="sm" variant="success">
              {context.store.email}
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
