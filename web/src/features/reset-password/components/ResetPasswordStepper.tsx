import { Container, Stepper } from "~/shared/components";
import { ResetPasswordProvider } from "../Provider";
import { EmailFormStep } from "./EmailFormStep";
import { EmailVerificationFormStep } from "./EmailVerificationFormStep";
import { NewPasswordFormStep } from "./NewPasswordFormStep";

export const ResetPasswordStepper = () => {
  return (
    <ResetPasswordProvider>
      <Container size="tight" class="self-center">
        <Stepper>
          <Stepper.Steps>
            <EmailFormStep />
            <EmailVerificationFormStep />
            <NewPasswordFormStep />
          </Stepper.Steps>
        </Stepper>
      </Container>
    </ResetPasswordProvider>
  );
};
