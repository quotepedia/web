import { Stepper } from "../ui";
import { ChangePasswordDoneStep } from "./steps/done";
import { ChangePasswordPasswordStep } from "./steps/password";

export const ChangePasswordStepper = () => {
  return (
    <Stepper class="w-full">
      <Stepper.Steps>
        <ChangePasswordPasswordStep />
        <ChangePasswordDoneStep />
      </Stepper.Steps>
    </Stepper>
  );
};
