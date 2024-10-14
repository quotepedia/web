import type { Accessor, FlowProps, JSX } from "solid-js";
import { children, createEffect, createSignal } from "solid-js";
import { Transition } from "solid-transition-group";

import useStepperContext from "./context";

export type StepperStepsProps = FlowProps;

export const StepperSteps = (props: StepperStepsProps) => {
  const steps = children(() => props.children) as unknown as Accessor<Array<{ ref: () => JSX.Element }>>;
  const context = useStepperContext();
  const [previousElementClientHeight, setPreviousElementClientHeight] = createSignal(0);

  createEffect(() => {
    context.setLength(steps()?.length || 0);
  });

  return (
    <Transition
      onEnter={(el, done) => {
        const a = el.animate(
          [
            {
              opacity: 0,
              height: `${previousElementClientHeight()}px`,
              transform: context.previousIndex < context.currentIndex ? "translateX(100%)" : "translateX(-100%)",
            },
            {
              opacity: 1,
              height: `${el.clientHeight}px`,
              transform: "translateX(0)",
            },
          ],
          {
            duration: 450,
            easing: "cubic-bezier(0.08,0.82,0.17,1)",
          },
        );
        a.finished.then(done);
      }}
      onBeforeExit={(el) => {
        setPreviousElementClientHeight(el.clientHeight);
      }}
      onExit={(el, done) => {
        const a = el.animate(
          [
            {
              opacity: 1,
              transform: "translateX(0)",
            },
            {
              opacity: 0,
              transform: context.previousIndex < context.currentIndex ? "translateX(-100%)" : "translateX(100%)",
            },
          ],
          {
            duration: 150,
            easing: "cubic-bezier(0.6,0.04,0.98,0.34)",
          },
        );
        a.finished.then(done);
      }}
      mode="outin"
    >
      {steps()[context.currentIndex].ref()}
    </Transition>
  );
};

export default StepperSteps;
