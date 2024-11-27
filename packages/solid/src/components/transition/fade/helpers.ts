const animateEnter = (el: Element, done: VoidFunction, options: number | KeyframeAnimationOptions) => {
  const a = el.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
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
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    options,
  );

  a.finished.then(done);
};

export const createFadeAnimation = (options: number | KeyframeAnimationOptions) => {
  return [
    (el: Element, done: VoidFunction) => animateEnter(el, done, options),
    (el: Element, done: VoidFunction) => animateExit(el, done, options),
  ];
};
