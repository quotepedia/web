import type { Accessor, JSX, ValidComponent } from "solid-js";
import { createEffect, splitProps } from "solid-js";
import createPersistent from "solid-persistent";

import { Polymorphic, PolymorphicProps } from "@kobalte/core/polymorphic";

import useStepperContext from "./context";
import { cn } from "~/shared/utils/css";

export type StepperStepProps = {
  class?: string;
  index?: number;
  onEnter?: VoidFunction;
  children: ((current: Accessor<boolean>) => JSX.Element) | JSX.Element;
};

export const StepperStep = <T extends ValidComponent = "li">(props: PolymorphicProps<T, StepperStepProps>) => {
  const context = useStepperContext();
  const [scopedProps, otherProps] = splitProps(props, ["class"]);

  const getPersistentStep = () => context.steps.get(context.currentIndex);

  const createPersistentStep = () => {
    props.index = context.currentIndex;

    const step = createPersistent(() => {
      const current = () => props.index === context.currentIndex;

      createEffect(() => {
        current() && props.onEnter?.();
      });

      return (
        <Polymorphic
          as={"li"}
          class={cn("flex items-center justify-center", scopedProps)}
          aria-current="step"
          {...otherProps}
        />
      );
    });

    context.steps.set(context.currentIndex, step);

    return step;
  };

  const ref = () => getPersistentStep() ?? createPersistentStep();

  return { ref: ref } as unknown as JSX.Element;
};

export default StepperStep;
