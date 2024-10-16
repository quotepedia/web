import { Stepper } from "../ui";
import { ChangePasswordDoneStep } from "./steps/done";
import { ChangePasswordPasswordStep } from "./steps/password";

export const ChangePasswordStepper = () => {
  return (
    <Stepper>
      <Stepper.Steps class="w-full overflow-clip">
        <ChangePasswordPasswordStep />
        <ChangePasswordDoneStep />
      </Stepper.Steps>
    </Stepper>
  );
};
