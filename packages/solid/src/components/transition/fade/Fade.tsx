import { type ParentProps, mergeProps, splitProps } from "solid-js";

import { Transition } from "solid-transition-group";
import { KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES } from "../constants";
import { createFadeAnimation } from "./helpers";

export type FadeProps = ParentProps & KeyframeAnimationOptions;

export const Fade = (props: FadeProps) => {
  const defaultedProps = mergeProps({ easing: "cubic-bezier(0.4,0,0.2,1)", duration: 150 }, props);
  const [options, otherProps] = splitProps(defaultedProps, KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES);

  const [animateEnter, animateExit] = createFadeAnimation(options);

  return (
    <Transition
      mode="outin"
      onEnter={animateEnter}
      onExit={animateExit}
    >
      {otherProps.children}
    </Transition>
  );
};

export default Fade;
