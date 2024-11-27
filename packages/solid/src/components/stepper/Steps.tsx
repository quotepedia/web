import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import type { Accessor, ParentProps, ValidComponent } from "solid-js";
import { children } from "solid-js";
import { Transition } from "solid-transition-group";

import useStepperContext from "./context";
import { createStepperTransition } from "./transition";
import type { StepperStepReturn } from "./Step";

export type StepperStepsProps = ParentProps;

export const StepperSteps = <T extends ValidComponent = "div">(props: PolymorphicProps<T, StepperStepsProps>) => {
  const context = useStepperContext();

  const steps = children(() => props.children) as unknown as Accessor<Array<StepperStepReturn>>;

  return (
    <Polymorphic as="div" {...props}>
      <Transition mode="outin" {...createStepperTransition()}>
        {steps()[context.currentIndex]?.ref()()}
      </Transition>
    </Polymorphic>
  );
};

export default StepperSteps;
