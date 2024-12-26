import type { SubmitHandler } from "@modular-forms/solid";
import { Heading, Link, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { UnregisteredEmailForm, type EmailFormData } from "@src/entities/user";
import { useScopedTranslator } from "@src/shared/i18n";
import { useRegistration } from "../context";

export const EmailFormStep = () => {
  const t = useScopedTranslator("components.registration.steps.email");

  const stepper = Stepper.useContext();
  const context = useRegistration();

  const onSubmit: SubmitHandler<EmailFormData> = (values) => {
    context.set("email", values.email);
    stepper.moveForward();
  };

  return (
    <Stepper.Step>
      <Stack.Vertical class="gap-6">
        <Lottie path="/tgs/writing.json" class="size-24 self-center" />

        <Stack.Vertical class="text-center">
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>
        </Stack.Vertical>

        <UnregisteredEmailForm onSubmit={onSubmit} />

        <Stack.Horizontal class="gap-1 text-sm" separator={"·"}>
          <Link as={A} href="/">
            {t("home")}
          </Link>
          <Link as={A} href="/settings">
            {t("settings")}
          </Link>
          <Link as={A} href="/login">
            {t("login")}
          </Link>
        </Stack.Horizontal>
      </Stack.Vertical>
    </Stepper.Step>
  );
};
