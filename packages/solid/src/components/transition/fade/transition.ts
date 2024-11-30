import type { TransitionProps } from "solid-transition-group";
import easing from "../easing";

export const FADE_SHOWN_PROPERTIES = {
  opacity: 1,
};

export const FADE_HIDDEN_PROPERTIES = {
  opacity: 0,
};

const animateExit = (element: Element, done: VoidFunction, options: number | KeyframeAnimationOptions) => {
  element.animate([FADE_SHOWN_PROPERTIES, FADE_HIDDEN_PROPERTIES], options).finished.then(done);
};

const animateEnter = (element: Element, done: VoidFunction, options: number | KeyframeAnimationOptions) => {
  element.animate([FADE_HIDDEN_PROPERTIES, FADE_SHOWN_PROPERTIES], options).finished.then(done);
};

export const createFadeTransition = (options: KeyframeAnimationOptions): TransitionProps => {
  options = { easing: easing.easeInOut, duration: 150, ...options };

  return {
    mode: "outin",
    onExit: (element: Element, done: VoidFunction) => animateExit(element, done, options),
    onEnter: (element: Element, done: VoidFunction) => animateEnter(element, done, options),
  };
};
