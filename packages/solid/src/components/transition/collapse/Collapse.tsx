import { type ParentProps, splitProps } from "solid-js";

import { Transition } from "solid-transition-group";

import { KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES } from "../constants";
import { createCollapseTransition } from "./transition";

export type CollapseProps = ParentProps<KeyframeAnimationOptions>;

export const Collapse = (props: CollapseProps) => {
  const [localProps, otherProps] = splitProps(props, KEYFRAME_ANIMATION_OPTIONS_KEY_NAMES);
  return <Transition {...createCollapseTransition(localProps)}>{otherProps.children}</Transition>;
};

export default Collapse;
