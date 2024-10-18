import { Stepper } from "~/shared/components";
import { RegistrationProvider } from "../Provider";
import { EmailFormStep } from "./EmailFormStep";
import { EmailVerificationFormStep } from "./EmailVerificationFormStep";
import { PasswordFormStep } from "./PasswordFormStep";

export const RegistrationStepper = () => {
  return (
    <RegistrationProvider>
      <Stepper>
        <Stepper.Steps class="m-auto max-w-xs py-6">
          <EmailFormStep />
          <EmailVerificationFormStep />
          <PasswordFormStep />
        </Stepper.Steps>
      </Stepper>
    </RegistrationProvider>
  );
};
