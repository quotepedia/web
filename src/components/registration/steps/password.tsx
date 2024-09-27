import { SubmitHandler } from "@modular-forms/solid";
import { useAction } from "@solidjs/router";
import { toast } from "solid-sonner";
import { PasswordForm, PasswordFormData } from "~/components/forms/password";
import { Heading, LottiePresenter, Stepper } from "~/components/ui";
import { register } from "~/lib/api/auth";
import { useI18n } from "~/lib/i18n";
import { useRegistration } from "../context";

export const RegistrationPasswordStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.registration.steps.password;

  const context = useRegistration();
  const signup = useAction(register);

  const onSubmit: SubmitHandler<PasswordFormData> = async (values) => {
    context.setStore("password", values.newPassword1);

    const result = await signup(context.store);

    if (result?.error && result.error.detail) {
      toast.error(result.error.detail.toString());
    }
  };

  return (
    <Stepper.Step class="flex w-full flex-col items-stretch gap-6">
      <LottiePresenter path="tgs/key.json" class="size-24 self-center" />

      <hgroup class="space-y-4 text-center">
        <Heading>{t.heading()}</Heading>
        <p>{t.description()}</p>
      </hgroup>

      <PasswordForm onSubmit={onSubmit} />
    </Stepper.Step>
  );
};
