import { getHeight } from "../helpers";
import { COLLAPSED_PROPERTIES } from "./constants";

const animateEnter = (el: Element, done: VoidFunction, options: number | KeyframeAnimationOptions) => {
  const a = el.animate(
    [
      COLLAPSED_PROPERTIES,
      {
        height: getHeight(el),
      },
    ],
    options,
  );

  a.finished.then(done);
};

const animateExit = (el: Element, done: VoidFunction, options: number | KeyframeAnimationOptions) => {
  const a = el.animate(
    [
      {
        height: getHeight(el),
      },
      COLLAPSED_PROPERTIES,
    ],
    options,
  );

  a.finished.then(done);
};

export const createCollapseAnimation = (options: number | KeyframeAnimationOptions) => {
  return [
    (el: Element, done: VoidFunction) => animateEnter(el, done, options),
    (el: Element, done: VoidFunction) => animateExit(el, done, options),
  ];
};
