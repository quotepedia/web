import { Stepper } from "~/shared/components";
import { ResetPasswordProvider } from "../Provider";
import { EmailFormStep } from "./EmailFormStep";
import { EmailVerificationFormStep } from "./EmailVerificationFormStep";
import { NewPasswordFormStep } from "./NewPasswordFormStep";

export const ResetPasswordStepper = () => {
  return (
    <ResetPasswordProvider>
      <Stepper>
        <Stepper.Steps class="m-auto max-w-xs py-6">
          <EmailFormStep />
          <EmailVerificationFormStep />
          <NewPasswordFormStep />
        </Stepper.Steps>
      </Stepper>
    </ResetPasswordProvider>
  );
};
