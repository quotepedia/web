import type { Accessor, JSX, ValidComponent } from "solid-js";
import { createEffect } from "solid-js";
import createPersistent from "solid-persistent";

import { Polymorphic, PolymorphicProps } from "@kobalte/core/polymorphic";

import useStepperContext from "./context";

export type StepperStepProps = {
  index?: number;
  onEnter?: VoidFunction;
  children: ((current: Accessor<boolean>) => JSX.Element) | JSX.Element;
};

export const StepperStep = <T extends ValidComponent = "li">(props: PolymorphicProps<T, StepperStepProps>) => {
  const context = useStepperContext();

  const getPersistentStep = () => context.steps.get(context.currentIndex);

  const createPersistentStep = () => {
    props.index = context.currentIndex;

    const step = createPersistent(() => {
      const current = () => props.index === context.currentIndex;

      createEffect(() => {
        current() && props.onEnter?.();
      });

      return <Polymorphic as={"li"} aria-current="step" {...props} />;
    });

    context.steps.set(context.currentIndex, step);

    return step;
  };

  const ref = () => getPersistentStep() ?? createPersistentStep();

  return { ref: ref } as unknown as JSX.Element;
};

export default StepperStep;
