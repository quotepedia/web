import { type JSX, type ValidComponent, createEffect, ParentProps } from "solid-js";
import createPersistent from "~/lib/utils/create/persistent";

import { Polymorphic, PolymorphicProps } from "@kobalte/core";

import { useStepper } from "./context";

export type StepperStepProps = ParentProps & {
  index?: number;
  onEnter?: () => any;
};

export const StepperStep = <T extends ValidComponent = "div">(props: PolymorphicProps<T, StepperStepProps>) => {
  const stepper = useStepper();

  const getPersistentStep = () => stepper.steps.get(stepper.currentIndex());

  const createPersistentStep = () => {
    props.index = stepper.currentIndex();
    const step = createPersistent(() => {
      createEffect(() => {
        props.index === stepper.currentIndex() && props.onEnter?.();
      });

      return <Polymorphic as={"li"} aria-current="step" {...props} />;
    });

    stepper.steps.set(stepper.currentIndex(), step);

    return step;
  };

  const ref = () => getPersistentStep() ?? createPersistentStep();

  return { ref: ref } as unknown as JSX.Element;
};
