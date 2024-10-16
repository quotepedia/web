import { Stepper } from "../ui";
import { ChangeEmailProvider } from "./context";
import { ChangeEmailDoneStep } from "./steps/done";
import { ChangeEmailEmailStep } from "./steps/email";
import { ChangeEmailOtpStep } from "./steps/otp";

export const ChangeEmailStepper = () => {
  return (
    <ChangeEmailProvider>
      <Stepper>
        <Stepper.Steps class="w-full">
          <ChangeEmailEmailStep />
          <ChangeEmailOtpStep />
          <ChangeEmailDoneStep />
        </Stepper.Steps>
      </Stepper>
    </ChangeEmailProvider>
  );
};
