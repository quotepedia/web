import { type FormStore, type SubmitHandler } from "@modular-forms/solid";
import { Heading, Lottie, Stepper, Text, toast } from "@quotepedia/solid";
import { useAction } from "@solidjs/router";
import { createSignal } from "solid-js";
import FormStepper from "~/components/form-stepper";
import { NewPasswordForm } from "~/components/NewPasswordForm";
import { type NewPasswordFormFieldValues } from "~/lib/api/users";
import { updateCurrentUserPasswordAction } from "~/lib/api/users/me";
import { useTranslator } from "~/lib/i18n";

export const UpdatePasswordStepperFormStep = () => {
  const t = useTranslator();

  const context = FormStepper.useContext();
  const stepper = Stepper.useContext();

  const updatePassword = useAction(updateCurrentUserPasswordAction);

  const [form, setForm] = createSignal<FormStore<any, any>>();

  const onSubmit: SubmitHandler<NewPasswordFormFieldValues> = async (values) => {
    const { error } = await updatePassword({ password: values.newPassword1 });

    if (error) {
      toast(String(error.detail));
    } else {
      stepper.moveForward();
    }
  };

  return (
    <Stepper.Step onEnter={() => context.setForm(form())} class="flex flex-col gap-6">
      <Lottie path="/tgs/see.json" class="size-24" />

      <hgroup class="space-y-4 text-center">
        <Heading>{t("components.changePassword.steps.password.heading")}</Heading>
        <Text>{t("components.changePassword.steps.password.description")}</Text>
      </hgroup>

      <NewPasswordForm ref={setForm} onSubmit={onSubmit} />
    </Stepper.Step>
  );
};
