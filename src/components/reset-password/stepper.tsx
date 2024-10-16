import { Stepper } from "../ui";
import { ResetPasswordProvider } from "./context";
import { ResetPasswordEmailStep } from "./steps/email";
import { ResetPasswordOtpStep } from "./steps/otp";
import { ResetPasswordPasswordStep } from "./steps/password";

export const ResetPasswordStepper = () => {
  return (
    <ResetPasswordProvider>
      <Stepper>
        <Stepper.Steps class="m-auto max-w-xs py-6">
          <ResetPasswordEmailStep />
          <ResetPasswordOtpStep />
          <ResetPasswordPasswordStep />
        </Stepper.Steps>
      </Stepper>
    </ResetPasswordProvider>
  );
};
