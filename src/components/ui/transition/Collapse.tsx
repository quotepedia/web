import { type ParentProps, mergeProps, splitProps } from "solid-js";

import { Transition } from "solid-transition-group";
import { KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES } from "./constants";

export type CollapseProps = ParentProps & KeyframeAnimationOptions;

export const Collapse = (props: CollapseProps) => {
  const defaultedProps = mergeProps({ easing: "cubic-bezier(0.4,0,0.2,1)", duration: 75 }, props);
  const [options, otherProps] = splitProps(defaultedProps, KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES);

  return (
    <Transition
      mode="outin"
      exitActiveClass="overflow-hidden"
      enterActiveClass="overflow-hidden"
      onEnter={(element, done) => {
        const animation = element.animate(
          [
            {
              opacity: 0,
              margin: 0,
              height: 0,
            },
            {
              opacity: 1,
              margin: (element as HTMLElement)?.style.margin,
              height: `${element.getBoundingClientRect().height}px`,
            },
          ],
          options,
        );
        animation.finished.then(done);
      }}
      onExit={(element, done) => {
        const animation = element.animate(
          [
            {
              opacity: 1,
              margin: (element as HTMLElement)?.style.margin,
              height: `${element.getBoundingClientRect().height}px`,
            },
            {
              opacity: 0,
              margin: 0,
              height: 0,
            },
          ],
          options,
        );
        animation.finished.then(done);
      }}
    >
      {otherProps.children}
    </Transition>
  );
};

export default Collapse;
