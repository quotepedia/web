import type { SubmitHandler } from "@modular-forms/solid";
import { Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { type EmailFormData, UnregisteredEmailForm } from "@src/entities/user";
import { useScopedTranslator } from "@src/shared/i18n";
import { useUpdateEmail } from "../context";

export const NewEmailFormStep = () => {
  const t = useScopedTranslator("components.changeEmail.steps.email");

  const stepper = Stepper.useContext();
  const context = useUpdateEmail();

  const onSubmit: SubmitHandler<EmailFormData> = (values) => {
    context.set("email", values.email);
    stepper.moveForward();
  };

  return (
    <Stepper.Step>
      <Stack.Vertical class="gap-6">
        <Lottie path="/tgs/envelope.json" class="size-24" />

        <Stack.Vertical class="text-center">
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>
        </Stack.Vertical>

        <UnregisteredEmailForm onSubmit={onSubmit} />
      </Stack.Vertical>
    </Stepper.Step>
  );
};
