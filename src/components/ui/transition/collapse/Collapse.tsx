import { type ParentProps, mergeProps, splitProps } from "solid-js";

import { Transition } from "solid-transition-group";
import { KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES } from "../constants";
import { createCollapseAnimation } from "./helpers";

export type CollapseProps = ParentProps & KeyframeAnimationOptions;

export const Collapse = (props: CollapseProps) => {
  const defaultedProps = mergeProps({ easing: "cubic-bezier(0.4,0,0.2,1)", duration: 75 }, props);
  const [options, otherProps] = splitProps(defaultedProps, KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES);

  const [animateEnter, animateExit] = createCollapseAnimation(options);

  return (
    <Transition
      mode="outin"
      exitActiveClass="overflow-hidden"
      enterActiveClass="overflow-hidden"
      onEnter={animateEnter}
      onExit={animateExit}
    >
      {otherProps.children}
    </Transition>
  );
};

export default Collapse;
