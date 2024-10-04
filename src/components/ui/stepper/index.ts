import Backward, { StepperBackwardProps as BackwardProps } from "./Backward";
import Forward, { StepperForwardProps as ForwardProps } from "./Forward";
import Previous, { StepperPreviousProps as PreviousProps } from "./Previous";
import Root, { StepperRootProps as RootProps } from "./Root";
import Step, { StepperStepProps as StepProps } from "./Step";
import Steps, { StepperStepsProps as StepsProps } from "./Steps";
import useContext, { StepperContextValue as ContextValue } from "./context";

export type {
  RootProps,
  StepsProps,
  StepProps,
  ForwardProps,
  BackwardProps,
  PreviousProps,
  ContextValue,
};

export {
  Root,
  Steps,
  Step,
  Forward,
  Backward,
  Previous,
  useContext,
};

export const Stepper = Object.assign(Root, {
  Steps,
  Step,
  Forward,
  Backward,
  Previous,
  useContext,
});

export default Stepper;
