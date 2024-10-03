import { SubmitHandler } from "@modular-forms/solid";
import { useAction } from "@solidjs/router";
import { toast } from "solid-sonner";
import { PasswordForm, PasswordFormData } from "~/components/forms/password";
import { Heading, Lottie, Stepper } from "~/components/ui";
import { resetUserPassword } from "~/lib/api/auth";
import { useI18n } from "~/lib/i18n";
import { useResetPassword } from "../context";

export const ResetPasswordPasswordStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.resetPassword.steps.password;

  const context = useResetPassword();
  const resetPassword = useAction(resetUserPassword);

  const onSubmit: SubmitHandler<PasswordFormData> = async (values) => {
    context.setStore("password", values.newPassword1);

    const result = await resetPassword(context.store);

    if (result?.error && result.error.detail) {
      toast.error(result.error.detail.toString());
    }
  };

  return (
    <Stepper.Step class="flex w-full flex-col items-stretch gap-6">
      <Lottie path="/tgs/key.json" class="size-24 self-center" />

      <hgroup class="space-y-4 text-center">
        <Heading>{t.heading()}</Heading>
        <p>{t.description()}</p>
      </hgroup>

      <PasswordForm onSubmit={onSubmit} />
    </Stepper.Step>
  );
};
