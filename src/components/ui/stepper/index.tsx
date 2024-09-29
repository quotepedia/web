import { StepperBackward } from "./backward";
import { useStepper } from "./context";
import { StepperForward } from "./forward";
import { StepperPrevious } from "./previous";
import { StepperRoot } from "./root";
import { StepperStep } from "./step";
import { StepperSteps } from "./steps";

export const Stepper = Object.assign(StepperRoot, {
  Steps: StepperSteps,
  Step: StepperStep,
  Forward: StepperForward,
  Backward: StepperBackward,
  Previous: StepperPrevious,
  useContext: useStepper,
});
