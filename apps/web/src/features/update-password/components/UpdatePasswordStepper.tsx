import { Container, Stepper } from "@quotepedia/solid";
import FormStepper from "~/entities/form-stepper";
import { useTranslator } from "~/shared/i18n";
import { UpdatePasswordStepperDescriptionStep } from "./UpdatePasswordStepperDescriptionStep";
import { UpdatePasswordStepperDoneStep } from "./UpdatePasswordStepperDoneStep";
import { UpdatePasswordStepperFormStep } from "./UpdatePasswordStepperFormStep";

export const UpdatePasswordStepper = () => {
  const t = useTranslator();

  return (
    <FormStepper>
      <FormStepper.NavigationBar title={t("settings.account.password.update")} href="/settings/account" />
      <Stepper.Steps as={Container} size="tight" class="my-auto">
        <UpdatePasswordStepperDescriptionStep />
        <UpdatePasswordStepperFormStep />
        <UpdatePasswordStepperDoneStep />
      </Stepper.Steps>
    </FormStepper>
  );
};
