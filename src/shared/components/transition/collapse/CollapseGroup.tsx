import { type ParentProps, mergeProps, splitProps } from "solid-js";

import { TransitionGroup } from "solid-transition-group";
import { KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES } from "../constants";
import { createCollapseAnimation } from "./helpers";

export type CollapseGroupProps = ParentProps & KeyframeAnimationOptions;

export const CollapseGroup = (props: CollapseGroupProps) => {
  const defaultedProps = mergeProps({ easing: "cubic-bezier(0.4,0,0.2,1)", duration: 75 }, props);
  const [options, otherProps] = splitProps(defaultedProps, KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES);

  const [animateEnter, animateExit] = createCollapseAnimation(options);

  return (
    <TransitionGroup
      exitActiveClass="overflow-hidden"
      enterActiveClass="overflow-hidden"
      onEnter={animateEnter}
      onExit={animateExit}
    >
      {otherProps.children}
    </TransitionGroup>
  );
};

export default CollapseGroup;
