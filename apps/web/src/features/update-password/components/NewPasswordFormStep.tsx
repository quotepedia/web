import type { SubmitHandler } from "@modular-forms/solid";
import { Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { useAction } from "@solidjs/router";
import { toast } from "solid-sonner";
import { PasswordForm, type PasswordFormData, updateCurrentUserPassword } from "~/entities/user";
import { useScopedTranslator } from "~/shared/i18n";

export const NewPasswordFormStep = () => {
  const t = useScopedTranslator("components.changePassword.steps.password");

  const stepper = Stepper.useContext();

  const changePassword = useAction(updateCurrentUserPassword);

  const onSubmit: SubmitHandler<PasswordFormData> = async (values) => {
    const { error } = await changePassword({ password: values.newPassword1 });

    if (error) {
      toast.error(String(error.detail));
    } else {
      stepper.moveForward();
    }
  };

  return (
    <Stepper.Step>
      <Stack.Vertical class="gap-6">
        <Lottie path="/tgs/see.json" class="size-24" />

        <Stack.Vertical class="text-center">
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>
        </Stack.Vertical>

        <PasswordForm onSubmit={onSubmit} />
      </Stack.Vertical>
    </Stepper.Step>
  );
};
