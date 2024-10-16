import { Stepper } from "../ui";
import { RegistrationProvider } from "./context";
import { RegistrationEmailStep } from "./steps/email";
import { RegistrationOtpStep } from "./steps/otp";
import { RegistrationPasswordStep } from "./steps/password";

export const RegistrationStepper = () => {
  return (
    <RegistrationProvider>
      <Stepper>
        <Stepper.Steps class="m-auto max-w-xs py-6">
          <RegistrationEmailStep />
          <RegistrationOtpStep />
          <RegistrationPasswordStep />
        </Stepper.Steps>
      </Stepper>
    </RegistrationProvider>
  );
};
