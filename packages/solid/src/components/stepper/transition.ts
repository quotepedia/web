import { createSignal } from "solid-js";
import useStepperContext from "./context";
import { getHeight } from "../transition/helpers";
import type { TransitionProps } from "solid-transition-group";

export const createStepperTransition = (): TransitionProps => {
  const context = useStepperContext();

  const isMovingForward = () => context.previousIndex < context.currentIndex;
  const [enterHeight, setEnterHeight] = createSignal<string>();
  
  const onEnter = (element: Element, done: () => void) => {
    const animation = element.animate(
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
        easing: "cubic-bezier(0.08,0.82,0.17,1)",
      },
    );

    animation.finished.then(done);
  };

  const onExit = (element: Element, done: () => void) => {
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
  
  const onBeforeExit = (element: Element) => {
    setEnterHeight(getHeight(element))
  };

  return {
    onEnter,
    onExit,
    onBeforeExit,
  };
};
