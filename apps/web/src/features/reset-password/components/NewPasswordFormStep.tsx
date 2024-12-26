import type { SubmitHandler } from "@modular-forms/solid";
import { Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { useAction } from "@solidjs/router";
import { resetUserPassword } from "@src/entities/auth";
import { PasswordForm, type PasswordFormData } from "@src/entities/user";
import { useScopedTranslator } from "@src/shared/i18n";
import { toast } from "solid-sonner";
import { useResetPassword } from "../context";

export const NewPasswordFormStep = () => {
  const t = useScopedTranslator("components.resetPassword.steps.password");

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
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>
        </Stack.Vertical>

        <PasswordForm onSubmit={onSubmit} />
      </Stack.Vertical>
    </Stepper.Step>
  );
};
