import { Stepper } from "~/shared/components";
import { NewPasswordFormStep } from "./NewPasswordFormStep";
import { PasswordUpdatedStep } from "./PasswordUpdatedStep";

export const UpdatePasswordStepper = () => {
  return (
    <Stepper>
      <Stepper.Steps class="w-full">
        <NewPasswordFormStep />
        <PasswordUpdatedStep />
      </Stepper.Steps>
    </Stepper>
  );
};
