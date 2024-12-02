import type { TransitionProps } from "solid-transition-group";
import easing from "../easing";
import { getHeight } from "../helpers";

export const COLLAPSED_PROPERTIES = {
  height: 0,
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  borderTopWidth: 0,
  borderBottomWidth: 0,
};

const animateExit = (element: Element, done: VoidFunction, options: KeyframeAnimationOptions) => {
  element
    .animate(
      [
        {
          height: getHeight(element),
        },
        COLLAPSED_PROPERTIES,
      ],
      options,
    )
    .finished.then(done);
};

const animateEnter = (element: Element, done: VoidFunction, options: KeyframeAnimationOptions) => {
  element
    .animate(
      [
        COLLAPSED_PROPERTIES,
        {
          height: getHeight(element),
        },
      ],
      options,
    )
    .finished.then(done);
};

export const createCollapseTransition = (options: KeyframeAnimationOptions): TransitionProps => {
  options = { easing: easing.easeOutQuart, duration: 150, ...options };

  return {
    mode: "outin",
    exitActiveClass: "overflow-hidden",
    enterActiveClass: "overflow-hidden",
    onExit: (element: Element, done: VoidFunction) => animateExit(element, done, options),
    onEnter: (element: Element, done: VoidFunction) => animateEnter(element, done, options),
  };
};
