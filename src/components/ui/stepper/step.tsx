import type { JSX, ValidComponent } from "solid-js";
import { createEffect, ParentProps } from "solid-js";
import createPersistent from "solid-persistent";

import { Polymorphic, PolymorphicProps } from "@kobalte/core/polymorphic";

import useStepperContext from "./context";

export type StepperStepProps = ParentProps & {
  index?: number;
  onEnter?: () => any;
};

export const StepperStep = <T extends ValidComponent = "div">(props: PolymorphicProps<T, StepperStepProps>) => {
  const context = useStepperContext();

  const getPersistentStep = () => context.steps.get(context.currentIndex);

  const createPersistentStep = () => {
    props.index = context.currentIndex;
    const step = createPersistent(() => {
      createEffect(() => {
        props.index === context.currentIndex && props.onEnter?.();
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
