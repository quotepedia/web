import { Stepper } from "@quotepedia/solid";
import { NewPasswordFormStep } from "./NewPasswordFormStep";
import { PasswordUpdatedStep } from "./PasswordUpdatedStep";

export const UpdatePasswordStepper = () => {
  return (
    <Stepper>
      <Stepper.Steps class="my-auto overflow-y-auto overflow-x-hidden">
        <NewPasswordFormStep />
        <PasswordUpdatedStep />
      </Stepper.Steps>
    </Stepper>
  );
};
