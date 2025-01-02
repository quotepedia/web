import { Button, Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import FormStepper from "~/components/form-stepper";
import { useTranslator } from "~/lib/i18n";

export const UpdateEmailStepperDescriptionStep = () => {
  const t = useTranslator();
  const formStepper = FormStepper.useContext();

  return (
    <Stepper.Step onEnter={() => formStepper.setForm(undefined)}>
      <Stack.Vertical class="gap-12 text-center">
        <Lottie path="/tgs/envelope.json" class="size-28" />

        <hgroup class="space-y-4 text-center">
          <Heading>{t("components.changeEmail.steps.description.heading")}</Heading>
          <Text>{t("components.changeEmail.steps.description.description")}</Text>
        </hgroup>

        <Stack.Vertical>
          <Stepper.Forward as={Button} spacing="lg" class="w-full">
            {t("continue")}
          </Stepper.Forward>
          <Button as={A} href="/settings/account" style="ghost" spacing="lg" class="w-full">
            {t("cancel")}
          </Button>
        </Stack.Vertical>

        <Text variant="muted" size="sm">
          {t("components.changeEmail.steps.description.hint")}
        </Text>
      </Stack.Vertical>
    </Stepper.Step>
  );
};
