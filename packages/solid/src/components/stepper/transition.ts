import { createMemo } from "solid-js";
import type { TransitionProps } from "solid-transition-group";
import easing from "../transition/easing";
import useStepperContext from "./context";

export const createStepperTransition = (): TransitionProps => {
  const context = useStepperContext();

  const isMovingForward = createMemo(() => context.previousIndex < context.currentIndex);

  const animateEnter = (element: Element, done: VoidFunction) => {
    const animation = element.animate(
      [
        {
          opacity: 0,
          transform: isMovingForward() ? "translateX(100%)" : "translateX(-100%)",
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 250,
        easing: easing.easeOutCubic,
      },
    );
    animation.finished.then(done);
  };

  const animateExit = (element: Element, done: VoidFunction) => {
    const animation = element.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
          transform: isMovingForward() ? "translateX(-100%)" : "translateX(100%)",
        },
      ],
      {
        duration: 250,
        easing: easing.easeInCubic,
      },
    );

    animation.finished.then(() => {
      element.remove();
      return requestAnimationFrame(() => done());
    });
  };

  return {
    mode: "outin",
    onEnter: animateEnter,
    onExit: animateExit,
  };
};
