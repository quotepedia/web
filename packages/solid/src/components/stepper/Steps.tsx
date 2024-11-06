import type { Accessor, JSX, ParentProps, ValidComponent } from "solid-js";
import { children, createEffect, createSignal } from "solid-js";
import { Transition } from "solid-transition-group";

import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import useStepperContext from "./context";

export type StepperStepsProps = ParentProps;

export const StepperSteps = <T extends ValidComponent = "ol">(props: PolymorphicProps<T, StepperStepsProps>) => {
  const steps = children(() => props.children) as unknown as Accessor<Array<{ ref: () => JSX.Element }>>;
  const context = useStepperContext();

  const [enterHeight, setEnterHeight] = createSignal(0);

  const updateEnterHeight = (element: Element) => setEnterHeight(element.getBoundingClientRect().height);
  const isMovingForward = () => context.previousIndex < context.currentIndex;

  createEffect(() => {
    context.setLength(steps()?.length || 0);
  });

  const animateEnter = (element: Element, done: () => void) => {
    const animation = element.animate(
      [
        {
          opacity: 0,
          transform: isMovingForward() ? "translateX(100%)" : "translateX(-100%)",
          height: `${enterHeight()}px`,
        },
        {
          opacity: 1,
          transform: "translateX(0)",
          height: `${element.getBoundingClientRect().height}px`,
        },
      ],
      {
        duration: 400,
        easing: "cubic-bezier(0.08,0.82,0.17,1)",
      },
    );

    animation.finished.then(done);
  };

  const animateExit = (element: Element, done: () => void) => {
    const animation = element.animate(
      [
        {
          opacity: 1,
          transform: "translateX(0)",
        },
        {
          opacity: 0,
          transform: isMovingForward() ? "translateX(-100%)" : "translateX(100%)",
        },
      ],
      {
        duration: 200,
        easing: "cubic-bezier(0.6,0.04,0.98,0.34)",
      },
    );

    animation.finished.then(done);
  };

  return (
    <Polymorphic as={"ol"} {...props}>
      <Transition mode="outin" onEnter={animateEnter} onExit={animateExit} onBeforeExit={updateEnterHeight}>
        {steps()[context.currentIndex]?.ref()}
      </Transition>
    </Polymorphic>
  );
};

export default StepperSteps;
