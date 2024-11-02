import { SubmitHandler } from "@modular-forms/solid";
import { useAction } from "@solidjs/router";
import { toast } from "solid-sonner";
import { PasswordForm, PasswordFormData } from "~/entities/user/password";
import { Heading, Lottie, Stack, Stepper, Text } from "~/shared/components";
import { register } from "~/shared/api/auth";
import { useI18n } from "~/shared/i18n";
import { useRegistration } from "../context";

export const PasswordFormStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.registration.steps.password;

  const context = useRegistration();
  const signup = useAction(register);

  const onSubmit: SubmitHandler<PasswordFormData> = async (values) => {
    context.set("password", values.newPassword1);

    const result = await signup(context.store);

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
