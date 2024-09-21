import { Accessor, FlowComponent, type JSX, children, createEffect } from "solid-js";

import { Transition } from "solid-transition-group";
import { Stepper } from ".";

export const StepperSteps: FlowComponent = (props) => {
  // eslint-disable-next-line solid/reactivity
  const steps = children(() => props.children) as unknown as Accessor<Array<{ ref: () => JSX.Element }>>;
  const stepper = Stepper.useContext();

  createEffect(() => {
    stepper.setStepsCount(steps()?.length || 0);
  });

  return (
    <Transition
      onEnter={(el, done) => {
        const a = el.animate(
          [
            {
              opacity: 0,
              transform: stepper.previousIndex() < stepper.currentIndex() ? "translateX(100%)" : "translateX(-100%)",
            },
            {
              opacity: 1,
              transform: "translateX(0)",
            },
          ],
          {
            duration: 450,
            easing: "cubic-bezier(0.08,0.82,0.17,1)", // TODO: Add tailwind classes named ease-*
          },
        );
        a.finished.then(done);
      }}
      onExit={(el, done) => {
        const a = el.animate(
          [
            { opacity: 1, transform: "translateX(0)" },
            {
              opacity: 0,
              transform: stepper.previousIndex() < stepper.currentIndex() ? "translateX(-100%)" : "translateX(100%)",
            },
          ],
          {
            duration: 150,
            easing: "cubic-bezier(0.6,0.04,0.98,0.34)", // TODO: Add tailwind classes named ease-*
          },
        );
        a.finished.then(done);
      }}
      mode="outin"
    >
      {steps()[stepper.currentIndex()].ref()}
    </Transition>
  );
};
