import type { SubmitHandler } from "@modular-forms/solid";
import { A } from "@solidjs/router";
import { UnregisteredEmailForm, type EmailFormData } from "~/entities/user/email";
import { Heading, Link, Lottie, Stepper } from "~/shared/components";
import { useI18n } from "~/shared/i18n";
import { useRegistration } from "../context";

export const EmailFormStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.registration.steps.email;

  const stepper = Stepper.useContext();
  const context = useRegistration();

  const onSubmit: SubmitHandler<EmailFormData> = (values) => {
    context.set("email", values.email);
    stepper.moveForward();
  };

  return (
    <Stepper.Step class="flex w-full flex-col gap-6">
      <Lottie path="/tgs/writing.json" class="size-24 self-center" />

      <hgroup class="space-y-4 text-center">
        <Heading>{t.heading()}</Heading>
        <p>{t.description()}</p>
      </hgroup>

      <UnregisteredEmailForm onSubmit={onSubmit} />

      <p class="text-center text-xs text-fg-muted">
        <Link as={A} href="/">
          {t.home()}
        </Link>
        {" · "}
        <Link as={A} href="/settings">
          {t.settings()}
        </Link>
        {" · "}
        <Link as={A} href="/login">
          {t.login()}
        </Link>
      </p>
    </Stepper.Step>
  );
};
