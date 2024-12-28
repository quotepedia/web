import { Button, Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import FormStepper from "~/entities/form-stepper";
import { useTranslator } from "~/shared/i18n";

export const UpdatePasswordStepperDescriptionStep = () => {
  const context = FormStepper.useContext();
  const t = useTranslator();

  return (
    <Stepper.Step onEnter={() => context.setForm(undefined)}>
      <Stack.Vertical class="gap-6 text-center">
        <Lottie path="/tgs/key.json" class="size-24" />

        <hgroup class="space-y-4 text-center">
          <Heading>{t("components.changePassword.steps.description.heading")}</Heading>
          <Text>{t("components.changePassword.steps.description.description")}</Text>
        </hgroup>

        <Text variant="muted">{t("components.changePassword.steps.description.hint")}</Text>

        <Stepper.Forward as={Button} class="w-full">
          {t("continue")}
        </Stepper.Forward>
      </Stack.Vertical>
    </Stepper.Step>
  );
};
