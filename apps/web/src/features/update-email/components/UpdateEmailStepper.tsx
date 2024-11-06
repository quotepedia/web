import { Stepper } from "@quotepedia/solid";
import { ChangeEmailProvider } from "../Provider";
import { EmailUpdatedStep } from "./EmailUpdatedStep";
import { NewEmailFormStep } from "./NewEmailFormStep";
import { NewEmailVerificationFormStep } from "./NewEmailVerificationFormStep";

export const UpdateEmailStepper = () => {
  return (
    <ChangeEmailProvider>
      <Stepper>
        <Stepper.Steps class="my-auto overflow-y-auto overflow-x-hidden">
          <NewEmailFormStep />
          <NewEmailVerificationFormStep />
          <EmailUpdatedStep />
        </Stepper.Steps>
      </Stepper>
    </ChangeEmailProvider>
  );
};
