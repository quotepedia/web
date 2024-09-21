import { A } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { arrowLeft } from "solid-heroicons/solid-mini";
import { Button, Heading, Separator, LottiePresenter } from "~/components";
import { useI18n } from "~/lib/i18n";
import { Verifier } from "../verification";

export const ResetPasswordEmailStep = () => {
  const i18n = useI18n();

  return (
    <div class="flex flex-col items-center justify-center">
      <LottiePresenter path="tgs/envelope.json" class="mb-4 size-24" />

      <Heading>{i18n.t.routes.login.form.fields.password.forgot()}</Heading>

      <Separator orientation="horizontal" class="my-4" />

      <Verifier.Steps.Email />

      <Button as={A} href="/login" class="mt-2 w-full">
        <Icon path={arrowLeft} class="size-3.5" />
        {i18n.t.steps.resetPassword.email.back()}
      </Button>
    </div>
  );
};
