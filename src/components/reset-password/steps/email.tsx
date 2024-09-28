import { SubmitHandler } from "@modular-forms/solid";
import { A } from "@solidjs/router";
import { EmailFormData, RegisteredEmailForm } from "~/components/forms/email";
import { Button, Heading, LottiePresenter, Stepper } from "~/components/ui";
import { useI18n } from "~/lib/i18n";
import { useResetPassword } from "../context";

export const ResetPasswordEmailStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.resetPassword.steps.email;

  const stepper = Stepper.useContext();
  const context = useResetPassword();

  const onSubmit: SubmitHandler<EmailFormData> = (values) => {
    context.setStore("email", values.email);
    stepper.moveForward();
  };

  return (
    <Stepper.Step class="flex w-full flex-col items-stretch space-y-6">
      <LottiePresenter path="/tgs/envelope.json" class="size-24 self-center" />

      <hgroup class="space-y-4 text-center">
        <Heading>{t.heading()}</Heading>
        <p>{t.description()}</p>
      </hgroup>

      <RegisteredEmailForm onSubmit={onSubmit} />

      <Button as={A} href="/login" class="!mt-2">
        {t.login()}
      </Button>
    </Stepper.Step>
  );
};
