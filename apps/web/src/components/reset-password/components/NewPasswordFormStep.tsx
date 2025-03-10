import type { SubmitHandler } from "@modular-forms/solid";
import { useAction } from "@solidjs/router";

import { Heading, Lottie, Stack, Stepper, Text, toast } from "@quotepedia/solid";
import { NewPasswordForm } from "~/components/NewPasswordForm";
import { resetPasswordAction } from "~/lib/api/auth";
import { type NewPasswordFormFieldValues } from "~/lib/api/users";
import { useScopedTranslator } from "~/lib/i18n";

import { useResetPassword } from "../context";

export const NewPasswordFormStep = () => {
  const t = useScopedTranslator("components.resetPassword.steps.password");

  const context = useResetPassword();
  const resetPassword = useAction(resetPasswordAction);

  const onSubmit: SubmitHandler<NewPasswordFormFieldValues> = async (values) => {
    context.set("password", values.newPassword1);

    const result = await resetPassword(context.store);

    if (result?.error && result.error.detail) {
      toast(result.error.detail.toString());
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

        <NewPasswordForm onSubmit={onSubmit} />
      </Stack.Vertical>
    </Stepper.Step>
  );
};
