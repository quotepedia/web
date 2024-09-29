import { StepperBackward } from "./Backward";
import { useStepper } from "./context";
import { StepperForward } from "./Forward";
import { StepperPrevious } from "./Previous";
import { StepperRoot } from "./Root";
import { StepperStep } from "./Step";
import { StepperSteps } from "./Steps";

export const Stepper = Object.assign(StepperRoot, {
  Steps: StepperSteps,
  Step: StepperStep,
  Forward: StepperForward,
  Backward: StepperBackward,
  Previous: StepperPrevious,
  useContext: useStepper,
});
