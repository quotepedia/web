import { SubmitHandler } from "@modular-forms/solid";
import { EmailFormData, UnregisteredEmailForm } from "~/components/forms/email";
import { Heading, Lottie, Stepper } from "~/components/ui";
import { useI18n } from "~/lib/i18n";
import { useChangeEmail } from "../context";

export const ChangeEmailEmailStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.changeEmail.steps.email;

  const stepper = Stepper.useContext();
  const context = useChangeEmail();

  const onSubmit: SubmitHandler<EmailFormData> = (values) => {
    context.setStore("email", values.email);
    stepper.moveForward();
  };

  return (
    <Stepper.Step class="flex w-full flex-col items-stretch space-y-6">
      <Lottie path="/tgs/envelope.json" class="size-24 self-center" />

      <hgroup class="space-y-4 text-center">
        <Heading>{t.heading()}</Heading>
        <p>{t.description()}</p>
      </hgroup>

      <UnregisteredEmailForm onSubmit={onSubmit} />
    </Stepper.Step>
  );
};
