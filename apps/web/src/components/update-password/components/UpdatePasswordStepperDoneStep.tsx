import { Button, Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import FormStepper from "~/components/form-stepper";
import { useScopedTranslator } from "~/lib/i18n";

export const UpdatePasswordStepperDoneStep = () => {
  const t = useScopedTranslator("components.changePassword.steps.done");
  const context = FormStepper.useContext();

  return (
    <Stepper.Step onEnter={() => context.setForm(undefined)}>
      <Stack.Vertical class="gap-6 text-center">
        <Lottie path="/tgs/boomstick.json" class="size-24" />

        <hgroup class="space-y-4 text-center">
          <Heading>{t("heading")}</Heading>
          <Text>
            {t("description")} {t("purpose")}
          </Text>
        </hgroup>

        <Text variant="muted">{t("editable")}</Text>

        <Button as={A} href="/settings/account" class="w-full">
          {t("close")}
        </Button>
      </Stack.Vertical>
    </Stepper.Step>
  );
};
