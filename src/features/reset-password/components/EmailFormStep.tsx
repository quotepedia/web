import { SubmitHandler } from "@modular-forms/solid";
import { A } from "@solidjs/router";
import { EmailFormData, RegisteredEmailForm } from "~/entities/user/email";
import { Button, Heading, Lottie, Stack, Stepper, Text } from "~/shared/components";
import { useI18n } from "~/shared/i18n";
import { useResetPassword } from "../context";

export const EmailFormStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.resetPassword.steps.email;

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
          <Heading>{t.heading()}</Heading>
          <Text>{t.description()}</Text>
        </Stack.Vertical>

        <Stack.Vertical>
          <RegisteredEmailForm onSubmit={onSubmit} />
          <Button as={A} href="/login" class="w-full">
            {t.login()}
          </Button>
        </Stack.Vertical>
      </Stack.Vertical>
    </Stepper.Step>
  );
};
