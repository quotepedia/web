import { Button, Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import FormStepper from "~/entities/form-stepper";
import { useScopedTranslator } from "~/shared/i18n";

export const UpdateEmailStepperDoneStep = () => {
  const t = useScopedTranslator("components.changeEmail.steps.done");
  const formStepper = FormStepper.useContext();

  return (
    <Stepper.Step onEnter={() => formStepper.setForm(undefined)}>
      <Stack.Vertical class="gap-6 text-center">
        <Lottie path="/tgs/boomstick.json" class="size-24" />

        <Stack.Vertical>
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>

          <Text size="sm">{t("purpose")}</Text>

          <Text size="sm" variant="muted">
            {t("editable")}
          </Text>
        </Stack.Vertical>

        <Button as={A} href="/settings/account" class="w-full">
          {t("close")}
        </Button>
      </Stack.Vertical>
    </Stepper.Step>
  );
};
