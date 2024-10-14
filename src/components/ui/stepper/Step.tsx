import type { JSX, ValidComponent } from "solid-js";
import { createEffect, ParentProps, splitProps } from "solid-js";
import createPersistent from "solid-persistent";

import { Polymorphic, PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "~/lib/utils/css";
import useStepperContext from "./context";

export type StepperStepProps = ParentProps &
  JSX.StylableSVGAttributes & {
    index?: number;
    onEnter?: () => any;
  };

export const StepperStep = <T extends ValidComponent = "div">(props: PolymorphicProps<T, StepperStepProps>) => {
  const context = useStepperContext();
  const [scopedProps, otherProps] = splitProps(props, ["class"]);

  const getPersistentStep = () => context.steps.get(context.currentIndex);

  const createPersistentStep = () => {
    props.index = context.currentIndex;
    const step = createPersistent(() => {
      createEffect(() => {
        props.index === context.currentIndex && props.onEnter?.();
      });

      return (
        <Polymorphic
          as={"li"}
          class={cn("flex items-center justify-center", scopedProps.class)}
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
