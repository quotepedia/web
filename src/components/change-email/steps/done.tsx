import { Icon } from "solid-heroicons";
import { arrowRight } from "solid-heroicons/solid-mini";
import { Button, Heading, Lottie, Stepper } from "~/components/ui";
import Dialog from "~/components/ui/dialog";
import { useI18n } from "~/lib/i18n";
import { useChangeEmail } from "../context";

export const ChangeEmailDoneStep = () => {
  const i18n = useI18n();
  const t = i18n.t.components.changeEmail.steps.done;

  const context = useChangeEmail();

  return (
    <Stepper.Step class="flex w-full flex-col items-stretch gap-4">
      <Lottie path="/tgs/boomstick.json" class="mb-3 size-24 self-center" />

      <hgroup class="space-y-4 text-center">
        <Heading>{t.heading()}</Heading>
        <p>{t.description()}</p>
      </hgroup>

      <div class="flex w-full items-center justify-center gap-2">
        <span class="text-red-600">{context.store.previousEmail}</span>
        <Icon class="size-4" path={arrowRight} />
        <span class="text-green-600">{context.store.email}</span>
      </div>

      <p class="text-center">{t.purpose()}</p>

      <p class="text-center text-xs text-fg-muted">{t.editable()}</p>

      <Dialog.Close as={Button} color="primary" class="mt-3">
        {t.close()}
      </Dialog.Close>
    </Stepper.Step>
  );
};
