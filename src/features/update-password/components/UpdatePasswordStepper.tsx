import { Stepper } from "~/shared/components";
import { NewPasswordFormStep } from "./NewPasswordFormStep";
import { PasswordUpdatedStep } from "./PasswordUpdatedStep";

export const UpdatePasswordStepper = () => {
  return (
    <Stepper>
      <Stepper.Steps class="w-full overflow-clip">
        <NewPasswordFormStep />
        <PasswordUpdatedStep />
      </Stepper.Steps>
    </Stepper>
  );
};
