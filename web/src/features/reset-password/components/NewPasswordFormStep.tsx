import { SubmitHandler } from "@modular-forms/solid";
import { useAction } from "@solidjs/router";
import { toast } from "solid-sonner";

import { Heading, Stack, Stepper, Text } from "@quotepedia/solid";
import { resetUserPassword } from "~/entities/auth";
import { PasswordForm, PasswordFormData } from "~/entities/user";
import { Lottie } from "~/shared/components";
import { useI18n } from "~/shared/i18n";

import { useResetPassword } from "../context";

export const NewPasswordFormStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.resetPassword.steps.password;

  const context = useResetPassword();
  const resetPassword = useAction(resetUserPassword);

  const onSubmit: SubmitHandler<PasswordFormData> = async (values) => {
    context.set("password", values.newPassword1);

    const result = await resetPassword(context.store);

    if (result?.error && result.error.detail) {
      toast.error(result.error.detail.toString());
    }
  };

  return (
    <Stepper.Step>
      <Stack.Vertical class="gap-6">
        <Lottie path="/tgs/key.json" class="size-24 self-center" />

        <Stack.Vertical class="text-center">
          <Heading>{t.heading()}</Heading>
          <Text>{t.description()}</Text>
        </Stack.Vertical>

        <PasswordForm onSubmit={onSubmit} />
      </Stack.Vertical>
    </Stepper.Step>
  );
};
