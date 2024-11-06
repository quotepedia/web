import { Container, Stepper } from "@quotepedia/solid";
import { RegistrationProvider } from "../Provider";
import { EmailFormStep } from "./EmailFormStep";
import { EmailVerificationFormStep } from "./EmailVerificationFormStep";
import { PasswordFormStep } from "./PasswordFormStep";

export const RegistrationStepper = () => {
  return (
    <RegistrationProvider>
      <Container size="tight" class="self-center">
        <Stepper>
          <Stepper.Steps>
            <EmailFormStep />
            <EmailVerificationFormStep />
            <PasswordFormStep />
          </Stepper.Steps>
        </Stepper>
      </Container>
    </RegistrationProvider>
  );
};
