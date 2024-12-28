import { Button, Heading, Link, Lottie, Stack, Stepper, Text } from "@quotepedia/solid";
import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import FormStepper from "~/entities/form-stepper";
import { getCurrentUser } from "~/entities/user";
import { useScopedTranslator, useTranslator } from "~/shared/i18n";

export const UpdateEmailStepperDescriptionStep = () => {
  const t = useTranslator();
  const formStepper = FormStepper.useContext();
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <Stepper.Step onEnter={() => formStepper.setForm(undefined)}>
      <Show when={currentUser()}>
        {(user) => (
          <Stack.Vertical class="gap-6 text-center">
            <Lottie path="/tgs/envelope.json" class="size-24" />

            <Stack.Vertical>
              <Heading>{t("components.changeEmail.steps.description.heading")}</Heading>
              <Text>
                {t("components.changeEmail.steps.description.current")}{" "}
                <Link href={`mailto:${user().email}`}>{user().email}</Link>
              </Text>
            </Stack.Vertical>

            <Text>{t("components.changeEmail.steps.description.description")}</Text>

            <Text variant="muted">{t("components.changeEmail.steps.description.hint")}</Text>

            <Stepper.Forward as={Button} class="w-full">
              {t("continue")}
            </Stepper.Forward>
          </Stack.Vertical>
        )}
      </Show>
    </Stepper.Step>
  );
};
