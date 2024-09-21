import { useStepper } from "./context";
import { StepperRoot } from "./root";
import { StepperStep } from "./step";
import { StepperSteps } from "./steps";

export const Stepper = Object.assign(StepperRoot, {
  Steps: StepperSteps,
  Step: StepperStep,
  useContext: useStepper,
});
