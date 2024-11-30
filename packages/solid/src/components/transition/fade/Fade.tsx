import { type ParentProps, splitProps } from "solid-js";

import { Transition } from "solid-transition-group";

import { KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES } from "../constants";
import { createFadeTransition } from "./transition";

export type FadeProps = ParentProps<KeyframeAnimationOptions>;

export const Fade = (props: FadeProps) => {
  const [localProps, otherProps] = splitProps(props, KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES);
  return <Transition {...createFadeTransition(localProps)}>{otherProps.children}</Transition>;
};

export default Fade;
