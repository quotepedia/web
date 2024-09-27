import { SubmitHandler } from "@modular-forms/solid";
import { A } from "@solidjs/router";
import { EmailFormData, UnregisteredEmailForm } from "~/components/forms/email";
import { Heading, Link, LottiePresenter, Stepper } from "~/components/ui";
import { useI18n } from "~/lib/i18n";
import { useRegistration } from "../context";

export const RegistrationEmailStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.registration.steps.email;

  const stepper = Stepper.useContext();
  const context = useRegistration();

  const onSubmit: SubmitHandler<EmailFormData> = (values) => {
    context.setStore("email", values.email);
    stepper.moveForward();
  };

  return (
    <Stepper.Step class="flex w-full flex-col items-stretch gap-6">
      <LottiePresenter path="tgs/writing.json" class="size-24 self-center" />

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
