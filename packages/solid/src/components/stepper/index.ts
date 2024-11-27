import Backward, { type StepperBackwardProps as BackwardProps } from "./Backward";
import Forward, { type StepperForwardProps as ForwardProps } from "./Forward";
import Previous, { type StepperPreviousProps as PreviousProps } from "./Previous";
import Root, { type StepperRootProps as RootProps } from "./Root";
import Step, { type StepperStepProps as StepProps, type StepperStepReturn as StepReturn } from "./Step";
import Steps, { type StepperStepsProps as StepsProps } from "./Steps";
import useContext, { type StepperContextValue as ContextValue } from "./context";

export type {
  RootProps,
  StepsProps,
  StepProps,
  StepReturn,
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
