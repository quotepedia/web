import { Container, Stepper } from "@quotepedia/solid";
import FormStepper from "~/entities/form-stepper";
import { ChangeEmailProvider } from "../Provider";
import { UpdateEmailStepperDescriptionStep } from "./UpdateEmailStepperDescriptionStep";
import { UpdateEmailStepperDoneStep } from "./UpdateEmailStepperDoneStep";
import { UpdateEmailStepperFormStep } from "./UpdateEmailStepperFormStep";
import { UpdateEmailStepperVerificationStep } from "./UpdateEmailStepperVerificationStep";
import { useTranslator } from "~/shared/i18n";

export const UpdateEmailStepper = () => {
  const t = useTranslator();

  return (
    <ChangeEmailProvider>
      <FormStepper>
        <FormStepper.NavigationBar title={t("settings.account.email.update")} href="/settings/account" />
        <Stepper.Steps as={Container} size="tight" class="my-auto">
          <UpdateEmailStepperDescriptionStep />
          <UpdateEmailStepperFormStep />
          <UpdateEmailStepperVerificationStep />
          <UpdateEmailStepperDoneStep />
        </Stepper.Steps>
      </FormStepper>
    </ChangeEmailProvider>
  );
};
