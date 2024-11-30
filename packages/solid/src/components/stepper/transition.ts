import { createSignal } from "solid-js";
import type { TransitionProps } from "solid-transition-group";
import easing from "../transition/easing";
import { getHeight } from "../transition/helpers";
import useStepperContext from "./context";

export const createStepperTransition = (): TransitionProps => {
  const context = useStepperContext();

  const isMovingForward = () => context.previousIndex < context.currentIndex;
  const [enterHeight, setEnterHeight] = createSignal<string>();

  const animateEnter = (element: Element, done: VoidFunction) => {
    element
      .animate(
        [
          {
            opacity: 0,
            height: enterHeight(),
            transform: isMovingForward() ? "translateX(100%)" : "translateX(-100%)",
          },
          {
            opacity: 1,
            height: getHeight(element),
            transform: "translateX(0)",
          },
        ],
        {
          duration: 400,
          easing: easing.easeOutCirc,
        },
      )
      .finished.then(done);
  };

  const animateExit = (element: Element, done: VoidFunction) => {
    element
      .animate(
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
          easing: easing.easeInCirc,
        },
      )
      .finished.then(done);
  };

  const onBeforeExit = (element: Element) => {
    setEnterHeight(getHeight(element));
  };

  return {
    mode: "outin",
    onEnter: animateEnter,
    onExit: animateExit,
    onBeforeExit,
  };
};
