import { Stepper } from "../ui";
import { ChangeEmailProvider } from "./context";
import { ChangeEmailDoneStep } from "./steps/done";
import { ChangeEmailEmailStep } from "./steps/email";
import { ChangeEmailOtpStep } from "./steps/otp";

export const ChangeEmailStepper = () => {
  return (
    <ChangeEmailProvider>
      <Stepper class="w-full">
        <Stepper.Steps>
          <ChangeEmailEmailStep />
          <ChangeEmailOtpStep />
          <ChangeEmailDoneStep />
        </Stepper.Steps>
      </Stepper>
    </ChangeEmailProvider>
  );
};
