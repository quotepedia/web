import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import type { Accessor, JSX, ValidComponent } from "solid-js";
import { createEffect, onCleanup, onMount, splitProps } from "solid-js";
import createPersistent from "solid-persistent";

import { cn } from "@src/utils/css";
import useStepperContext from "./context";

export type StepperStepProps = {
  class?: string;
  index?: number;
  children: JSX.Element;
  onEnter?: VoidFunction;
};

export type StepperStepReturn = { ref: () => Accessor<JSX.Element> };

export const StepperStep = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, StepperStepProps>,
): JSX.Element => {
  const context = useStepperContext();

  const [scopedProps, otherProps] = splitProps(props, ["class"]);

  const ref = () => getPersistentRef() ?? createPersistentRef();

  const getPersistentRef = () => context.steps.get(context.currentIndex);

  const createPersistentRef = () => {
    props.index = context.currentIndex;

    const ref = createPersistent(() => {
      createEffect(() => {
        if (props.index === context.currentIndex) {
          props.onEnter?.();
        }
      });

      return (
        <Polymorphic
          as="div"
          aria-current="step"
          class={cn("flex items-center justify-center", scopedProps.class)}
          {...otherProps}
        />
      );
    });

    context.steps.set(context.currentIndex, ref);

    return ref;
  };

  onMount(() => {
    context.register();
  });

  onCleanup(() => {
    context.unregister();
  });

  return { ref: ref } satisfies StepperStepReturn as unknown as JSX.Element;
};

export default StepperStep;
