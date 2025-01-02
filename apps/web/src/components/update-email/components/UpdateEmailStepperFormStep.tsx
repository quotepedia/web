import { FormStore, type SubmitHandler } from "@modular-forms/solid";
import { Heading, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { type EmailFormData, UnregisteredEmailForm } from "~/components/EmailForm";
import { useScopedTranslator } from "~/lib/i18n";
import { useUpdateEmail } from "../context";
import { createSignal } from "solid-js";
import FormStepper from "~/components/form-stepper";

export const UpdateEmailStepperFormStep = () => {
  const t = useScopedTranslator("components.changeEmail.steps.email");

  const stepper = Stepper.useContext();
  const context = useUpdateEmail();
  const formStepper = FormStepper.useContext();

  const onSubmit: SubmitHandler<EmailFormData> = (values) => {
    context.set("email", values.email);
    stepper.moveForward();
  };

  const [form, setForm] = createSignal<FormStore<any, any>>();

  return (
    <Stepper.Step onEnter={() => formStepper.setForm(form())}>
      <Stack.Vertical class="gap-6">
        <Lottie path="/tgs/envelope.json" class="size-24" />

        <Stack.Vertical class="text-center">
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>
        </Stack.Vertical>

        <UnregisteredEmailForm ref={setForm} onSubmit={onSubmit} />
      </Stack.Vertical>
    </Stepper.Step>
  );
};
