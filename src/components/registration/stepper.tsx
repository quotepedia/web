import { Stepper } from "../ui";
import { RegistrationProvider } from "./context";
import { RegistrationEmailStep } from "./steps/email";
import { RegistrationOtpStep } from "./steps/otp";
import { RegistrationPasswordStep } from "./steps/password";

export const RegistrationStepper = () => {
  return (
    <RegistrationProvider>
      <Stepper class="m-auto w-full max-w-xs py-6">
        <Stepper.Steps>
          <RegistrationEmailStep />
          <RegistrationOtpStep />
          <RegistrationPasswordStep />
        </Stepper.Steps>
      </Stepper>
    </RegistrationProvider>
  );
};
