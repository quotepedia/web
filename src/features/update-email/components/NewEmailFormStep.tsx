import { SubmitHandler } from "@modular-forms/solid";
import { EmailFormData, UnregisteredEmailForm } from "~/entities/user/email";
import { Heading, Lottie, Stepper } from "~/shared/components";
import { useI18n } from "~/shared/i18n";
import { useUpdateEmail } from "../context";

export const NewEmailFormStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.changeEmail.steps.email;

  const stepper = Stepper.useContext();
  const context = useUpdateEmail();

  const onSubmit: SubmitHandler<EmailFormData> = (values) => {
    context.set("email", values.email);
    stepper.moveForward();
  };

  return (
    <Stepper.Step class="flex w-full flex-col space-y-6">
      <Lottie path="/tgs/envelope.json" class="size-24 self-center" />

      <hgroup class="space-y-4 text-center">
        <Heading>{t.heading()}</Heading>
        <p>{t.description()}</p>
      </hgroup>

      <UnregisteredEmailForm onSubmit={onSubmit} />
    </Stepper.Step>
  );
};
