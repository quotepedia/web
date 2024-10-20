import { SubmitHandler } from "@modular-forms/solid";
import { useAction } from "@solidjs/router";
import { toast } from "solid-sonner";
import { PasswordForm, PasswordFormData } from "~/entities/user/password";
import { updateCurrentUserPassword } from "~/shared/api/users/me";
import { Heading, Lottie, Stack, Stepper, Text } from "~/shared/components";
import { useStepperContext } from "~/shared/components/stepper/context";
import { useI18n } from "~/shared/i18n";

export const NewPasswordFormStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.changePassword.steps.password;

  const stepper = useStepperContext();

  const changePassword = useAction(updateCurrentUserPassword);

  const onSubmit: SubmitHandler<PasswordFormData> = async (values) => {
    const result = await changePassword(values.newPassword1);
    if (!result.error) {
      stepper.moveForward();
      return;
    }
    if (result.error.detail) {
      toast.error(result.error.detail.toString());
    }
  };

  return (
    <Stepper.Step>
      <Stack.Vertical class="gap-6">
        <Lottie path="/tgs/key.json" class="size-24" />

        <Stack.Vertical class="text-center">
          <Heading>{t.heading()}</Heading>
          <Text>{t.description()}</Text>
        </Stack.Vertical>

        <PasswordForm onSubmit={onSubmit} />
      </Stack.Vertical>
    </Stepper.Step>
  );
};
