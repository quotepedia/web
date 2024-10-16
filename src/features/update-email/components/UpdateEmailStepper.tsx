import { Stepper } from "~/shared/components";
import { ChangeEmailProvider } from "../Provider";
import { EmailUpdatedStep } from "./EmailUpdatedStep";
import { NewEmailFormStep } from "./NewEmailFormStep";
import { NewEmailVerificationFormStep } from "./NewEmailVerificationFormStep";

export const UpdateEmailStepper = () => {
  return (
    <ChangeEmailProvider>
      <Stepper>
        <Stepper.Steps class="w-full">
          <NewEmailFormStep />
          <NewEmailVerificationFormStep />
          <EmailUpdatedStep />
        </Stepper.Steps>
      </Stepper>
    </ChangeEmailProvider>
  );
};
