import type { SubmitHandler } from "@modular-forms/solid";
import { Button, Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { useScopedTranslator } from "~/shared/i18n";
import { useResetPassword } from "../context";
import { RegisteredEmailForm, type EmailFormData } from "~/entities/EmailForm";

export const EmailFormStep = () => {
  const t = useScopedTranslator("components.resetPassword.steps.email");

  const stepper = Stepper.useContext();
  const context = useResetPassword();

  const onSubmit: SubmitHandler<EmailFormData> = (values) => {
    context.set("email", values.email);
    stepper.moveForward();
  };

  return (
    <Stepper.Step>
      <Stack.Vertical class="gap-6">
        <Lottie path="/tgs/envelope.json" class="size-24" />

        <Stack.Vertical class="text-center">
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>
        </Stack.Vertical>

        <Stack.Vertical>
          <RegisteredEmailForm onSubmit={onSubmit} />
          <Button as={A} href="/login" color="secondary" class="w-full">
            {t("login")}
          </Button>
        </Stack.Vertical>
      </Stack.Vertical>
    </Stepper.Step>
  );
};
