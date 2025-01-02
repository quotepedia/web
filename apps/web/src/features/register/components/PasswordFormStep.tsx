import type { SubmitHandler } from "@modular-forms/solid";
import { useAction } from "@solidjs/router";
import { toast } from "solid-sonner";

import { Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { registerAction } from "~/shared/api/auth";
import { NewPasswordForm } from "~/entities/NewPasswordForm";
import type { NewPasswordFormFieldValues } from "~/shared/api/users";

import { useScopedTranslator } from "~/shared/i18n";
import { useRegistration } from "../context";

export const PasswordFormStep = () => {
  const t = useScopedTranslator("components.registration.steps.password");

  const context = useRegistration();
  const register = useAction(registerAction);

  const onSubmit: SubmitHandler<NewPasswordFormFieldValues> = async (values) => {
    context.set("password", values.newPassword1);

    const result = await register(context.store);

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

        <NewPasswordForm onSubmit={onSubmit} />
      </Stack.Vertical>
    </Stepper.Step>
  );
};
